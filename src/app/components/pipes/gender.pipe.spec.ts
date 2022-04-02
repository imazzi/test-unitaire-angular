import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  let pipe: GenderPipe;

  beforeEach(() => {
    pipe = new GenderPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return ♂ when gender is male', () => {
    expect(pipe.transform('Male')).toEqual('♂');
  });

  it('should return ♀ when gender is female', () => {
    expect(pipe.transform('Female')).toEqual('♀');
  });

  it('should return nothing when gender not specified', () => {
    expect(pipe.transform('')).toEqual('');
  });
  
});
