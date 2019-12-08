import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphysearchComponent } from './giphysearch.component';

describe('GiphysearchComponent', () => {
  let component: GiphysearchComponent;
  let fixture: ComponentFixture<GiphysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
