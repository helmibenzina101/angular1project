import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  encapsulation: ViewEncapsulation.None  // Add this line if styles are not applying
})
export class TemplateComponent {

}
