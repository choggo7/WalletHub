/**
 * Update the following components to meet the requirements : 
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule,Output,EventEmitter   } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'textfield',
    template : '<input (input)="fieldChange($any($event.target).value)" type="text" value="" />'
})
export class TextField {
    field = "";
    @Output() value: EventEmitter<string> =   new EventEmitter();
    fieldChange(event:string){
        this.field = event;
        this.value.emit(this.field);
    }
}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield (value)="valuechanged($event)" ></textfield>`
})
export class ChildComponent {
    @Output() valueOne: EventEmitter<string> =   new EventEmitter();
    valuechanged(value:any){
        this.valueOne = value;
    }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component #child></child-component> <br/>
                    Title is {{child.valueOne}}
                </div>`
})
export class Test02Component {

    title:string = "";
    valuechanged(){
        console.log(this.valuechanged);
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};