import { getAllCharacter } from "../services/api"
import {useState, useEffect} from 'react'

const RickCharacter = () => {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        getAllCharacter()
            .then(arrayCharacters=>{
                console.log(arrayCharacters);
                setCharacter(arrayCharacters)
            }).catch(error=>{
                console.log(error);
            })
    }, []);

  return (
    <div>
        All Character:
        <ul>
            {character.map((element)=> {
                return (
                    <li key={element.name}>
                        <div>{element.name}</div>
                        <img src={element.image} alt={element.name}></img>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default RickCharacter