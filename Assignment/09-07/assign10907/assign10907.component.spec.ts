import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign10907Component } from './assign10907.component';

describe('Assign10907Component', () => {
  let component: Assign10907Component;
  let fixture: ComponentFixture<Assign10907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign10907Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign10907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
