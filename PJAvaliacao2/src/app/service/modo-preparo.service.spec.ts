import { TestBed } from '@angular/core/testing';

import { ModoPreparoService } from './modo-preparo.service';

describe('ModoPreparoService', () => {
  let service: ModoPreparoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoPreparoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
