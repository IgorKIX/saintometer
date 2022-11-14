import ArchiveIcon from '@mui/icons-material/Archive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Toolbar,
} from '@mui/material';
import React from 'react';

function BottomToolbarComponent() {
  return (
    <Paper elevation={0}>
      <Toolbar />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels value={1}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Paper>
  );
}

export default BottomToolbarComponent;
