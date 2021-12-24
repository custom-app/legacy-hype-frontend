import { TestBed } from '@angular/core/testing';

import { Web3InitializeService } from './web3-initialize.service';

describe('Web3InitializeService', () => {
  let service: Web3InitializeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3InitializeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
