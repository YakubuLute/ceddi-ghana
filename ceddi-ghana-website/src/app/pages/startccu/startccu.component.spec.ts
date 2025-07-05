import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartccuComponent } from './startccu.component';

describe('StartccuComponent', () => {
  let component: StartccuComponent;
  let fixture: ComponentFixture<StartccuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartccuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartccuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
