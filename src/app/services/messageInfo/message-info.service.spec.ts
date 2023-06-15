import { TestBed } from '@angular/core/testing';

import { MessageInfoService } from './message-info.service';

describe('MessageInfoService', () => {
  let service: MessageInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
