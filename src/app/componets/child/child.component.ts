import { NgFor, NgIf } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'] // Corrected property name
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() myCounter!: number; 
  @Input() secondValue!: number; 
  @Input() numbers!: number[];

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change: SimpleChange = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);
      this.changeLog.push(
        `ngOnChanges ${propName}: currentValue = ${current}, previousValue = ${previous}, firstChange = ${change.firstChange}`
      );
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.changeLog.push('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    this.changeLog.push(`ngDoCheck: ${this.numbers.toString()}`); // Corrected template literal syntax
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    this.changeLog.push('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    this.changeLog.push('ngAfterContentChecked'); 
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.changeLog.push('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    this.changeLog.push('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.changeLog.push('ngOnDestroy');
  }

    
    
}

