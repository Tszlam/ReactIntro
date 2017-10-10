import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(props){
    //console.log(props);
    return <h1>Hello {props.name}</h1>;
}
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
        this.state = {date:new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
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
            <div>
                <h1>Clock Component</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

const _html = (
    <div>
        <Welcome name="Lee" />
        <Welcome name="Fu" />
        <Clock/>
    </div>
);
ReactDOM.render(
    _html,
    document.getElementById('root')
);

//组件 ～= 自定义标签
//组件首字母大写可以和DOM 标签作区分
//如果不想用props由父级控制子组件的数据的话，可以用state，state是组件私有的由组建控制的，使用组件的state要用到class


// Function -》Class
// 1.从React.Component扩展出一个同名的Class
// 2.添加一个叫render()的空方法
// 3.把Function里的代码移到render()里面
// 4.把render()里的props改成this.props
// 5.把Function删掉

// 补充Class的组件
// 1.把render()里的this.props改成this.state
// 2.给组件Class添加一个constructor来初始化this.state
// 3.把props传给constructor，Class组件要用props来调用constructor

//补充Class的生命周期
//在多组件应用中，在组件销毁时把资源释放掉是很重要的
//当组件首次在DOM渲染，在React中叫做 mounting
//当组件在DOM中移除，在React中叫做 unmounting
//我们可以在组件的Class中定义当组件mount或者unmount时执行的方法(生命钩子)
//componentDidMount：在组件渲染后执行

//使用this.setState()来执行组件状态的更新
