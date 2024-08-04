import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./componets/child/child.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private number:number =232352652;
  secondValue:number = 1111;
  numbers:number[] =[];

  isVisible:boolean = true;

  setVisibility(){
    this.isVisible =!this.isVisible;
  }

  get counter(){
    return this.number
  }
  set counter(value:number)
  {
    this.number=value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

  add(){
    //this.numbers.push(1);
    this.numbers=[...this.numbers, 1];
  }
}
