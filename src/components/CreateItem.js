import {useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function CreateItem(){
    const [values, setValues] = useState({
        task:"", due:""
    })

    const handleChange = (event) =>{
        const{name,value} = event.target;
        setValues({
            ...values,
            [name]:value,
        });
    };

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(()=>{
        ref.current.focus();   // 이곳으로 포커스가맞춰짐
    }, []);

    const onSubmit = (event) => {
        event.preventDefault(); // 화면이 새로고침 되는걸 막아줌
        fetch(`${process.env.REACT_APP_BACKEND_API_URI}/items`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                task: values.task,
                due: values.due,
                status: "todo",
            }), 
        }).then((res)=>{
            if(res.ok){
                alert("Created new item!");
                navigate("/todo");
            }
        });
    };

    return <form onSubmit={onSubmit}>
        <div className="input_area">
            <p>Task</p>
            <input type="text" name="task" value={values.task} onChange={handleChange} ref={ref}/>     
            <p>Due</p>
            <input type="text" name="due" value={values.due} onChange={handleChange}/>     
        </div>
        <button>Create</button>
     </form>
}