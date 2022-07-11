import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign20707Component } from './assign20707.component';

describe('Assign20707Component', () => {
  let component: Assign20707Component;
  let fixture: ComponentFixture<Assign20707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign20707Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign20707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
