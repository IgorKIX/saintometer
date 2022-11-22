import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { IIntentionFormInputs } from '../types';

type Props = {
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
  addIntention: (formVal: IIntentionFormInputs) => void;
};

function IntentionsListDialogComponent({
  addIntention,
  isDialogOpen,
  handleCloseDialog,
}: Props) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IIntentionFormInputs>({
    defaultValues: {
      name: '',
    },
  });

  const formSubmitHandler = (formVal: IIntentionFormInputs) => {
    addIntention(formVal);
    handleCloseDialog();
    reset();
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

export default IntentionsListDialogComponent;
