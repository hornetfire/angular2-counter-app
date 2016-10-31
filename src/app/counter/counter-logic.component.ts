import { Component, Input } from '@angular/core';

@Component({
    selector: 'counter-logic',
    styles: [`div { border: solid 1px green; margin: 10px; padding: 10px; }`],
    template: `
        <div>
            <h4>Counter Logic Component</h4>
            <p>Count: {{counterValue}}</p>
        </div>
    `
})
export class CounterLogicComponent {
    @Input() counterValue: number = 0;
}