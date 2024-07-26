import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-fourth-component',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './fourth-component.component.html',
  styleUrl: './fourth-component.component.css'
})
export class FourthComponentComponent {
  @Input() radius: number = 0;
}
