import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Console } from 'console';

import Message from './Message';
import Examples from './ExamplesTest';


class App extends Component {
  render() {

  let stringType: string = "Manny";
  let numberType: number = 2;
  let booleanType : boolean = false;
  let arrayTypeOne : Array<string> = ["1","2","3"];
  let arrayTypeTwo : number[] = [1,2,3];
  
  // Complex Data Types

  // Tuple is used to represent an array with fixed number of elements.
  let aTuple : [string, number] = ["Manny", 2];

  // Enums are used to give more friendly names to sets of numeric values.
  // Enums are used to define a collection of constants.
  enum Codes {name = "Baby", age = 2};

  // any is used to represent any type in TypeScript.
  let firstName : any = 'sample';

  // void is used to specify that a function doesn't return anything.
  const warning = (): void => {
    console.log("Warning");
  }

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div>
        <h2>Easy Data Types</h2>
          <ul>
            <li>The Value {stringType} is of {typeof(stringType)} type!</li>
            <li>The Value {stringType} is of {typeof(stringType)} type!</li>
            <li>The Value {numberType} is of {typeof(numberType)} type!</li>
            <li>The Value {booleanType} is of {typeof(booleanType)} type!</li>
            <li>The Value {arrayTypeOne} is of {typeof(arrayTypeOne)} type!</li>
            <li>The Value {arrayTypeTwo} is of {typeof(arrayTypeTwo)} type!</li>
          </ul>
      </div>
      <div>
        <h2>Complex Data Types</h2>
          <ul>
            <li>The Value {aTuple[0]} {aTuple[1]} are of {typeof(aTuple[0])} {typeof(aTuple[1])}  type!</li>
            <li>The Value {Codes.name} {Codes.age} are of {typeof(Codes.name)} {typeof(Codes.age)} type!</li>
            <li>The Value {firstName} are of{typeof(firstName)} type!</li>
          </ul>
      </div>
      <div>
        <h2>Components</h2>
        <Message/>
      </div>
    </div>
    )
  }
}

export default App;
