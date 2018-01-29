import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterAnimationComponent } from './outer-animation.component';

describe('OuterAnimationComponent', () => {
  let component: OuterAnimationComponent;
  let fixture: ComponentFixture<OuterAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
