import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Output() inputValue = new EventEmitter();

  tempValue: string;

  constructor() { }

  ngOnInit() {
  }

  modelChanged(newVal) {
    this.inputValue.emit(newVal);
  }

}
