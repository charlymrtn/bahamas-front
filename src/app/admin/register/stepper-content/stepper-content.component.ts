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

export interface Valores1 {
  value: number;
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

  levels: Valores[] = [
    {
      value: 'A',
      viewValue: '10+'
    },
    {
      value: 'B',
      viewValue: '2 to 9'
    },
    {
      value: 'C',
      viewValue: '0 to 2'
    }
  ];

  niveles: Valores1[] = [
    {
      value: 1,
      viewValue: 'Low'
    },
    {
      value: 2,
      viewValue: 'Medium'
    },
    {
      value: 3,
      viewValue: 'High'
    }
  ];

  banks: Valores1[] = [
    {
      value: 1,
      viewValue: 'Bank of Iran'
    },
    {
      value: 2,
      viewValue: 'Bank of Albania'
    }
  ];

  sources: Valores[] = [
    {
      value: 'A',
      viewValue: 'Bahamian Bank'
    },
    {
      value: 'B',
      viewValue: 'Foreign Bank'
    }
  ];

  funds: Valores[] = [
    {
      value: 'A',
      viewValue: 'Cash'
    },
    {
      value: 'B',
      viewValue: 'Securities'
    },
    {
      value: 'C',
      viewValue: 'Precious Metal'
    },
    {
      value: 'D',
      viewValue: 'Other'
    }
  ];

  yesNo: Valores[] = [
    {
      value: 'Y',
      viewValue: 'Yes'
    },
    {
      value: 'N',
      viewValue: 'No'
    }
  ];

  activities: Valores[] = [
    {
      value: 'A',
      viewValue: 'Management or Administration Position in a Company of a Foreign State'
    },
    {
      value: 'B',
      viewValue: 'Employee'
    },
    {
      value: 'C',
      viewValue: 'Sefl Employed'
    }
  ];

  years: Valores[] = [
    {
      value: 'A',
      viewValue: 'Less than 1 year'
    },
    {
      value: 'B',
      viewValue: '1 to 3 years'
    },
    {
      value: 'C',
      viewValue: '4 to 7 years'
    },
    {
      value: 'D',
      viewValue: '8 to 10 years'
    },
    {
      value: 'E',
      viewValue: 'More than 10 years'
    }
  ];

  revenues: Valores[] = [
    {
      value: 'A',
      viewValue: 'Less than $100K / year'
    },
    {
      value: 'B',
      viewValue: '$100K - $500K / year'
    },
    {
      value: 'C',
      viewValue: '$500K - $1M / year'
    },
    {
      value: 'D',
      viewValue: '$1M - $5M / year'
    },
    {
      value: 'E',
      viewValue: 'More than $5M / year'
    }
  ];

  situations: Valores[] = [
    {
      value: 'A',
      viewValue: 'Bachelor'
    },
    {
      value: 'B',
      viewValue: 'Married'
    },
    {
      value: 'C',
      viewValue: 'Divorced'
    },
    {
      value: 'D',
      viewValue: 'Widow(er)'
    }
  ];

  industries: Valores1[] = [
    {
      value: 1,
      viewValue: 'Agriculture, forestry and fishing'
    },
    {
      value: 2,
      viewValue: 'Optomology (Optometrist, glasses, lens/contacts)'
    },
    {
      value: 3,
      viewValue: 'Sales clerk, small business owner/trader'
    },
    {
      value: 4,
      viewValue: 'Soccer player'
    },
    {
      value: 5,
      viewValue: 'Transporting and storage'
    },
    {
      value: 6,
      viewValue: 'Wood, Sawmill'
    },
    {
      value: 7,
      viewValue: 'Writer/journalist/scriptwriter'
    }
  ];

  isLinear = false;
  clientInfoFormGroup: FormGroup;
  accountMandatesFormGroup: FormGroup;
  poaFormGroup: FormGroup;
  beneficialFormGroup: FormGroup;
  expectedTransactionsFormGroup: FormGroup;
  sourceFundsFormGroup: FormGroup;
  clientSituationFormGroup: FormGroup;


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
      initialDeposits: ['', Validators.required],
      amountExpected: ['', Validators.required],
      expectedArrival: ['', Validators.required],
      expectedInflows: ['', Validators.required],
      expectedOutflows: ['', Validators.required],
      rangeInflows: ['', Validators.required],
      rangeOutflows: ['', Validators.required],
      financialMarkets: ['', Validators.required],
      creditCard: ['', Validators.required],
    });

    this.sourceFundsFormGroup = this._formBuilder.group({
      sourceFunds: ['', Validators.required],
      nameBank: ['', Validators.required],
      fundType: ['', Validators.required],
      originFunds: ['', Validators.required],
    });

    this.clientSituationFormGroup = this._formBuilder.group({
      hasPoliticalActivity: ['', Validators.required],
      professionalActivity: ['', Validators.required],
      industrySector: ['', Validators.required],
      numberChildren: ['', Validators.required],
      numberVisits: ['', Validators.required],
      familySituation: ['', Validators.required],
      revenuePerYear: ['', Validators.required],
      yearsActivity: ['', Validators.required],
    });
  }

}
