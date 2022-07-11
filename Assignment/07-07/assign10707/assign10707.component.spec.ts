import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign10707Component } from './assign10707.component';

describe('Assign10707Component', () => {
  let component: Assign10707Component;
  let fixture: ComponentFixture<Assign10707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign10707Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign10707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
