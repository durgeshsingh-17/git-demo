import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  currentChild = 'Durgesh singh';
  childs = ['milk', 'tea', 'coffee', 'juice'];

  addChild(newChild: string) {
    this.childs.push(newChild)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
