import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container, FormHelperText, Grid, Input, InputLabel, TextField, FormControl, MenuItem, Select } from '@mui/material';





export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <Container >
      <form>
        <Paper> 
        <Box sx={{ maxWidth: 900}} marginTop={10} marginLeft={10}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Ultimo Passo</Typography>
                    ) : null
                  }
                >
                  {step.label}
                  
                </StepLabel>
                <StepContent >                
                {step.textfield}
                  <Box sx={{ mb: 2 }}>                 
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'FINALIZAR' : 'Continuar'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Voltar
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        </Paper>
      </form>
    </Container>
  );
}

const steps = [
  {
    label: 'Insira o nome do translado e o preço',
    textfield: [  <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div>       
        <TextField id="outlined-basic" label="Título" variant="outlined" />
        <TextField id="outlined-basic" label="Preço" variant="outlined" /> 
      </div>
    </Box>],             

  },
  {
    label: 'Selecione as configurações do translado',
    textfield: [  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />  
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />        
    </div>
    </Box>], 
  },
  {
    label: 'Digite a descrição do translado',
    textfield: [  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>       
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> 
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />        
    </div>
    </Box>],
  },
];