import React, { useEffect, useState } from 'react';
import {
  Drawer,
  List,
  IconButton,
  Box,
  useTheme,
  styled,
  Divider,
  Typography,
  alpha,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  LibraryBooks as ContentLibraryIcon,
  BarChart as AnalyticsIcon,
  People as AudienceIcon,
  Person as ProfileIcon,
  ExitToApp as SignOutIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import { useLocation, useHistory } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onSectionChange: (section: string) => void;
  currentSection: string;
  isMobile: boolean;
}

const drawerWidth = 260;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.background.paper,
    width: drawerWidth,
    borderRight: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  },
}));

// Styled anchor component
const StyledAnchor = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  margin: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.hover, 0.8),
  },
}));

// Main navigation items
const navigationItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, id: 'dashboard', path: '/' },
  { text: 'Home', icon: <HomeIcon />, id: 'home', path: '/home' },
  { text: 'Content Library', icon: <ContentLibraryIcon />, id: 'content-library', path: '/content-library' },
  { text: 'Analytics', icon: <AnalyticsIcon />, id: 'analytics', path: '/analytics' },
  { text: 'Audience Insights', icon: <AudienceIcon />, id: 'audience-insights', path: '/audience-insights' },
];

// User related items
const userItems = [
  { text: 'Profile', icon: <ProfileIcon />, id: 'profile', path: '/profile' },
  { text: 'Sign Out', icon: <SignOutIcon />, id: 'sign-out', path: '/login' },
];

const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClose,
  onSectionChange,
  currentSection,
  isMobile,
}) => {
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();

  const handleClick = (e: React.MouseEvent, item: { id: string; path: string; text: string }) => {
    console.log(`Sidebar: Clicked ${item.text} with path ${item.path}`);
    onSectionChange(item.id);
    if (isMobile) onClose();
    
    // Use React Router history for navigation
    history.push(item.path);
  };

  const renderNavItem = (item: { text: string; icon: React.ReactNode; id: string; path: string }) => {
    const active = currentSection === item.id;
    
    return (
      <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
        <ListItemButton
          sx={{
            px: 2,
            py: 1,
            borderRadius: 1,
            mx: 1,
            backgroundColor: active ? 'primary.main' : 'transparent',
            color: active ? 'primary.contrastText' : 'text.primary',
            '&:hover': {
              backgroundColor: active ? 'primary.main' : 'action.hover',
            },
          }}
          onClick={(e) => handleClick(e, item)}
        >
          <Tooltip title={item.text} placement="right" arrow>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : 0,
                justifyContent: 'center',
                color: active ? 'primary.contrastText' : 'inherit',
              }}
            >
              {item.icon}
            </ListItemIcon>
          </Tooltip>
          {open && (
            <ListItemText 
              primary={item.text} 
              sx={{ 
                opacity: open ? 1 : 0,
                color: active ? 'primary.contrastText' : 'inherit',
              }} 
            />
          )}
          {active && (
            <Box
              component="span"
              sx={{
                width: 4,
                height: '100%',
                bgcolor: active ? 'primary.light' : 'transparent',
                position: 'absolute',
                left: -10,
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
                transition: (theme) => theme.transitions.create('background-color'),
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
    );
  };

  const drawerContent = (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      py: 2,
      backgroundColor: theme.palette.background.paper,
    }}>
      <Box sx={{ 
        px: 3, 
        display: 'flex', 
        alignItems: 'center', 
        mb: 4,
        height: 48,
      }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '0.5px',
            color: theme.palette.primary.main,
            textTransform: 'uppercase',
          }}
        >
          Rangmanch
        </Typography>
      </Box>
      
      <Box sx={{ px: 2, mb: 2 }}>
        <Typography 
          variant="subtitle2"
          sx={{ 
            color: theme.palette.text.secondary,
            fontWeight: 500,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            px: 1,
          }}
        >
          Main
        </Typography>
      </Box>
      
      <List sx={{ px: 2 }}>
        {navigationItems.map((item) => renderNavItem(item))}
      </List>
      
      <Box sx={{ flexGrow: 1 }} />
      
      <Divider sx={{ my: 2, mx: 3, opacity: 0.6 }} />
      
      <Box sx={{ px: 2, mb: 1, mt: 1 }}>
        <Typography 
          variant="subtitle2"
          sx={{ 
            color: theme.palette.text.secondary,
            fontWeight: 500,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            px: 1,
          }}
        >
          Account
        </Typography>
      </Box>
      
      <List sx={{ px: 2 }}>
        {userItems.map((item) => renderNavItem(item))}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => onClose()}
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <StyledDrawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            },
          }}
        >
          {drawerContent}
        </StyledDrawer>
      </>
    );
  }

  return (
    <StyledDrawer 
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      {drawerContent}
    </StyledDrawer>
  );
};

export default Sidebar;