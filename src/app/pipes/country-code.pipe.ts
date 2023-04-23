import { Pipe, PipeTransform } from '@angular/core';
import * as countryCode from 'country-code-lookup';
/*
 * Return the country code by the country name.
 * Using the package country code lookup to get the country code (licence MIT)
 */
@Pipe({ name: 'countyCodePipe' })
export class CountyCodePipe implements PipeTransform {
  transform(value: string): string {
    // library is not support the name USA.
    value === 'USA' ? (value = 'United States') : value;
    const code = countryCode.byCountry(value.trim());
    return code ? code.iso2 : '';
  }
}
