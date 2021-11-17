import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() child = 'Durgesh asghdj';
  @Output() newChildEvent = new EventEmitter<string>();

  addNewChild(value: string) {
    this.newChildEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
