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
      viewValue: 'Dolar'
    },
    {
      value: 'EU',
      viewValue: 'Euro'
    }
  ];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      document: ['', Validators.required],
      birthdate: ['', Validators.required],
      nationality: ['', Validators.required],
      fullname: ['', Validators.required],
      place: ['', Validators.required],
      currency: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
