import { useEffect, useState } from 'react';
import {getAllCharacters} from '../../services/api';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function RickCharacter () {

    const [characters, setCharacters] = useState([])
    

    //One time excecution
    useEffect(() => {
        getAllCharacters()
            .then(arrCharacters => {
                console.log(arrCharacters);

                setCharacters(arrCharacters);
            })
            .catch(error => {
                console.log(error)
            })
    },[])

    return (
        <Card>
            <Typography sx={{textAlign:'center', mt:3}} variant="h3" component="h3">
                All Characters
            </Typography>
            <CssBaseline />
            <Container component='ul'>
                {characters.map((element)=>{
                    return (
                        <Card sx={{ maxWidth: 300, display:'inline-block', m:3}} key={element.name} component='li'>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={element.image}
                                alt={`Rick and Morty Character: ${element.name}`}
                            />
                            <CardContent>
                                <Typography sx={{textAlign:'center', mt:3, fontSize:18}} gutterBottom variant="h5" component="h5">
                                    {element.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Container>
        </Card>
    )
}

export default RickCharacter