import React from 'react';
import './InputLength.css';
import CharList from './CharList';

class InputLength extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            inputTextLength: 0,
        }
    }
    changeLength = (ev) => {
        this.setState({ inputText: ev.target.value });
        let calculateLength = ev.target.value.length;
        this.setState({ inputTextLength: (calculateLength) });
        console.log(" Text: " + this.state.inputText + "     Length: " + this.state.inputTextLength);
    }
    deleteOnClick = (ev,index) => {
        const text = this.state.inputText.split('');
        text.splice(index, 1);
        const updateText = text.join('');
        this.setState({ inputText: updateText });
        let calculateLength = this.state.inputText.length;
        this.setState({ inputTextLength: (calculateLength) });
    }

    render() {

        const List = this.state.inputText.split('').map((ch, index) => {
            return <CharList listItem={ch}
                key={index}
                clicked={() => this.deleteOnClick(index)} />
        });

        return (
            <div className="InputLength">
                <input type='text' className='InputLength' onChange={this.changeLength} value={this.state.inputText}></input>
                <p>{this.state.inputText}</p>
                <p> Length: {this.state.inputTextLength}</p>
                {List}
            </div>
        );
    }
}

export default InputLength;

