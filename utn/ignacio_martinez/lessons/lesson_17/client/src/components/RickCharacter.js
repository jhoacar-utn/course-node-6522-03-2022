import { useEffect, useState } from "react";
import {getAllCharacters} from "../services/api";


function RickCharacter ()
{
    const [characters, setCharacters] = useState([]);

    let name ="Rick";
    let numero = 0;

    useEffect(()=>{

        getAllCharacters()
        .then(arrayCharacters=>{
            console.log(arrayCharacters);
            setCharacters(arrayCharacters);
    
        }).catch(error=>{
            console.log(error);
        })

    }, []);

    return(
        <div>
            All characters:
            <ul>
                {characters.map((element)=>{
                    return(
                        <li key={element.name}>
                            <div>{element.name}</div>
                            <img src={element.image}></img>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default RickCharacter;