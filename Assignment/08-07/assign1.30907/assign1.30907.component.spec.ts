import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign1.30907Component } from './assign1.30907.component';

describe('Assign1.30907Component', () => {
  let component: Assign1.30907Component;
  let fixture: ComponentFixture<Assign1.30907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign1.30907Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign1.30907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
