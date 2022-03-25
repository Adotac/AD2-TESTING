import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private logger: LoggerService) {}
  add(n1: number, n2: number) {
    this.logger.log('Addition operation called');
    return n1 + n2;
  }
  subtract(n1: number, n2: number) {
    this.logger.log('Subtraction operation called');
    return n1 - n2;
  }
  divide(n1: number, n2: number) {
    this.logger.log('divide operation called');
    
    if (n2 == 0)
      throw new Error("Cannot divide by Zero");

    return n1 / n2;
  }
  multiply(n1: number, n2: number) {
    this.logger.log('multiply operation called');
    return n1 * n2;
  }
}