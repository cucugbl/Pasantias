import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuraContextComponent } from './rura-context.component';

describe('RuraContextComponent', () => {
  let component: RuraContextComponent;
  let fixture: ComponentFixture<RuraContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuraContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuraContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
