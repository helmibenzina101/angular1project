import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})

export class ConfirmDialogComponent {
  constructor (public dialogref : MatDialogRef <ConfirmDialogComponent>) {

  }
}


export class AppModule {}

