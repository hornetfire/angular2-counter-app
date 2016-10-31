import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  getCount() {
    return 5;
  }
}