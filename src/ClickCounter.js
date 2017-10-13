import React from 'react';

class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
        //绑定this
        this.state = {count : 0};
    }
    
    click(){
        //this.setState({count:this.state.count+1});
        this.setState(prevState=>(
            {
                count:prevState.count+1
            }
        ));
    }
    //实验方法，可以不绑定this
    /*
    click = () => {
        this.setState(prevState=>(
            {
                count:prevState.count+1
            }
        ));
    }
    */
    render(){
        return(
            <div>
                <button onClick={this.click}>click</button>
                <p>Count:{this.state.count}</p>
            </div>
        )
    }
}

export default ClickCounter;