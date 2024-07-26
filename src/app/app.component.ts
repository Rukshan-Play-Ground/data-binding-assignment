import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponentComponent} from "./first-component/first-component.component";
import {SecondComponentComponent} from "./second-component/second-component.component";
import {ThirdComponentComponent} from "./third-component/third-component.component";
import {FourthComponentComponent} from "./fourth-component/fourth-component.component";
import {NgStyle, PercentPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent, FourthComponentComponent, PercentPipe, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sharedValue: number = 0;
  sharedRadius: number = 0;

  onValueChange(newValue: number) {
    this.sharedValue = newValue;
    this.sharedRadius = newValue; // Update border radius
  }
}
