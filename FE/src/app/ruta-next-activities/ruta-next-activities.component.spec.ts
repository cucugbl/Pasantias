import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNextActivitiesComponent } from './ruta-next-activities.component';

describe('RutaNextActivitiesComponent', () => {
  let component: RutaNextActivitiesComponent;
  let fixture: ComponentFixture<RutaNextActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaNextActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNextActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
