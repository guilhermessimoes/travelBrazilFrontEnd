import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Rating, createTheme, ThemeProvider, Grid, Container, Fab, } from '@mui/material';
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

export default function MediaCard({props}) {
  return (     
    <Container sx={{marginY: 5 }} >        
        <ThemeProvider theme={theme}>
        <Box marginLeft={100}>
            <Button variant="contained" href="/registerTranslado" marginLeft={20}>
                Cadastrar Translado
            </Button>
          </Box>
        <Typography
            variant = "h4"
            component= "h2"
            marginTop = {5}
            marginBottom = {3}
          >
          Todos os translados
          </Typography>
        <Grid item xs={10} md={4} >
            <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="200"
                image=''
                alt="green iguana"
            />  
            <CardContent>
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component="h2">
                        Teste
                    </Typography>
                    <Box
                    sx={{
                        display:"flex",
                        alignItems: "center"
                    }}
                    >
                        <AccessTime sx={{width: 12.5}}/>
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            10 horas
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
                            value={10}
                            precision={0.5}
                            size="small"
                        />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            {10}
                        </Typography>
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            ({10} reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0} >
                            Apenas por R$ {950.00}
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
    </Container>
   
    
        
  );
}
