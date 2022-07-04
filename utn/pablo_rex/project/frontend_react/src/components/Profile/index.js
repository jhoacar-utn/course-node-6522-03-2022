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
        Your Profile
      </Typography>
      <Grid component="ul" sx={{ display: "grid", alignItems: "center", justifyContent: "center" }}>
        {profile.map((element) => {
          return (
            <Card
              component="li"
              sx={{ maxWidth: 350 }}
              key={element.name}>
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