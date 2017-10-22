import React from 'react';

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
export default Elist