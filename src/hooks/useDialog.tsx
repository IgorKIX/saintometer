import { useState } from 'react';

export default function useDialog(initialState: boolean) {
  const [isDialogOpen, setIsDialogOpen] = useState(initialState);
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return { isDialogOpen, handleOpenDialog, handleCloseDialog };
}
