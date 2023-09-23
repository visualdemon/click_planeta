import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaledithComponent } from './modaledith.component';

describe('ModaledithComponent', () => {
  let component: ModaledithComponent;
  let fixture: ComponentFixture<ModaledithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModaledithComponent]
    });
    fixture = TestBed.createComponent(ModaledithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
