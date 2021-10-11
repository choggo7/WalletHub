/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule, SimpleChanges,Pipe  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CurrencyPipe } from '@angular/common'


@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment: {{monthly_payment | currency}}</b> <br/>
                    <b>Late Payment Fee : {{late_payment | currency}} </b> <br/>
                </div>`
})
export class Test01Component {

    @Input() loan_amount:number = 1000;
    monthly_payment:number = 200;
    late_payment = 10;

    ngOnChanges(changes: SimpleChanges) {
 
        for (const propName in changes) {
             const change = changes[propName];
             const to  = JSON.stringify(change.currentValue);
             this.monthly_payment = (0.02*change.currentValue);
             this.late_payment = (0.05*change.currentValue);

        }
    }
}

@NgModule({
    imports : [
        CurrencyPipe,
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}