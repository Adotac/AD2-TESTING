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
    let result;
    this.logger.log('Division operation called');
    if (n2 == 0) {
      result = 'Cannot divide by 0';
      this.logger.errorMessage('Check divide function -- cannot divide by 0');
    } else {
      result = n1 / n2;
    }
 
    return result;
  }
 
  multiply(n1: number, n2: number) {
    let result = n1 * n2;
 
    this.logger.log('Multiplication operation called');
 
    if (result < 0) {
      this.logger.warn('Result is negative');
    } else {
      this.logger.log('Result is positive');
    }
    return n1 * n2;
  }
 
  testFunction(x: number) {
    if (x == 1) {
      return 1;
    } else if (x == 2) {
      return 2;
    } else return 3;
  }
}
 