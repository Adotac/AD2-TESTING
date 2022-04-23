import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

fdescribe('CalculatorService - Montero, Joshua', () => {
  let calculator: CalculatorService;
  let logSpy: any;

  beforeEach(() => {
    logSpy = jasmine.createSpyObj('LoggerService', ['log', 'errorMessage', 'warn']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,{
          provide: LoggerService,
          useValue: logSpy,
        }
      ],

    });
    calculator = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(calculator).toBeTruthy();
  });

  //-------------------------------------//
  
  it('should add 2 numbers', () => {
    let result = calculator.add(5, 5);
    expect(logSpy.log).toHaveBeenCalledWith('Addition operation called');
    expect(result).toBe(10);
  });

  it('should subtract 2 numbers', () => {
    let result = calculator.subtract(5, 5);
    expect(logSpy.log).toHaveBeenCalledWith('Subtraction operation called');
    expect(result).toBe(0);
  });

  it('should return a positive value when multiplying 2 numbers', () => {
   let result = calculator.multiply(5, 5);
    expect(logSpy.log).toHaveBeenCalledWith('Multiplication operation called');
    expect(logSpy.log).toHaveBeenCalledWith('Result is positive');
    expect(result).toBe(25);
  });

  it('should return a negative value when multiplying 2 numbers', () => {
    let result = calculator.multiply(-5, 5);
     expect(logSpy.log).toHaveBeenCalledWith('Multiplication operation called');
     expect(logSpy.warn).toHaveBeenCalledWith('Result is negative');
     expect(result).toBe(-25);
   });

  it('should divide 2 numbers', () => {
    let result = calculator.divide(25, 5);
    expect(logSpy.log).toHaveBeenCalledWith('Division operation called');
    expect(result).toBe(5);
  });

  it('should not divide by zero', () => {
    let result = calculator.divide(25, 0);
    expect(logSpy.errorMessage).toHaveBeenCalledWith('Check divide function -- cannot divide by 0');
    expect(result).toBe("Cannot divide by 0");
  });

  it('should return 1 if testfunction called with 1', () => {
    let result = calculator.testFunction(1);
    expect(result).toBe(1);
  });
  it('should return 2 if testfunction called with 2', () => {
    let result = calculator.testFunction(2);
    expect(result).toBe(2); 
  });
  it('should return 3 if testfunction called with any number, except for 1 and 2', () => {
    let result = calculator.testFunction(21);
    expect(result).not.toBe(1);
    expect(result).not.toBe(2);
    expect(result).toBe(3);
  });
});
