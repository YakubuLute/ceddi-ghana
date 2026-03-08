import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricoHubComponent } from './agrico-hub.component';

describe('AgricoHubComponent', () => {
  let component: AgricoHubComponent;
  let fixture: ComponentFixture<AgricoHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricoHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgricoHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
