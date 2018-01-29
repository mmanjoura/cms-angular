import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInfoComponent } from './preview-info.component';

describe('PreviewInfoComponent', () => {
  let component: PreviewInfoComponent;
  let fixture: ComponentFixture<PreviewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
