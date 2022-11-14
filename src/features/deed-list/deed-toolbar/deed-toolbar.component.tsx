import {
  AppBar,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface IFormInputs {
  name: string;
  weight: number;
}

interface Props {
  score: number;
  addDeed: (formVal: IFormInputs) => void;
}

function DeedToolbarComponent({ score, addDeed }: Props) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      name: '',
      weight: 0,
    },
  });

  const formSubmitHandler = (formVal: IFormInputs) => {
    addDeed(formVal);
    reset();
  };

  return (
    <AppBar color="inherit" sx={{ p: 1 }}>
      <Toolbar>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4" align="center">
              {score}
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <form onSubmit={handleSubmit(formSubmitHandler)}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Name"
                          size="small"
                          error={!!errors.name}
                          helperText={errors.name ? errors.name?.message : ''}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="weight"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="number"
                          label="Weight"
                          size="small"
                          error={!!errors.weight}
                          helperText={
                            errors.weight ? errors.weight?.message : ''
                          }
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button type="submit">Add</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default DeedToolbarComponent;
