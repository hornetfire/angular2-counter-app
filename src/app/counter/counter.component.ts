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
    loggingName: string = "counter";
    currentValue: Number = 0;

    constructor(private _counterService: CounterService, private _loggerService: LoggerService) { }

    ngOnInit() {
        this.getCurrentValue();
        this._loggerService.log("ngOnInit", this.loggingName);
    }

    updateCurrentCount(currentCount: number) {
        this.currentValue = currentCount;
        this._loggerService.log("updateCurrentCount_currentValue:" + this.currentValue, this.loggingName);
    }
    getCurrentValue() {
        this._counterService.getCount()
            .subscribe((result) => {
                this.currentValue = result.count;
            });
        this._loggerService.log("getCurrentValue_currentValue:" + this.currentValue, this.loggingName);
    }
}

// Question's
// 
// How to get ActivatedRoute working?
// https://www.barbarianmeetscoding.com/blog/2016/07/07/updating-your-angular-2-app-to-use-the-new-router/