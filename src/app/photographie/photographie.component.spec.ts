import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographieComponent } from './photographie.component';

describe('PhotographieComponent', () => {
  let component: PhotographieComponent;
  let fixture: ComponentFixture<PhotographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
