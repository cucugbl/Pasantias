import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaContextComponent } from './ruta-context.component';

describe('RutaContextComponent', () => {
  let component: RutaContextComponent;
  let fixture: ComponentFixture<RutaContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
