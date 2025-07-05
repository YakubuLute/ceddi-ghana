import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactStoriesComponent } from './impact-stories.component';

describe('ImpactStoriesComponent', () => {
  let component: ImpactStoriesComponent;
  let fixture: ComponentFixture<ImpactStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
