import Axios from "axios";
import { useEffect, useState } from "react"

export const PirateDetails = props =>{

    const[pirate, setPirate]= useState([]);
    const[name, setName]= useState("");
    const[peg, setPeg]= useState()
    const[eye, setEye]= useState()
    const[hook, setHook]= useState()

    useEffect(() =>{
        Axios.get("http://localhost:8000/api/pirate/" + props.id)
        .then(res => {
            setPirate(res.data);
            setName(res.data.name);
            setPeg(res.data.pegleg);
            setEye(res.data.eyepatch);
            setHook(res.data.hook);
        })
        .catch(err => console.log(err));
        console.log(pirate)
    }, [props.id]);

    return(
        <div>
            <div style={{"display":"flex"}}>
                <div>
                    <h1>{name}</h1>
                    <img src={pirate.image} alt="img.src" width="300px" height="300px"/>
                    <h2>"{pirate.phrase}"</h2>
                </div>

                <div>
                    <h2>About</h2>
                    <h2>Position: {pirate.position}</h2>
                    <h2>Chests: {pirate.chests}</h2>
                    <div style={{display:"flex"}}>
                        <h5>PegLeg: {peg ? "yes" : "no"}</h5>
                        <button onClick={e =>{
                            Axios.put("http://localhost:8000/api/pirate/update/" + props.id, {"pegleg": pirate.pegleg ? false : true});
                            setPeg(peg ? false : true);
                        }} id="pegleg">{peg ? "no" : "yes"}</button>
                    </div>

                    <div style={{display:"flex"}}>
                        <h5>EyePatch: {eye ? "yes" : "no"}</h5>
                        <button onClick={e =>{
                            Axios.put("http://localhost:8000/api/pirate/update/" + props.id, {"eyepatch": pirate.eyepatch ? false : true});
                            setEye(eye ? false : true);
                        }}>{eye ? "no" : "yes"}</button>
                    </div>

                    <div style={{display:"flex"}}>
                        <h5>HandHook: {hook ? "yes" : "no"}</h5>
                        <button onClick={e =>{
                            Axios.put("http://localhost:8000/api/pirate/update/" + props.id, {"hook": pirate.hook ? false : true});
                            setHook(hook ? false : true);
                        }}>{hook ? "no" : "yes"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}