import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vvdiv',
  templateUrl: './vvdiv.component.html',
  styleUrls: ['./vvdiv.component.scss']
})
export class VvdivComponent implements OnInit {

  @Input() klass: string;

  constructor() { }

  ngOnInit() {
  }

}
