import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../services/api';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { Container } from '@mui/system';


function RickCharacter() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        getAllCharacters()
            .then(arrayCharacters => {

                console.log(arrayCharacters);
                setCharacters(arrayCharacters);

            }).catch(error => {
                console.log(error);
            })

    }, []);

    return (
        <Card>
            <Typography sx={{textAlign: "center"}} component="h3" variant="h3">
            All Characters:
            </Typography>
            <Grid component="ul" sx={{display:"grid", ali}}>
                {characters.map((element) => {
                    return (
                        <Card component="li" sx={{maxWidth: 300}} key={element.name}>
                            <CardMedia
                                component="img"
                                width="100"
                                image={element.image}
                                alt={element.name}
                            ></CardMedia>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="h5"
                                >
                                    {element.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        </Card>
    )

}

export default RickCharacter;