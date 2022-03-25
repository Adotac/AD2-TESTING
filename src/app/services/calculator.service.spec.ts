import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

fdescribe('CalculatorService - Montero, Joshua', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    let calculator = new CalculatorService(new LoggerService());
    let result = calculator.add(5, 5);

    expect(result).toBe(10);
  })

  it('should subtract 2 numbers', () => {
    let calculator = new CalculatorService(new LoggerService());
    let result = calculator.subtract(5, 5);

    expect(result).toBe(0);
  })

  it('should multiply 2 numbers', () => {
    let calculator = new CalculatorService(new LoggerService());
    let result = calculator.multiply(5, 5);

    expect(result).toBe(25);
  })

  it('should divide 2 numbers', () => {
    let calculator = new CalculatorService(new LoggerService());
    //let result1 = calculator.divide(5, 0);
    let result2 = calculator.divide(25, 5);


    expect(function(){
      calculator.divide(5, 0)
    }).toThrow();
    
    expect(result2).toBe(5);

  })
});
