import { Component, Input, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})

export class CurrencyComponent {

  leftvalue = "1"
  rightvalue = "1"
  @Input() usedCurrencies: ICurrency[] = []
  leftrate = 1
  rightrate = 1



  constructor() { }

  handleInput(e: any) {
    switch (e.target.name) {
      case "leftselect":
        this.leftrate = Number(e.target.value);
        this.rightvalue = (Number(this.leftvalue) * this.leftrate / this.rightrate).toFixed(2);
        break
      case "leftinput":
        this.leftvalue = e.target.value
        this.rightvalue = (Number(this.leftvalue) * this.leftrate / this.rightrate).toFixed(2);
          break
      case "rightselect":
        this.rightrate = Number(e.target.value)
        this.leftvalue = (Number(this.rightvalue) * this.rightrate/this.leftrate).toFixed(2)
            break
      case "rightinput":
        this.rightvalue = e.target.value
        this.leftvalue = (Number(this.rightvalue) * this.rightrate / this.leftrate).toFixed(2);
              break
    }
  }
}
