import React , {useState} from "react";
function ToDoList(){
    const [value,setValue]=useState(" ");
    const [list,setList]=useState([]);
    
    const handlChange = e =>{
        setValue(e.target.value)
    };
    const handlSubmit= ()=>{
        setList(
            prev=>prev.concat({value:value})
        );
        setValue("");
    }
    const remove=i=>{
        if(typeof(i)==='number' && i>=0 && i<list.length){
            setList([...list.slice(0,i),...list.slice(i+1)])
        }
    }

    return(
        <div>
            <input type="text" value={value} onChange={handlChange}/>
            <button onClick={handlSubmit}>Add</button>
            <ul type="none">
            {list.map(
                (item,index)=>item.value && (
                    <li key={index}>{item.value}
                    <button onClick={e=>remove(index)}>remove</button>
                    </li>
                )
            )}
            </ul>
        </div>
    )
}
export default ToDoList;