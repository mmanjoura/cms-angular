import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDropdownsComponent } from './header-dropdowns.component';

describe('HeaderDropdowsComponent', () => {
  let component: HeaderDropdownsComponent;
  let fixture: ComponentFixture<HeaderDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
