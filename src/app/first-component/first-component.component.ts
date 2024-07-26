import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  value: number = 0;
  @Output()
  valueChange = new EventEmitter<number>();

  onInputChange() {
    this.valueChange.emit(this.value);
  }
}
