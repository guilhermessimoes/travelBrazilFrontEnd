import MediaCard from '../components/TourCard';
import { Container, Grid, Typography } from '@mui/material';
import cities from "../data.json"

const Home = () =>(
    <div className="App">
    <Container sx={{marginY: 5 }} >
      {cities.map((city)=>(
        <>
          <Typography
            variant = "h4"
            component= "h2"
            marginTop = {5}
            marginBottom = {3}
          >
          Melhores destino de {city.name}
          </Typography>
          <Grid container spacing={3}>
              {city.tours.map((tour, index)=> 
              <MediaCard tour={tour} key={index} elevation={3}/>
              )}              
          </Grid>
        </>
      ))}
     
    </Container>
  </div>
)

export default Home