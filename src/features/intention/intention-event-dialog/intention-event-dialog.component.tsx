import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useAddEvent } from '../hooks';
import { IEventFormInputs } from '../types';

type Props = {
  intentionId: number;
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
};

function IntentionEventDialogComponent({
  intentionId,
  isDialogOpen,
  handleCloseDialog,
}: Props) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IEventFormInputs>({
    defaultValues: {
      name: '',
      score: 0,
    },
  });
  const [scoreValue, setScoreValue] = useState('0');
  const { mutate } = useAddEvent();

  const formSubmitHandler = (formVal: IEventFormInputs) => {
    mutate({ ...formVal, intention_id: intentionId });
    handleCloseDialog();
    reset();
  };

  const handleScoreChange = (event: SelectChangeEvent) => {
    setScoreValue(event.target.value);
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>Add intention</DialogTitle>
      <DialogContent>
        <DialogContentText>Add a new intention to the list</DialogContentText>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={9}>
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
            <Grid item xs={9}>
              <Controller
                name="score"
                control={control}
                render={({ field }) => (
                  <Select
                    id="socre-select"
                    value={scoreValue}
                    label="Score"
                    onChange={handleScoreChange}
                  >
                    <MenuItem value={-1}>-1</MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                  </Select>
                )}
              />
            </Grid>
            <Grid item xs={2}>
              <Button type="submit">Add</Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default IntentionEventDialogComponent;
