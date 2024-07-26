import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
  @Input()
  value: number = 0;
}
