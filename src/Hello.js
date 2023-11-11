import React from 'react';

// function Hello(props){
//	return <h1>Hello, {props.name}</h1>;
//}

 function Hello({name}){
 	return <h1>Hello, {name}</h1>;
 }

Hello.defaultProps = {
    name : "React!? Why"
}

export default Hello;