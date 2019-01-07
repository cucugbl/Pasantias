import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaObjectivesComponent } from './ruta-objectives.component';

describe('RutaObjectivesComponent', () => {
  let component: RutaObjectivesComponent;
  let fixture: ComponentFixture<RutaObjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
