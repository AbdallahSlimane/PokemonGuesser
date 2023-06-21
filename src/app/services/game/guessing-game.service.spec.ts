import { TestBed } from '@angular/core/testing';

import { GuessingGameServiceService } from './guessing-game.service';

describe('GuessingGameServiceService', () => {
  let service: GuessingGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuessingGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
