import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = ['Ford', 'BMW', 'Tesla'];
  items = [
    {id: 56, name: 'wer'},
    {id: 57, name: 'gwerer'},
    {id: 58, name: 'rtwer'}
  ];
  canAddCar = false;
  addCarStatus = false;
  carAdded = '';
  inputText = 'Default text';
  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }
  addCar() {
    this.carAdded = 'added';
    this.addCarStatus = true;
  }
  onKeyUp(event) {
    this.inputText = event.target.value;
  }
  setText(car: string){
    return car.length > 4;
  }
}
