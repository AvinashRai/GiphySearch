import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GiphysearchComponent } from './giphysearch.component';

describe('GiphysearchComponent', () => {
  let component: GiphysearchComponent;
  let fixture: ComponentFixture<GiphysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphysearchComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should render title`, async(() => {
      expect(component.title).toEqual('Search');
    }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
