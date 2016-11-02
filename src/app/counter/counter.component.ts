import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { CounterLogicComponent } from './counter-logic.component';
import { CounterService } from './counter.service';
import { LoggerService } from '../logger/logger.service';

@Component({
    selector: 'counter',
    template: `
            <p>Count: {{currentValue}}</p>
            <counter-logic [counterValue]="currentValue" (counterChanged)="updateCurrentCount($event)"></counter-logic>
        `,
    providers: [CounterService, LoggerService]
})
export class CounterComponent implements OnInit {
    loggerName: string = "counter";
    currentValue: Number = 0;

    constructor(private _counterService: CounterService, private _loggerService: LoggerService) { }

    ngOnInit() {
        this.getCurrentValue();
        this._loggerService.log("ngOnInit", this.loggerName);
    }

    updateCurrentCount(currentCount: number) {
        this.currentValue = currentCount;
        this._loggerService.log("updateCurrentCount_currentValue:" + this.currentValue, this.loggerName);
    }
    getCurrentValue() {
        this.currentValue = this._counterService.getCount();
        this._loggerService.log("getCurrentValue_currentValue:" + this.currentValue, this.loggerName);
    }
}

// Question's
// 
// How to get ActivatedRoute working?
// https://www.barbarianmeetscoding.com/blog/2016/07/07/updating-your-angular-2-app-to-use-the-new-router/