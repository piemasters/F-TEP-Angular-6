import { ReversePipe } from './reverse.pipe';

describe('Pipe: Reverse', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse an array', () => {
    expect( pipe.transform([1, 2, 3])).toEqual([3, 2, 1]);
  });


});
