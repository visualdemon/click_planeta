import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecertificadoComponent } from './imagecertificado.component';

describe('ImagecertificadoComponent', () => {
  let component: ImagecertificadoComponent;
  let fixture: ComponentFixture<ImagecertificadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagecertificadoComponent]
    });
    fixture = TestBed.createComponent(ImagecertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
