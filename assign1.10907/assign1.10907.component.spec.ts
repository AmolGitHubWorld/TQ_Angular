import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign1.10907Component } from './assign1.10907.component';

describe('Assign1.10907Component', () => {
  let component: Assign1.10907Component;
  let fixture: ComponentFixture<Assign1.10907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign1.10907Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign1.10907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
