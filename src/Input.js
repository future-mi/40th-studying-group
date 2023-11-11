import React, { useState } from "react";

function Input() {
    const [inputs, setInputs] = useState({
        subject : "",
        score: "",

    });

    const onChange = ( event ) => {
        const { value, name } = event.target;    // 이벤트가 일어나고 있는 타겟 DOM을 찾는것
        setInputs({
            ...inputs,
            [name] : value // dynamic property assign
        });
    };

    return (<>
        <div>
            <h2>성적 : {inputs.subject}{inputs.score} </h2>
            <input name="subject" placeholder="수학" value={inputs.subject} onChange={onChange}/>
            <input name="score" placeholder="99" value={inputs.score} onChange={onChange}/>
        </div>
    </>);
}

export default Input;