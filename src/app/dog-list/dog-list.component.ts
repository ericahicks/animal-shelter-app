import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../models/dogs';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  @Input() dogs?: Dog[];

  constructor() { }

  ngOnInit(): void {
  }

}
