import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutionComponent } from './revolution.component';

describe('RevolutionComponent', () => {
  let component: RevolutionComponent;
  let fixture: ComponentFixture<RevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
