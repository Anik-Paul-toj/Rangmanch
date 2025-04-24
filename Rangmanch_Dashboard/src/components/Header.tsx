import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  Badge,
  Typography,
  useTheme,
  styled,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';

// Styled anchor component
const StyledAnchor = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  textDecoration: 'none',
  color: 'inherit',
}));

interface HeaderProps {
  onSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const notifications = [
    { id: 1, content: 'Your new video generated 1K views', time: '2 min ago' },
    { id: 2, content: 'New subscriber: John Doe', time: '1 hour ago' },
    { id: 3, content: 'Content scheduled for tomorrow', time: '5 hours ago' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        {onSidebarToggle && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onSidebarToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            display: { xs: 'none', sm: 'block' },
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            mr: 2
          }}
        >
          Rangmanch
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            px: 2,
            mr: 2,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.08)',
            },
          }}
        >
          <SearchIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{ 
              color: theme.palette.text.primary,
              '& .MuiInputBase-input': {
                py: 1,
              },
            }}
          />
        </Box>

        <IconButton 
          sx={{ mr: 2 }}
          onClick={handleNotificationClick}
        >
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Menu
          anchorEl={notificationAnchorEl}
          open={Boolean(notificationAnchorEl)}
          onClose={handleNotificationClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              width: 320,
              bgcolor: theme.palette.background.paper,
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: theme.palette.background.paper,
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
            <Typography variant="h6">Notifications</Typography>
          </Box>
          {notifications.map((notification) => (
            <MenuItem key={notification.id} sx={{ py: 1.5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1">{notification.content}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {notification.time}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'center', borderTop: `1px solid ${theme.palette.divider}` }}>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              View all notifications
            </Typography>
          </Box>
        </Menu>

        <IconButton sx={{ mr: 2 }}>
          <SettingsIcon />
        </IconButton>

        <IconButton onClick={handleProfileClick}>
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              cursor: 'pointer',
            }}
          >
            A
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: theme.palette.background.paper,
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <StyledAnchor href="/#/profile" onClick={handleClose}>
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              Profile
            </StyledAnchor>
          </MenuItem>
          <MenuItem>
            <StyledAnchor href="/#/settings" onClick={handleClose}>
              <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
              Settings
            </StyledAnchor>
          </MenuItem>
          <MenuItem sx={{ color: theme.palette.error.main }}>
            <StyledAnchor href="/#/login" onClick={handleClose} sx={{ color: 'inherit' }}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Sign out
            </StyledAnchor>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 