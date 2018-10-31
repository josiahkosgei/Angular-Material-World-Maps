import { Injectable } from '@angular/core';
import { Jurisdiction } from '../models/jurisdiction';

@Injectable()
export class HttpServiceService {

  constructor() { }

  public getJurisdictions() {
    const jurisdictions = [
        new Jurisdiction({
          country: 'Albania',
          id: 'AL',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Argentina',
          id: 'AR',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Australia',
          id: 'AU',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Austria',
          id: 'AT',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Brunei Darussalam',
          id: 'BN',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Cambodia',
          id: 'KH',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'China',
          id: 'CN',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Cook Islands',
          id: 'CK',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'French Polynesia',
          id: 'PF',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'French Southern Territories',
          id: 'TF',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Hong Kong',
          id: 'HK',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'India',
          id: 'IN',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Indonesia',
          id: 'ID',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Japan',
          id: 'JP',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Macao',
          id: 'MO',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Malaysia',
          id: 'MY',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Maldives',
          id: 'MV',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Marshall Islands',
          id: 'MH',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Mongolia',
          id: 'MN',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Nauru',
          id: 'NR',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Nepal',
          id: 'NP',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'New Zealand',
          id: 'NZ',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Niue',
          id: 'NU',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Pakistan',
          id: 'PK',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Palau',
          id: 'PW',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Philippines',
          id: 'PH',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Samoa',
          id: 'WS',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Singapore',
          id: 'SG',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Taiwan',
          id: 'TW',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Thailand',
          id: 'TH',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Uzbekistan',
          id: 'UZ',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Vanuatu',
          id: 'VU',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Viet Nam',
          id: 'VN',
          region: 'APAC'
        }),
        new Jurisdiction({
          country: 'Andorra',
          id: 'AD',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Bahrain',
          id: 'BH',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Belarus',
          id: 'BY',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Belgium',
          id: 'BE',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Bosnia and Herzegovina',
          id: 'BA',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Botswana',
          id: 'BW',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Bulgaria',
          id: 'BG',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Cabo Verde',
          id: 'CV',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Croatia',
          id: 'HR',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Cyprus',
          id: 'CY',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Czech Republic',
          id: 'CZ',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Denmark',
          id: 'DK',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Egypt',
          id: 'EG',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Estonia',
          id: 'EE',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Finland',
          id: 'FI',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'France',
          id: 'FR',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Germany',
          id: 'DE',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Ghana',
          id: 'GH',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Gibraltar',
          id: 'GI',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Greece',
          id: 'GR',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Guernsey',
          id: 'GG',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Hungary',
          id: 'HU',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Iceland',
          id: 'IS',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Iran',
          id: 'IR',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Ireland',
          id: 'IE',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Isle of Man',
          id: 'IM',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Israel',
          id: 'IL',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Italy',
          id: 'IT',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Jersey',
          id: 'JE',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Jordan',
          id: 'JO',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Kazakhstan',
          id: 'KZ',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Korea (Republic of)',
          id: 'KR',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Latvia',
          id: 'LV',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Lebanon',
          id: 'LB',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Liberia',
          id: 'LR',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Liechtenstein',
          id: 'LI',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Lithuania',
          id: 'LT',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Luxembourg',
          id: 'LU',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Macedonia',
          id: 'MK',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Malta',
          id: 'MT',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Mauritius',
          id: 'MU',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Monaco',
          id: 'MC',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Namibia',
          id: 'NA',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Netherlands',
          id: 'NL',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Nigeria',
          id: 'NG',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Norway',
          id: 'NO',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Oman',
          id: 'OM',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Poland',
          id: 'PL',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Portugal',
          id: 'PT',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Qatar',
          id: 'QA',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Romania',
          id: 'RO',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Russia',
          id: 'RU',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'San Marino',
          id: 'SM',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Saudi Arabia',
          id: 'SA',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Serbia',
          id: 'RS',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Seychelles',
          id: 'SC',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Slovakia',
          id: 'SK',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Slovenia',
          id: 'SI',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'South Africa',
          id: 'ZA',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Spain',
          id: 'ES',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Sweden',
          id: 'SE',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Switzerland',
          id: 'CH',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Turkey',
          id: 'TR',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Ukraine',
          id: 'UA',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'United Arab Emirates',
          id: 'AE',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'United Kingdom',
          id: 'GB',
          region: 'EMEA'
        }),
        new Jurisdiction({
          country: 'Anguilla',
          id: 'AI',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Antigua and Barbuda',
          id: 'AG',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Aruba',
          id: 'AW',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Bahamas',
          id: 'BS',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Barbados',
          id: 'BB',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Belize',
          id: 'BZ',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Bermuda',
          id: 'BM',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Brazil',
          id: 'BR',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Canada',
          id: 'CA',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Cayman Islands',
          id: 'KY',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Chile',
          id: 'CL',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Colombia',
          id: 'CO',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Costa Rica',
          id: 'CR',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Curaçao',
          id: 'CW',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Dominica',
          id: 'DM',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Dominican Republic',
          id: 'DO',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Ecuador',
          id: 'EC',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Grenada',
          id: 'GD',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Guatemala',
          id: 'GT',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Haiti',
          id: 'HT',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Jamaica',
          id: 'JM',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Mexico',
          id: 'MX',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Montserrat',
          id: 'MS',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Nicaragua',
          id: 'NI',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Panama',
          id: 'PA',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Peru',
          id: 'PE',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Saint Kitts And Nevis',
          id: 'KN',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Saint Lucia',
          id: 'LC',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Saint Vincent and The Grenadines',
          id: 'VC',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Sint Maarten (Dutch part)',
          id: 'SX',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Trinidad and Tobago',
          id: 'TT',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Turks and Caicos Islands',
          id: 'TC',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'United States',
          id: 'US',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Uruguay',
          id: 'UY',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Virgin Islands (British)',
          id: 'VG',
          region: 'AMER'
        }),
        new Jurisdiction({
          country: 'Virgin Islands (U.S.)',
          id: 'VI',
          region: 'AMER'
        })
    ];
     return jurisdictions;
  }

}