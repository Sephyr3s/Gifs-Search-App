/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Gifs.serviceService } from './gifs.service';

describe('Service: Gifs.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gifs.serviceService]
    });
  });

  it('should ...', inject([Gifs.serviceService], (service: Gifs.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
