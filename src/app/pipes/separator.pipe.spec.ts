import { SeparatorPipe } from './separator.pipe';
import { expect } from '@jest/globals';

describe('Separator Pipe', () => {
  const separatorPipe = new SeparatorPipe();

  it('Should create separatore pipe', () => {
    expect(separatorPipe).toBeTruthy();
  });
  it('Should transform string with separator', () => {
    const resultPipe = separatorPipe.transform('France,Tunisie');
    expect(resultPipe).toEqual('France |Tunisie');
  });
});
