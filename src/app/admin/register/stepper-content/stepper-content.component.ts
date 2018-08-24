import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Country {
  value: string;
  viewValue: string;
}

export interface Currency {
  value: string;
  viewValue: string;
}

export interface Valores {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'pib-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.scss']
})
export class StepperContentComponent implements OnInit {

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
      viewValue: 'US Dolar'
    },
    {
      value: 'EUR',
      viewValue: 'Euro'
    },
    {
      value: 'MXN',
      viewValue: 'Pesos Mexicanos'
    },
    {
      value: 'GBP',
      viewValue: 'British Pound'
    },
    {
      value: 'CHF',
      viewValue: 'Swiss Franc'
    }
  ];

  purpuses: Valores[] = [
    {
      value: 'A',
      viewValue: 'Fund Account'
    },
    {
      value: 'B',
      viewValue: 'Asset Management'
    },
    {
      value: 'C',
      viewValue: 'Brokerage'
    },
    {
      value: 'D',
      viewValue: 'Capital Appreciation'
    },
    {
      value: 'E',
      viewValue: 'Cash Management'
    },
    {
      value: 'F',
      viewValue: 'Custody Account'
    }
  ];

  isLinear = false;
  clientInfoFormGroup: FormGroup;
  accountMandatesFormGroup: FormGroup;
  poaFormGroup: FormGroup;
  beneficialFormGroup: FormGroup;
  expectedTransactionsFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.clientInfoFormGroup = this._formBuilder.group({
      document: ['', Validators.required],
      birthdate: ['', Validators.required],
      nationality: ['', Validators.required],
      fullname: ['', Validators.required],
      place: ['', Validators.required],
      currency: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      addTelephone: ['', Validators.required],
      tin: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.accountMandatesFormGroup = this._formBuilder.group({
      mandatePIBL: ['', Validators.required],
      mandate3Party: ['', Validators.required],
    });

    this.poaFormGroup = this._formBuilder.group({
      grantPOA: ['', Validators.required],
    });

    this.beneficialFormGroup = this._formBuilder.group({
      beneficials: ['', Validators.required],
    });

    this.expectedTransactionsFormGroup = this._formBuilder.group({
      purposeAccount: ['', Validators.required],
    });
  }

}
