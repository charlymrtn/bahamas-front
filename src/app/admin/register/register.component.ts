import { Component, OnInit } from '@angular/core';

export interface Country {
  value: string;
  viewValue: string;
}

export interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'pib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countries: Country[] = [
    {
      value: 'MXN',
      viewValue: 'Mexico'
    },
    {
      value: 'US',
      viewValue: 'United States'
    },
    {
      value: 'RU',
      viewValue: 'Russia'
    },
    {
      value: 'PE',
      viewValue: 'Peru'
    }
  ];

  currencies: Currency[] = [
    {
      value: 'USD',
      viewValue: 'Dolar'
    },
    {
      value: 'EU',
      viewValue: 'Euro'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
