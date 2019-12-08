import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
}));

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });
  it('should have searchimg function', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service.searchimg).toBeTruthy();
   });
   
   it('should have storekewords function', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service.storekewords).toBeTruthy();
   });
});
