import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtAGlanceComponent } from './at-a-glance.component';

describe('AtAGlanceComponent', () => {
  let component: AtAGlanceComponent;
  let fixture: ComponentFixture<AtAGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtAGlanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtAGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
