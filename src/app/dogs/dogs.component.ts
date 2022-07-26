import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dogs';
import { DogService } from '../dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dog: Dog = new Dog();
  dogs: Dog[] = [];

  inputError?: string;

  constructor(private saveTheDogsService: DogService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.saveTheDogsService.getDogs()
      .subscribe(dogsToSave => this.dogs = dogsToSave);
  }

  findBreed(breed: string): void {
    if (breed.trim().length == 0) {
      this.inputError = "Please enter a breed.";
    } else {
      this.inputError = undefined;
      this.saveTheDogsService.getDogsByBreed(breed) 
      .subscribe(dogsToSave => this.dogs = dogsToSave);
    }
  }

}
