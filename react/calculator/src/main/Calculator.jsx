import React, {Component} from "react";
import './Calculator.css'
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearCalculator: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}

    constructor(props) {
        super(props);
        this.clearCalculator = this.clearCalculator.bind(this);
        this.defineOperation = this.defineOperation.bind(this);
        this.newDigit = this.newDigit.bind(this)
    }

    clearCalculator() {
        this.setState({...initialState})
    }

    defineOperation(operation) {
        if (this.state.current === 0) {
            this.setState({operation, current: 1, clearCalculator: true})
        } else {
            const result = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            } catch (e) {
                values[0]=this.state.values[0]
            }
            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: result ? null : operation,
                current: result ? 0 : 1,
                clearCalculator: !result,
                values
            })
        }
    }

    newDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearCalculator = this.state.displayValue === '0' || this.state.clearCalculator;
        const currentValue = clearCalculator ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;
        this.setState({displayValue, clearCalculator: false})

        if (digit !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({values});
            console.log(values)
        }
    }

    render() {
        const newDigit = digit => this.newDigit(digit);
        const defineOperation = operation => this.defineOperation(operation);
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearCalculator} triple/>
                <Button label="/" click={this.defineOperation} operation/>
                <Button label="7" click={this.newDigit}/>
                <Button label="8" click={this.newDigit}/>
                <Button label="9" click={this.newDigit}/>
                <Button label="*" click={this.defineOperation} operation/>
                <Button label="4" click={this.newDigit}/>
                <Button label="5" click={this.newDigit}/>
                <Button label="6" click={this.newDigit}/>
                <Button label="+" click={this.defineOperation} operation/>
                <Button label="1" click={this.newDigit}/>
                <Button label="2" click={this.newDigit}/>
                <Button label="3" click={this.newDigit}/>
                <Button label="-" click={this.defineOperation} operation/>
                <Button label="0" click={this.newDigit} double/>
                <Button label="." click={this.newDigit}/>
                <Button label="=" click={this.defineOperation} operation/>
            </div>
        )
    }
}