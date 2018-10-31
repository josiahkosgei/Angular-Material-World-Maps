import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule,
  MatChipsModule, MatIconModule, MatAutocompleteModule} from '@angular/material';

import { AmChartsModule } from '@amcharts/amcharts3-angular';

import { AppComponent } from './app.component';
import { VectorMapComponent } from './vector-map/vector-map.component';
import { HttpServiceService } from './services/http-service.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    AmChartsModule
    ],
  declarations: [ AppComponent, VectorMapComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HttpServiceService]
})
export class AppModule { }
