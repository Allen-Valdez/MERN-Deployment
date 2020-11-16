import { navigate } from '@reach/router'
import Axios from 'axios';
import { useEffect, useState } from 'react';

export const Pirates= props =>{

    const [pirates, setPirates]= useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/pirates")
        .then(res => setPirates(res.data))
        .catch(err => console.log(err));
        console.log(pirates);
    }, [])

    const addPirateHandler= e =>{
        navigate("/pirate/new");
    }

    const pirateHandler = e =>{
        navigate("/pirate/" + e.target.id)
    }

    const removeHandler= e =>{
        Axios.delete("http://localhost:8000/api/pirate/delete/" + e.target.id);
        const filtered= pirates.filter(f =>{
            return f._id !== e.target.id
        })
        setPirates(filtered);
    }

    return(
        <div>
            <div>
                <h1>The Goon Crew</h1>
                <button onClick={addPirateHandler}>Add ScallyWag</button>
            </div>

            <div>
                {pirates.map((pirate, idx) =>{
                    return(
                        <div key={idx}>
                            <hr/>
                        <h1>{pirate.name}</h1>
                            <img src={pirate.image} alt="img" width="200px" height="200px"/>
                            <button style={{"background":"blue", "color":"white"}} onClick={pirateHandler} id={pirate._id}>View Heathen</button>
                            <button style={{"background":"red"}} onClick={removeHandler} id={pirate._id}>Walk the Plank</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}