import React from 'react';

class Dialog extends React.Component{
    render(){
        return(
            <div>
                <p>this is title: {this.props.title}</p>
                <p>this is msg: {this.props.msg}</p>
                <div>
                    <p>this is what gets pass on</p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Dialog