import { NearBindgen, near, call, view } from 'near-sdk-js'

@NearBindgen({})
export class CalculatorCallerContract {
  @call({})
  sum_a_b({ a, b }) {
    let calculatorAccountId = "calc.near";
    // Call the method `sum` on the calculator contract.
    // Any unused GAS will be attached since the default GAS weight is 1.
    // Attached deposit is defaulted to 0.
    return NearPromise
            .new(calculatorAccountId)
            .functionCall("sum", { a, b }, BigInt(0), BigInt(100000000000000));
  }

  @call({ privateFunction: true })
  sum({ a, b })  {
    return a + b;
  }
}