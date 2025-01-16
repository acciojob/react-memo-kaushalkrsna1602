import React, { useEffect, useState } from "react";

const App = ()=>{

    const [todo, setTodo] = useState([]);

    const [count, setCount] = useState(0);

    const [skill, setSkill] = useState("");

    const [memoSkill, setMemoSkill] = useState([]);

    function handleTodo(){
        setTodo([...todo, "New Todo"])
    }

    function handleCount(){
        setCount(count+1);
    }

    function handleSkill(e){
        setSkill(e.target.value);
    }

    function addMemo(){
        if(skill.length < 5){
            setSkill("");
            return;
        }
        setMemoSkill([...memoSkill, skill]);
        setSkill("");
    }

    useEffect(()=>{
        document.title = `Count: ${count}`;
    }, [count])

    return(
        <div id="main">
            <h2>My Todos</h2>
            <button id="add-todo-btn" 
            onClick={handleTodo}> Add Todo </button>
            {
                todo.map((item, index)=>{
                    return(
                        <p id="todo-0" key={index}>{item}</p>
                        
                    )
                })
            }
            <hr/>
            <p>Count: </p>
            <button id="incr-cnt"
            onClick={handleCount}>{count}</button>
            <h2>Expensive Calculation
            <p id="calc">1000000000</p>
            </h2>
            <hr/>
            <hr/>

            <h2> Memo </h2>
            <input id="skill-input" type="text" placeholder="Enter Skill"
            onChange={handleSkill}
            value={skill}></input>
            <button id="skill-btn" onClick={addMemo}> Add Skill </button>
            <ul id="item-jumbotron">
                {
                    memoSkill.map((item, index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default App;