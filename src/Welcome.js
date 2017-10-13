import React from 'react';

class Welcome extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            style:{
                border:"2px solid black",
                margin:"5px",
                padding:"5px",
                display:"inline-block"
            },
            vail : this.props.vail || false
        };
    }
    
    render(){
        if(this.state.vail){
            return (
                <h1 style={this.state.style}>Hello {this.props.name}</h1>
            )
        }
        return (
            <div style={this.state.style}>
                {this.props.name && <h1>try to fool me~{this.props.name}</h1>}
                <h1>Who the hell are you ?</h1>
            </div>
        )
    }
}

export default Welcome