import {Container, Typography, Box, Paper, BottomNavigation} from "@mui/material"
import ImageCollage from "../components/ImageCollage";
import ControlledAccordions from "../components/Accordian"
import BasicModal from "../components/Modal";

const DetailsTranslado = () => <Container sx ={{width: 900}}>
    <Typography variant="h3" component="h1" marginTop= {3}>
        Explore the world in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
        <img  src="../image/imagemNatal.jpg" height={325} />
        <ImageCollage />

    </Box>
    <Box>
        <Typography variant="h6" component="h4" marginTop= {5}>
            Tudo sobre
        </Typography>
        <Typography variant="paragraph" component="p" marginTop= {3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
    </Box>
    <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop= {5} marginBottom={3}>
            Perguntas Frequentes
        </Typography>
        <ControlledAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal/>
        </BottomNavigation>
      </Paper>
</Container>

export default DetailsTranslado;