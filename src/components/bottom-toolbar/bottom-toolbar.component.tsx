import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Fab,
  IconButton,
  styled,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function BottomToolbarComponent() {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="up" in={!trigger}>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default BottomToolbarComponent;
