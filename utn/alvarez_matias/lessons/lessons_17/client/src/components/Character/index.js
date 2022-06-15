import { getAllCharacter } from "../../services/api"
import {useState, useEffect} from 'react'
import { Card, Grid } from "@mui/material"
import { CardContent } from "@mui/material"
import { CardMedia } from "@mui/material"
import { Typography } from "@mui/material"

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
    <Card>
        <Typography
            components="h3"
            variant="h2"
            sx={{ textAlign: "center" }}
        >
         All Character:
        </Typography>
        <Grid component="ul" sx={{display:"grid", alignItems: 'center', justifyContent: "center"}}>
            {character.map((element)=> {
                return (
                    <Card 
                        component="li"
                        sx={{ maxWidth: 300 }} 
                        key={element.name}
                    >
                        <CardMedia
                            component="img"
                            width="100"
                            image={element.image}
                            alt={element.name}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography 
                                variant="h5" 
                                components="h5"
                            >
                                {element.name}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Grid>
    </Card>
  )
}

export default RickCharacter