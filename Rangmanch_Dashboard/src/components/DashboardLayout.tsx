import React, { useState, useEffect } from 'react';
import { Box, Container, useMediaQuery, useTheme, Toolbar, CssBaseline } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [currentSection, setCurrentSection] = useState('dashboard');

  // Set the current section based on the current path
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/' || path === '/dashboard') {
      setCurrentSection('dashboard');
    } else if (path === '/home') {
      setCurrentSection('home');
    } else if (path === '/content-library') {
      setCurrentSection('content-library');
    } else if (path === '/analytics') {
      setCurrentSection('analytics');
    } else if (path === '/audience-insights') {
      setCurrentSection('audience-insights');
    } else if (path === '/profile') {
      setCurrentSection('profile');
    } else if (path === '/login') {
      setCurrentSection('sign-out');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (isMobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh', 
      bgcolor: theme.palette.background.default,
      overflow: 'hidden'
    }}>
      <CssBaseline />
      <Header onSidebarToggle={handleSidebarToggle} />
      <Sidebar 
        open={sidebarOpen}
        onClose={handleSidebarToggle}
        onSectionChange={handleSectionChange}
        currentSection={currentSection}
        isMobile={isMobile}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: 0,
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar />
        <Container 
          maxWidth="xl" 
          sx={{ 
            py: 3,
            px: { xs: 2, sm: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ 
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: '0 0 15px rgba(0,0,0,0.05)',
            p: { xs: 2, sm: 3 },
            flex: 1,
            overflow: 'auto',
          }}>
            {children}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout; 