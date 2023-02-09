import { Component, OnInit } from '@angular/core';
import { ICurrency, IExchangeNbu } from 'src/app/models/currency';
import currencySigns from '../../helpers/currencySights.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  usedCurrencies: ICurrency[] = [{
    unit:"UAH",
    sign: currencySigns['UAH'].c_sign,
    rate: 1,
    exchangedate: new Date().toDateString()
  }];

  constructor() { };

  async ngOnInit(): Promise<void> {

    const res: Response = await fetch(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );

    const data: IExchangeNbu[] = await res.json();

    data.forEach((el) => {
      if (el.cc === 'USD' || el.cc === 'EUR') {
        this.usedCurrencies.push({
          unit: el.cc,
          sign: currencySigns[el.cc].c_sign,
          rate: el.rate,
          exchangedate: el.exchangedate
        });
      };
    });
  };
};
