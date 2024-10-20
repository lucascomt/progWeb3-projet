import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSuisJeComponent } from './qui-suis-je.component';

describe('QuiSuisJeComponent', () => {
  let component: QuiSuisJeComponent;
  let fixture: ComponentFixture<QuiSuisJeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuiSuisJeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiSuisJeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
