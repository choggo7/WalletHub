/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `<form (submit)="onSubmit($event)" >
                    <h2>Login</h2>
                    <br/>
                    <input (input)="checkEmail($any($event.target).value)" type="email" value="" name="email" />
                    {{emailMessage}}
                    <br/>
                    <input (input)="checkPass($any($event.target).value)" type="password" value="" name="password" />
                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email:string = "";
    password:string = "";

    logged_in = false;

    emailMessage:string = "";
    passMessage:string = "";

    checkEmail(event:any){
        console.log(event);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event))
        {
         this.email = event;
         this.emailMessage = "";

        }else{
            this.emailMessage = "this email is incorect";
        }
    }

    checkPass(event:any){
        console.log(event);
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(event)){
            this.password = event;
            this.logged_in = true;
            this.passMessage = "";
        }else[
            this.passMessage = "password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length"
        ]
    }

    onSubmit(event){
        event.preventDefault();
        if(this.logged_in){
            console.log(event);
        }
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};