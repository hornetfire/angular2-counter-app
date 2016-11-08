import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterLogicComponent } from './counter/counter-logic.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, CounterComponent, CounterLogicComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }