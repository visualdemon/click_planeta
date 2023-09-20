import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-modal-edith',
  templateUrl: './modal-edith.component.html',
  styleUrls: ['./modal-edith.component.css'],
  standalone: true,
  imports: [MatDialogModule, NgIf],
})
export class ModalEdithComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
