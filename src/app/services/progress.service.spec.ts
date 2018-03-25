import { TestBed, inject } from '@angular/core/testing';

import { ProgressService } from './progress.service';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

describe('ProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpModule ],
      providers: [ProgressService]
    });
  });

  it('should be created', inject([ProgressService], (service: ProgressService) => {
    expect(service).toBeTruthy();
  }));
});
