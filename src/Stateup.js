import React from 'react';

const scale_map = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
function toC(f) {
    return (f - 32) * 5 / 9;
}
function toF(c) {
    return (c * 9 / 5) + 32;
}
function handleConvert(temp, func) {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = func(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: this.props.scale,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let input = {
            scale: this.state.scale,
            temp: e.target.value
        };
        this.props.handle(input);
    }
    render() {
        var _temp = this.props.temp;
        return (
            <div>
                <label>{scale_map[this.state.scale]}:
                    <input type="number" value={_temp} onChange={this.handleChange} />
                </label>
            </div>
        )
    }
}

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            scale: 'c'
        };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(input) {
        this.setState({
            scale: input.scale,
            temp: input.temp
        })
    }
    render() {
        const _temp = this.state.temp;
        const _scale = this.state.scale;
        var temp_c = _scale === 'c' ? _temp : handleConvert(_temp, toC);
        var temp_f = _scale === 'f' ? _temp : handleConvert(_temp, toF);
        return (
            <div>
                <Input scale="c" temp={temp_c} handle={this.handleInput} />
                <Input scale="f" temp={temp_f} handle={this.handleInput} />
            </div>
        )
    }
}
export default Control