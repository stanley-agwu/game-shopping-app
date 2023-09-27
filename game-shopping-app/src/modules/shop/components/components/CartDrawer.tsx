import { KeyboardEvent, MouseEvent, HTMLAttributes, ReactNode } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface CartDrawerProps extends HTMLAttributes<HTMLDivElement> {
  toggleDrawer: (event: KeyboardEvent | MouseEvent) => void;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const GameCart = ({
  toggleDrawer,
}: {
  toggleDrawer: (event: KeyboardEvent | MouseEvent) => void;
}) => (
  <Box
    width={{ xs: 250, sm: 400, md: 600, lg: 800 }}
    role='presentation'
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
  >
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary='Game' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary='Item' />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

const CartDrawer = ({
  isOpen,
  onClose,
  toggleDrawer,
  children,
}: CartDrawerProps) => (
  <Box>
    {children}
    <SwipeableDrawer
      anchor='right'
      open={isOpen}
      onClose={onClose}
      onOpen={toggleDrawer}
    >
      <GameCart toggleDrawer={toggleDrawer} />
    </SwipeableDrawer>
  </Box>
);

export default CartDrawer;
