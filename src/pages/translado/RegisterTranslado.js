import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Container, FormControl, FormHelperText, InputLabel, MenuItem, Paper, Select, Stack, TextareaAutosize, Typography } from '@mui/material';

export default function FullWidthTextField() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <Box marginTop={5} />
      <Card elevation={3}>
        <CardContent >
        <Box marginTop={5}/>
      <Typography variant="h4" component="h4"  marginBottom={5}>Cadastro de Translado</Typography>
        <form>
          <Box
            marginTop={2}
          > 
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '122ch' },
                }}
                noValidate
                autoComplete="off"
              >         
                <TextField id="standard-basic" label="Título" variant="outlined" />
              </Box>
              <div>
                <FormControl sx={{ m: 1, width: '60ch' }}>
                  <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: '60ch' }}>
                  <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: '60ch' }}>
                  <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: '60ch' }}>
                  <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Box
                    sx={{
                      '& > :not(style)': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >         
                    <TextField id="standard-basic" label="Título" variant="outlined" />
                    <TextField id="standard-basic" label="Título" variant="outlined" />
                </Box>
                <Box
                    sx={{
                      '& > :not(style)': { m: 1, width: '146ch', height:'300'},
                    }}
                    noValidate
                    autoComplete="off"
                  >         
                   <TextareaAutosize
                    aria-label="minimum height"
                    placeholder="Minimo de 10 linhas"
                    minRows={10}
                   >

                   </TextareaAutosize>
                </Box>
                
                <Stack spacing={2} direction="row" padding={1}>
                  <Button variant="contained" type='submit'>salvar</Button>
                  <Button variant="text" href="/translado">voltar</Button>
                </Stack>
              </div>    

          </Box>
        </form>
        </CardContent>
      </Card>
    </Container>
  );
}