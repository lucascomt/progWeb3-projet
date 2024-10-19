import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurJeuxComponent } from './serveur-jeux.component';

describe('ServeurJeuxComponent', () => {
  let component: ServeurJeuxComponent;
  let fixture: ComponentFixture<ServeurJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServeurJeuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeurJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
