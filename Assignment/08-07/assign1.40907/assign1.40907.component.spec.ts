import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign1.40907Component } from './assign1.40907.component';

describe('Assign1.40907Component', () => {
  let component: Assign1.40907Component;
  let fixture: ComponentFixture<Assign1.40907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign1.40907Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign1.40907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
