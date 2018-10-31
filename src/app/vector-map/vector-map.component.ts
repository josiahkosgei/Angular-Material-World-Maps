import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { JurisdictionSearchType } from '../models/enums/jurisdiction-search-type.enum';
import { JurisdictionSearch } from '../models/jurisdiction-search';
import { Jurisdiction } from '../models/juristiction';
import * as _ from 'underscore';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.css']
})
export class VectorMapComponent implements OnDestroy, AfterViewInit {
  private chart: AmChart;
  private jurisdictions: Jurisdiction[];
  jurisdictionsCtrl = new FormControl();
  filteredJurisdictions: Observable<any[]>;
  selectedJurisdictionsSearch: JurisdictionSearch[];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  jurisdictionSearchItems: JurisdictionSearch[];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  @ViewChild('jurisdictionInput') jurisdictionInput: ElementRef;

  constructor(private AmCharts: AmChartsService, private httpService: HttpServiceService) {
    this.filteredJurisdictions = this.jurisdictionsCtrl.valueChanges.pipe(
      startWith(null),
      map((searchTerm: string) => {
        let filteredResultArray = [];
        if (!!searchTerm && searchTerm.length > 1) {
          filteredResultArray = this._filterJurisdictions(searchTerm);
        }
        return filteredResultArray;
      })
    );

    this.selectedJurisdictionsSearch = [];
    this.jurisdictionSearchItems = [];
    this.jurisdictions = this.httpService.getJurisdictions();
    this.getJurisdictionSearchItems(this.jurisdictions);
  }

  // initializes AmCharts.Map
  private initializeMap() {
    const mapOptions = {
      type: 'map',
      theme: 'dark',
      projection: 'miller',
      panEventsEnabled: true,
      backgroundColor: '#ffffff',
      backgroundAlpha: 0,
      autoDisplay: true,
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: 15,
      mouseWheelZoomEnabled: true,
      preventDragOut: true,
      zoomControl: {
        zoomControlEnabled: false,
        homeButtonEnabled: false
      },
      dataProvider: {
        map: 'worldHigh',
        getAreasFromMap: false,
        areas: this.getAreas()
      },
      areasSettings: {
        color: '#000000',
        selectable: true,
        selectedColor: '#9ACD32',
        outlineColor: '#ffffff',
        rollOverColor: '#A9A9A9',
        rollOverOutlineColor: '#ffffff',
        unlistedAreasColor: '#000000',
        unlistedAreasAlpha: 0.8,
        unlistedAreasOutlineColor: '#FFFFFF'
      },
      balloon: {
        adjustBorderColor: true,
        color: 'purple',
        fillAlpha: 1,
        fillColor: '#ffffff',
        borderColor: '##ffffff',
        borderAlpha: 0,
        borderThickness: 0,
        fontSize: 16,
        shadowAlpha: 0,
        horizontalPadding: 0,
        verticalPadding: 0,
        pointerWidth: 0,
      },
      balloonLabelFunction: (mapObject => {
        return mapObject.customData;
      }),
      listeners: [{
        event: 'clickMapObject',
        method: (e) => this.onMapAreaClick(e)
      }]
    };

    return this.AmCharts.makeChart('chartdiv', mapOptions);
  }

  // event fired when a map area is selected
  private onMapAreaClick(e: any) {
    // Ignore any click not on area
    if (e.mapObject.objectType !== 'MapArea') {
      return;
    }
    const area = e.mapObject;

    this.selectAreaInMap(area);
  }

  // hover over the map
  private hoverOverMapArea(jurisdictionId: string) {
    const area = this.chart.getObjectById(jurisdictionId);
    if (!!area) {
      area.color = area.baseSettings.rollOverColor;
      area.colorReal = area.color;

      // make the chart take in new color
      area.validate();
    }
  }

  // hover out of the map
  private hoverOutOfMapArea(jurisdictionId: string) {
    const area = this.chart.getObjectById(jurisdictionId);
    if (!!area) {
      area.color = area.baseSettings.color;
      area.colorReal = area.color;
      // make the chart take in new color
      area.validate();
    }
  }

  private hoverOverMapAreasByRegion(region: string) {
    const jurisdictionsInRegion: Jurisdiction[] = _.where(this.jurisdictions, { region: region });
    jurisdictionsInRegion.forEach(jurisdictionInRegion => {
      this.hoverOverMapArea(jurisdictionInRegion.id);
    });
  }

  private hoverOutMapAreasByRegion(region: string) {
    const jurisdictionsInRegion: Jurisdiction[] = _.where(this.jurisdictions, { region: region });
    jurisdictionsInRegion.forEach(jurisdictionInRegion => {
      this.hoverOutOfMapArea(jurisdictionInRegion.id);
    });
  }

  // highlights a map area in the AmCharts.Map as selected
  private selectAreaInMap(area: any, setTo: boolean = null) {
    // ensure area is reset to default
    area.color = area.baseSettings.color;
    area.colorReal = area.color;

    // Toggle showAsSelected
    if (!!setTo) {
      area.showAsSelected = setTo;
    } else {
      console.log('Set To is null ');
      area.showAsSelected = !area.showAsSelected;
    }

    // make the chart take in new color
    this.chart.returnInitialColor(area);

    // Update the list
    document.getElementById('selected').innerHTML = JSON.stringify(this.getSelectedJuristictions());
  }

  // highlights map areas in the AmChart.Map based on a region
  private selectMapAreasByRegion(region: string) {
    const jurisdictionsInRegion: Jurisdiction[] = _.where(this.jurisdictions, { region: region });
    jurisdictionsInRegion.forEach(jurisdictionInRegion => {
      const area = this.chart.getObjectById(jurisdictionInRegion.id);
      this.selectAreaInMap(area, true);
    });
  }

  // builds a collections of objects to search for i.e. jurisdictions and sub-jurisdictions
  private getJurisdictionSearchItems(jurisdictions: Jurisdiction[]) {
    jurisdictions.forEach(jurisdiction => {
      this.jurisdictionSearchItems.push(new JurisdictionSearch({
        id: jurisdiction.id,
        name: jurisdiction.country,
        type: JurisdictionSearchType.Jurisdiction
      }));
    });

    const uniqueRegions = _.uniq(jurisdictions, (jurisdiction: Jurisdiction) => jurisdiction.region);
    uniqueRegions.forEach(uniqueRegion => {
      this.jurisdictionSearchItems.push(new JurisdictionSearch({
        id: uniqueRegion.region,
        name: uniqueRegion.region,
        type: JurisdictionSearchType.SubJurisdiction
      }));
    });
  }

  private _filterJurisdictions(filterValue: any): any[] {
    return this.jurisdictionSearchItems
      .filter(jurisdictionSearch => jurisdictionSearch.name.toLowerCase()
        .indexOf(filterValue.toLowerCase()) === 0);
  }

  // formats our datasets to match the format of MapArea
  // https://docs.amcharts.com/3/javascriptmaps/MapArea
  private getAreas() {
    const areas = [];
    this.jurisdictions.forEach(juristiction => {
      areas.push({ id: juristiction.id, customData: juristiction.country, showAsSelected: false });
    });

    return areas;
  }

  // returns selected Juristictions from AmCharts.Map
  private getSelectedJuristictions() {
    const selected = [];
    for (let i = 0; i < this.chart.dataProvider.areas.length; i++) {
      if (this.chart.dataProvider.areas[i].showAsSelected) {
        selected.push(this.chart.dataProvider.areas[i].id);
      }
    }
    return selected;
  }

  // renders AmCharts.Map to the DOM
  ngAfterViewInit() {
    this.chart = this.initializeMap();
  }

  // destroys AmCharts.Map once the component is exited
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

  // fired when the user adds searched jurisdictions and sub-jurisdictions from search
  addSelectedJurisdictionsSearch() {
    const selectedJurisdictions_local: JurisdictionSearch[] = Object.assign([], this.selectedJurisdictionsSearch);
    selectedJurisdictions_local.forEach(selectedJurisdiction => {
      if (selectedJurisdiction.type === JurisdictionSearchType.SubJurisdiction) {
        this.selectMapAreasByRegion(selectedJurisdiction.id);
      } else {
        const area = this.chart.getObjectById(selectedJurisdiction.id);
        this.selectAreaInMap(area, true);
      }
    });

    this.selectedJurisdictionsSearch = [];
  }

  // fired when a jurisdictions and sub-jurisdictions is selected from search
  jurisdictionOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedJurisdictionsSearch.push(event.option.value);
    this.jurisdictionInput.nativeElement.value = '';
    this.jurisdictionsCtrl.setValue(null);

    if (event.option.value.type === JurisdictionSearchType.SubJurisdiction) {
      this.hoverOverMapAreasByRegion(event.option.value.id);
    } else {
      this.hoverOverMapArea(event.option.value.id);
    }
  }

  // removes selected chips from the UI
  removeChip(selectedJurisdiction: JurisdictionSearch): void {
    const index = this.selectedJurisdictionsSearch.indexOf(selectedJurisdiction);
    if (index >= 0) {
      // roll out of current hovered region
      if (selectedJurisdiction.type === JurisdictionSearchType.SubJurisdiction) {
        this.hoverOutMapAreasByRegion(selectedJurisdiction.id);
      } else {
        this.hoverOutOfMapArea(selectedJurisdiction.id);
      }

      this.selectedJurisdictionsSearch.splice(index, 1);
    }
  }
}
