import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AporteComponent } from './aporte.component';

describe('AporteComponent', () => {
  let component: AporteComponent;
  let fixture: ComponentFixture<AporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AporteComponent]
    });
    fixture = TestBed.createComponent(AporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
