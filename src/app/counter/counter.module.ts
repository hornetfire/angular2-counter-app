// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { CounterComponent } from './counter.component';

@NgModule({
    imports: [

    ],
    declarations: [
        CounterComponent,
    ],
    exports: [
        CounterComponent,
    ]
})
export class CounterModule {

}
