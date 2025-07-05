import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactCounterComponent } from './impact-counter.component';

describe('ImpactCounterComponent', () => {
  let component: ImpactCounterComponent;
  let fixture: ComponentFixture<ImpactCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
