import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthEmploymentComponent } from './youth-employment.component';

describe('YouthEmploymentComponent', () => {
  let component: YouthEmploymentComponent;
  let fixture: ComponentFixture<YouthEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouthEmploymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouthEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
