import React from 'react';

class NameInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            desc:'',
            type:'aaa',
            //multi_type:['aaa','bbb'],
            vail:true,
            options:['aaa','bbb','ccc'],
            upperEnable:true
        };
        //this.upperEnableToggle = this.upperEnableToggle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }
    /*
    upperEnableToggle(){
        this.setState((state,props)=>({
            text:state.upperEnable?state.text.toLowerCase():state.text.toUpperCase(),
            upperEnable:!state.upperEnable
        }));
    }
    */
    changeHandle(e){
        var _name = e.target.name;
        var _type = e.target.type;
        var _value = _type==='checkbox'?e.target.checked:e.target.value;
        console.log(_type);
        this.setState({
            [_name]:_value
        })
    }

    submitHandle(e){
        console.log(this.state)
        e.preventDefault();
    }
/*
    render(){
        return (
            <div>
                <label>Name:
                    <input type="text" value={this.state.text} onChange={this.changeHandle}/>
                </label>
                <button onClick={this.submitHandle}>Submit</button>
            </div>
        );
    }
*/
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <label>标题:
                        <input type="text" name="title" value={this.state.title} onChange={this.changeHandle}/>
                    </label>
                    <label>描述:
                        <textarea name="desc" value={this.state.desc} onChange={this.changeHandle} />
                    </label>
                    <select name="type" value={this.state.type} onChange={this.changeHandle}>
                        {this.state.options.map((item,idx)=>(<option key={idx} value={item}>{item}</option>))}
                    </select>
                    <label>有效:
                        <input type="checkbox" name="vail" checked={this.state.vail} onChange={this.changeHandle}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default NameInput
//input 和 textarea 都可以用e.target.value取到值