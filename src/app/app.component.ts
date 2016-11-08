import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`div { border: solid 1px red; margin: 10px; padding: 10px; }`],
    template: `
        <div>
            <router-outlet></router-outlet>
            <h2>App Component</h2>
            <counter></counter>
        </div>
    `
})
export class AppComponent { }
