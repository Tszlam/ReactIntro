import React from 'react';

//Function Version
/*
function Clock(props){
    return (
        <div>
            <h1>Clock Component</h1>
            <h1>{props.date.toLocaleTimeString()}</h1>
        </div>
    );
}
*/
//Class Version

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
        };
        this.style={
            border:"2px solid black",
            margin:"5px",
            padding:"5px",
            display:"inline-block"
        }
    }

    

    componentDidMount(){
        var freq = (+this.props.updateFrq)*1000 || 1000;
        console.log(freq);
        this.timerID = setInterval(
            () => this.tick(),
            freq
        );
    }
    //this.props是react自身定义的，this.state是有特殊用途的,其他不外显的属性可以根据需要添加到class上(this)
    //如果不再render()里使用的属性，就不要挂在this.state上  
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState(
            {
                date : new Date()
            }
        );
    }

    render(){
        
        return (
            <div style={this.style}>
                <h3>update every {this.props.updateFrq||1} seconds</h3>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Clock;