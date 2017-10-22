import React from 'react';
import ReactDOM from 'react-dom';
/*
//组件
import Clock from './Clock';
import ClickCounter from './ClickCounter';
import Welcome from './Welcome';

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

ReactDOM.render(
    _html,
    document.getElementById('root')
);
*/

/*
//未抽象List
import List from './List';

const list = [1,2,3,4,5];

ReactDOM.render(
    <List list={list}/>,
    document.getElementById('root')
);
*/

/*
//抽象List
import Elist from './Elist';

const list = [1,2,3,4,5];

ReactDOM.render(
    <Elist list={list}/>,
    document.getElementById('root')
);
*/

/*
//form
import NameInput from'./form';

ReactDOM.render(
    <NameInput/>,
    document.getElementById('root')
);
*/

/*
//State Lifing
import Temp from'./Stateup';

ReactDOM.render(
    <Temp />,
    document.getElementById('root')
);
*/

/*
//children
import Temp from'./Stateup';
function Parent(props){
    return (
        <div>
            <p>here comes the kid</p>
            {props.children}
            {props.top}
            {props.bottom}
            {props.tmp}
        </div>
    );
}
const top = <div><h2>this is top</h2></div>;
const bottom = <div><h2>this is bottom</h2></div>;
ReactDOM.render(
    <Parent top={top} bottom={bottom} tmp={<Temp/>}>
        <div>
            <h1>kid~</h1>
        </div>
    </Parent>,
    document.getElementById('root')
);
*/

//Children Nesting
import Dialog from'./Dialog';
class NameDialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        };
        this.handleInout=this.handleInout.bind(this);
    }
    handleInout(e){
        this.setState({name:e.target.value});
    }
    render(){
        return(
            <Dialog title="NameDialog" msg="Input Your Name">
                <p>Name is : {this.state.name}</p>
                <input value={this.state.name} onChange={this.handleInout}/>
            </Dialog>
        );
    }
}
ReactDOM.render(
    <NameDialog/>,
    document.getElementById('root')
);