import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
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

    constructor(private _counterService: CounterService, private _loggerService: LoggerService, private _route: ActivatedRoute, private router: Router) {
        // const tree: UrlTree = router.parseUrl('/team;id=33');
        // const g: any = tree.root.children[PRIMARY_OUTLET];
        // const s: UrlSegment[] = g.segments;
        // //s[0].path; // returns 'team'
        // //s[0].parameters; // returns {id: 33}

        // console.log(s[0].path);
        // console.log(s[0].parameters);
        console.log("Log url: " + this.router.url);
    }

    ngOnInit() {
        this.getCurrentValue();
        //this._route.params.subscribe((data) => { this._loggerService.log(data.params[''], this.loggingName); })
        this._loggerService.log('ngOnInit', this.loggingName);
        //console.log(this._route.component);
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