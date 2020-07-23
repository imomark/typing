import { Component } from '@angular/core';
import {lorem} from 'faker';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  inputText = '';
  isVisible = false;

  getInputText(value){
    this.inputText = value;
    console.log(this.inputText);

    if(this.inputText === this.randomText){
      this.isVisible = true;
    }
    else
    this.isVisible =false;

  }
  compare(randomLetter: string, generatedLetter: string){

    if(!generatedLetter)
      return "pending";
    if(randomLetter === generatedLetter)
      return "correct";
    else  return "incorrect";

  }
}
