import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: ``
})
export class ConfirmDialogComponent {
  constructor(
    readonly  dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly  data: Hero
  ){}

  onNoClick():void {
    this.dialogRef.close(false);
  }
  onConfirm():void {
    this.dialogRef.close(true);
  }
}
