import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSmallComponent } from './menu-small.component';

describe('MenuSmallComponent', () => {
  let component: MenuSmallComponent;
  let fixture: ComponentFixture<MenuSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
