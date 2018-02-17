import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnLinksComponent } from './column-links.component';

describe('ColumnLinksComponent', () => {
  let component: ColumnLinksComponent;
  let fixture: ComponentFixture<ColumnLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
