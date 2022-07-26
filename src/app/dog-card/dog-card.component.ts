import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../models/dogs';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {

  @Input() dog?: Dog;

  constructor() {
   }

  ngOnInit(): void {
  }

}
