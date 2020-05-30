import React, { Component } from "react";
import axios from "axios";

class Loading extends Component {
  constructor() {
    super();
    this.state = {
        element:[]
    };
  }
 
  componentDidMount() {
    axios.get("https://reqres.in/api/users").then((res) => {
      //console.log(res.data.data);
      var element1 = res.data.data;
      const times = 3;
      const len = element1.length;
      const perLoop = parseInt(len/times);
      let temp=0;
      //console.log("oo",element1);
      var element = [];
      for(let i=0;i<len;i +=perLoop){
        //delayLoop(i);
        setTimeout(()=>{
            //element.push(element1[i]);//one by one
            let arr = [];
            console.log("i",i);
            //arr.push(element1[i+temp]);
            element.push(element1[i]);
            //temp = i+1;
            element.push(element1[i+1]);
            //arr.push(element1[temp]);
            //element = element.concat(arr);

            //console.log("ee",element);
          this.setState({element})},1000*i);
      }
      function delayLoop(i){
          setTimeout(()=>{
              element.push(element1[i]);
            this.setState({element})},5000*i);
      }
     // setTimeout(() => alert('Hello'), 10000);
     //var element = element1[0];
      /* setTimeout(()=> {
        element = element.concat(first());
        this.setState({element})
      },5000);
      setTimeout(()=> {
        element = element.concat(second());
        this.setState({element})
      },10000); */
      //setTimeout(()=>  this.setState({element}),10000);
      //setTimeout(first=> element,5000);
      //element =>(this.setState({element})
      //var element = first();
      //this.setState({element});
      //console.log(ele[0]);
     
      /* dataList.forEach(element => {
          //console.log("element",element);
         this.setState({element});
      }); */
     /*  function first(){
          const arr = [];
          arr.push(element1[0]);
          arr.push(element1[1])
          return arr;
      }
      function second(){
        const arr = [];
        arr.push(element1[2]);
        arr.push(element1[3]);
        return arr;
      } */
    });
  }
  render() {
    return <div>
        <ul>
             {this.state.element.map(ele=>(
                <li key={ele.id}>{ele.email}</li>
            ))}
        </ul>
    </div>;
  }
}
export default Loading;
