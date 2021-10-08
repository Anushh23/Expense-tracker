import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }
    //This is an inbuilt feature in react
    componentDidMount(){
         this.timerID=setInterval(()=>(this.tick()),1000);
    }
    //This is an inbuilt component in react- componentWillUnmount
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
     render(){
         return(
           <div className="container">
               <h1>Hello, World</h1>
               <h2>It is {this.state.date.toLocaleTimeString()}</h2>
           </div>
         )
     }
}

export default Clock;