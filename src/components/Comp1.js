import React, {useEffect, useState} from "react";

const Comp1 = () => {

    const [resourceType,setresourceType] = useState('posts')
    const[items,setItems] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))

    },[resourceType]);

    return(
    <>
    <div>
        <button onClick={()=>setresourceType('posts')}>posts</button>
        <button onClick={()=>setresourceType('users')}>users</button>
        <button onClick={()=>setresourceType('comments')}>comments</button>
    </div>
    <h1>{resourceType}</h1>

    {items.map(item =>{
        return <pre>{JSON.stringify(item)}</pre>
    })}
    </>      
    )   
    
}

export default Comp1;