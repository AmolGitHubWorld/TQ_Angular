import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign1.20907Component } from './assign1.20907.component';

describe('Assign1.20907Component', () => {
  let component: Assign1.20907Component;
  let fixture: ComponentFixture<Assign1.20907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign1.20907Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign1.20907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
