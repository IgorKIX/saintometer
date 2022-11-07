import ArchiveIcon from '@mui/icons-material/Archive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  TextField,
  Box,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import { useForm, Controller } from 'react-hook-form';

import { mockData, TDeed } from './data';

interface IFormInputs {
  name: string;
  weight: number;
}

function App() {
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

  const [deedsItems, setDeedsItems] = useState<TDeed[]>([] as TDeed[]);
  const [sins, setSins] = useState<TDeed[]>([] as TDeed[]);
  const [goodDeeds, setGoodDeeds] = useState<TDeed[]>([] as TDeed[]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setDeedsItems(mockData);
  }, []);

  useEffect(() => {
    setSins(deedsItems.filter(item => item.weight < 0));
    setGoodDeeds(deedsItems.filter(item => item.weight >= 0));
  }, [deedsItems]);

  useEffect(() => {
    setScore(
      deedsItems.reduce(
        (previousValue, currentItem) =>
          previousValue + Number(currentItem.weight),
        0,
      ),
    );
  }, [deedsItems]);

  const addDeed = ({ name, weight }: IFormInputs) => {
    setDeedsItems(prevState => {
      return [
        ...prevState,
        {
          id: (prevState.length + 1).toString(),
          name,
          weight,
        },
      ];
    });
  };

  const formSubmitHandler = (formVal: IFormInputs) => {
    addDeed(formVal);
    reset();
  };

  return (
    <>
      <CssBaseline />
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
      <Toolbar />
      <Toolbar />
      <Container>
        <Box>
          <Paper elevation={0}>
            <Grid container direction="column" spacing={2}>
              <List>
                {goodDeeds.map(({ id, name, weight }) => (
                  <ListItem key={id}>
                    <ListItemText primary={name} secondary={weight} />
                  </ListItem>
                ))}
                {sins.map(({ id, name, weight }) => (
                  <ListItem key={id}>
                    <ListItemText primary={name} secondary={weight} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Toolbar />
            <Paper
              sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
              elevation={3}
            >
              <BottomNavigation showLabels value={1}>
                <BottomNavigationAction
                  label="Recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Archive"
                  icon={<ArchiveIcon />}
                />
              </BottomNavigation>
            </Paper>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
