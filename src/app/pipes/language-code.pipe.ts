import { Pipe, PipeTransform } from '@angular/core';
import ISO6391 from 'iso-639-1';
/*
 * Return the language code by the language name.
 * Using the package ISO6391 to get the language code (licence MIT)
 */
@Pipe({ name: 'languageCodePipe' })
export class LanguageCodePipe implements PipeTransform {
  transform(value: string): string {
    let languagesList = value.split(',');
    const codesList = languagesList.map((language) =>
      ISO6391.getCode(language.trim())
    );
    return codesList.join(' | ');
  }
}
