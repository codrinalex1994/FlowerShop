import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ReactiveInputComponent,
    multi: true
  }]
})
export class ReactiveInputComponent implements OnInit, ControlValueAccessor {
  
  writeValue(obj: any): void {
    this.tempValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  @Input() name: string;
  @Input() id: string;

  tempValue: string;

  onChanged: any;
  onTouched: any;

  constructor() { }

  ngOnInit() {
  }

  modelChanged(newVal) {
    this.onChanged(newVal);
  }
}
