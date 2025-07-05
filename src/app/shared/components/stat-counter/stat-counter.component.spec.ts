import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCounterComponent } from './stat-counter.component';

describe('StatCounterComponent', () => {
  let component: StatCounterComponent;
  let fixture: ComponentFixture<StatCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
