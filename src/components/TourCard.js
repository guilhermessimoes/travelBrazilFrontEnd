import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Rating, createTheme, ThemeProvider, Grid, } from '@mui/material';
import { AccessTime } from '@mui/icons-material';


const theme = createTheme({
    components:{
        MuiTypography:{
            variant: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        },
    }
})

export default function MediaCard({tour}) {
  return (
    <ThemeProvider theme={theme}>
    <Grid item xs={10} md={4} >
        <Card sx={{ maxWidth: 345 }} >
        <CardMedia
            component="img"
            height="200"
            image={tour.image}
            alt="green iguana"
        />  
        <CardContent>
            <Box paddingX={1}>
                <Typography variant='subtitle1' component="h2">
                    {tour.name}
                </Typography>
                <Box
                sx={{
                    display:"flex",
                    alignItems: "center"
                }}
                >
                    <AccessTime sx={{width: 12.5}}/>
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                        {tour.duration} horas
                    </Typography>

                </Box>
                <Box
                    sx={{
                        display:"flex",
                        alignItems: "center"
                    }}
                    marginTop={3}
                >
                    <Rating
                        //name="read-only"
                        //readOnly
                        name="simple-controlled"
                        value={tour.rating}
                        precision={0.5}
                        size="small"
                    />
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                        {tour.rating}
                    </Typography>
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                        ({tour.numberOfReviews} reviews)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" component="h3" marginTop={0} >
                        Apenas por R$ {tour.price}
                    </Typography>
                </Box>                    
            </Box>        
        </CardContent>
        <CardActions>
            <Button size="small">Excluir</Button>
            <Button size="small">Editar</Button>
            <Button size="small">Ver detalhes</Button>
        </CardActions>
        </Card>
    </Grid>
    </ThemeProvider>
  );
}
