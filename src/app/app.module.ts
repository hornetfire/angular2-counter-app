import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { AppComponent }           from './app.component';
import { CounterComponent }       from './counter/counter.component';
import { CounterLogicComponent }  from './counter/counter-logic.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CounterComponent, CounterLogicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }