import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : this.props.list,
        };
    }
    render(){
        return (
            <ul>
                {this.state.number.map((item)=>(<li key={item+''}>this is number {item*10}</li>))}
            </ul>
        )
    }
}

export default List