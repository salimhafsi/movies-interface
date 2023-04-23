import { CountyCodePipe } from './country-code.pipe';
import { expect } from '@jest/globals';

describe('Country code pipe', () => {
  const countryCodePipe = new CountyCodePipe();

  it('Should create country code pipe', () => {
    expect(countryCodePipe).toBeTruthy();
  });
  it('Should transform country name to  country code ', () => {
    const resultPipe = countryCodePipe.transform('France');
    expect(resultPipe).toEqual('FR');
  });
});
