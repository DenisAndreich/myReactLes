import React, { useEffect, useState } from "react";

// export class Counter extends React.Component{
//     constructor(){
//         super();

//         console.log('constructor')
//     }

//     componentDidMount(){
//         console.log('componentDidMount')
//     }

//     handleButton = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     render(){
//         console.log('render')
        
//         return(
//             <div>
//                 <span className="counter">rendered!</span>
//                 <button onClick={this.handleButton}>Parrent button</button>
//                 <Child />
//             </div>
//         )
//     } 
// }

// class Child extends React.Component {
//     constructor (props){
//         super(props)
        
//         console.log('child constructor')
//     }

//     componentDidMount(){
//         console.log('child componentDidMount')
//     }

//     render(){
//         console.log('child constructor')
//         return (
//             <div>
//                 Children
//             </div>
//         )
//     }
// }

const Counter = ()  => {
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    // const updateCount = () => {
    //     setCount(count + 1);
    // }

    const handleChange = (event) => {
        setValue(event.target.value);
        setName(`Name: ${event.target.value}`)
    }

    useEffect(() => {
        console.log({ value });
        console.log({ name });
    },[value,name])

    return (
        <div>
            <span className="counter">{value}</span>
            <input type="text" onChange={handleChange} value={value} />
        </div>
    ) 
}

export default Counter