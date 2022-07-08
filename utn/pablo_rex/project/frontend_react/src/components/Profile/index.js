import { useEffect, useState } from 'react';
import { handleDashboard } from '../../services/user';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function OneCharacter() {

  const [profile, setprofile] = useState([]);

  const token = localStorage.getItem('token');
  useEffect(() => {

    /*
      Aca es donde controlamos lo que se resuelva traer el perfil del usuario,
      no es directamente un array porque estaria hablando de muchos usuarios
      se trata de uno solo, asi que en la variable 'arrayprofile' (que
      deberia llamarse de la forma en que viene que es 'objectprofile') cuando
      se resuelva la promesa del .then pues asignamos ese nuevo objeto
      a nuestro estado llamado 'profile'

      Entonces cambiandonos a trabajar con objetos seria de la siguiente manera

      const [profile, setprofile] = useState({});

      ...

      handleDashboard(token).then(objectprofile=>{
          setprofile(objectprofile);
      })

      
      ...

      return (

        <Card>
        ...
            <Card
              component="li"
              sx={{ maxWidth: 350 }}
              key={profile?.email}>
              <CardMedia
                component="img"
                width="120"
                image={profile?.image}
                alt={profile?.name}
              >
              ...
        </Card>
      ) 


      Asi de esa manera no estoy recorriendo un array del perfil, solo accedo
      a los atributos que tiene y si no existen o es undefined pues para eso
      se usa el profile?.email que valida que exista la propiedad y si existe la muestra!
    */
    handleDashboard(token)
      .then(arrayprofile => {

        setprofile(arrayprofile);

      }).catch(error => {
        console.log(error);
      })

  }, []);

  return (
    <Card>
      <Typography sx={{ textAlign: 'center' }} component="h4" variant="h4">
      </Typography>
      <Grid component="ul" sx={{ display: "grid", alignItems: "center", justifyContent: "center" }}>
        {profile.map((element) => {
          return (
            <Card
              component="li"
              sx={{ maxWidth: 350 }}
              key={element.email}>
              <CardMedia
                component="img"
                width="120"
                image={element.image}
                alt={element.name}
              >
              </CardMedia>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h5"
                >
                  Name: {element.name}
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                >
                  Email: {element.email}
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                >
                  Avatar: {element.avatar}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </Card>
  )

}

export default OneCharacter;