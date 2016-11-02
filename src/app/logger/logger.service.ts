import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    log(msg: string, component: string = "") {
        var output: string = (component != "") ? component + "::" + msg : msg;
        console.log(output);
    }
}