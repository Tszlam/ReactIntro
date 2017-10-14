import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';
import ClickCounter from './ClickCounter';
import Welcome from './Welcome';

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

class ElistItem extends React.Component{
    render(){
        return <li>item : {this.props.item}</li>
    }
}

class Elist extends React.Component{
    render(){
        return <ul>{this.props.list.map((item,idx)=><ElistItem item={item} key={idx}/>)}</ul>
    }
}

const _html = (
    <div>
        <Welcome name="Lee" vail='true'/>
        <Welcome />
        <Welcome name="Lee" vail={false}/>
        <ClickCounter/>
        <Clock/>
        <Clock updateFrq="2"/>
        <Clock updateFrq="3"/>
    </div>
);

const list = [1,2,3,4,5];

ReactDOM.render(
    //_html,
    //<List list={list}/>,
    <Elist list={list}/>,
    document.getElementById('root')
);