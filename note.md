组件 ～= 自定义标签
组件首字母大写可以和DOM 标签作区分
如果不想用props由父级控制子组件的数据的话，可以用state，state是组件私有的由组建控制的，使用组件的state要用到class


#Function -》Class
1.从React.Component扩展出一个同名的Class
2.添加一个叫render()的空方法
3.把Function里的代码移到render()里面
4.把render()里的props改成this.props
5.把Function删掉
##补充Class的组件
1.把render()里的this.props改成this.state
2.给组件Class添加一个constructor来初始化this.state
3.把props传给constructor，Class组件要用props来调用constructor
##补充Class的生命周期
在多组件应用中，在组件销毁时把资源释放掉是很重要的
当组件首次在DOM渲染，在React中叫做 mounting
当组件在DOM中移除，在React中叫做 unmounting
我们可以在组件的Class中定义当组件mount或者unmount时执行的方法(生命钩子)
componentDidMount：在组件渲染后执行
#使用this.setState()来执行组件状态的更新
##使用setState()须知
不要直接修改state，要使用setState()，唯一一个能直接给state赋值的地方是在constructor里面
setState()有可能是异步，react会把多个setState()合成一个来优化性能，所以最好不要依靠this.props或this.state做实时计算
setState()有另一种用法，可以传入一个函数，函数有两个参数，前一个state，props
##state是组件内部维护
组件通过props接收外来数据
数据只能向下传

#事件处理
区别：
用驼峰
传一个函数而不是字符串
不能用返回false来避免默认行为，要显式调用preventDefault
例子：
HTML：
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
React：
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

事件的handle要绑定this，因为handle是作为回调函数在事件触发的时候调用的，所以handle的this不是组件class的this







##问题
1.组件传入props没有类型检查？
