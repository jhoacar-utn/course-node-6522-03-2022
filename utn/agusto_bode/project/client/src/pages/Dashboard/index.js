import { useEffect, useState } from 'react';
import { handleDashboard } from '../../services/user';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Dashboard() {

  const [profile, setProfile] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    handleDashboard(token)
      .then(arrayProfile => {
        setProfile(arrayProfile);

      }).catch(error => {
        console.log(error);
      })
  }, []);
  

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>Datos del usuario</h1>
      <Card sx={{ maxWidth: 400, backgroundColor: 'white', color: 'black' }}>
        <CardMedia
          component="img"
          height="360"
          image={profile[1]?.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {profile[1]?.avatar}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {profile[1]?.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {profile[1]?.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}