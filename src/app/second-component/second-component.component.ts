import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  @Input()
  value: number = 0;
}
