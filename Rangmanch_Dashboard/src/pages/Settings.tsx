import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Switch, 
  FormControlLabel, 
  Paper, 
  Divider,
  Button,
  useTheme
} from '@mui/material';

const Settings: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.text.primary }}>
        Settings
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Configure your account and application preferences
      </Typography>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', bgcolor: theme.palette.background.paper }}>
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ mt: 3 }}>
              <FormControlLabel 
                control={<Switch defaultChecked color="primary" />} 
                label="Email notifications" 
              />
            </Box>
            
            <Box sx={{ mt: 2 }}>
              <FormControlLabel 
                control={<Switch />} 
                label="SMS notifications" 
              />
            </Box>
            
            <Box sx={{ mt: 2 }}>
              <FormControlLabel 
                control={<Switch defaultChecked />} 
                label="Browser notifications" 
              />
            </Box>
            
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ bgcolor: theme.palette.primary.main }}
              >
                Save Changes
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', bgcolor: theme.palette.background.paper }}>
            <Typography variant="h6" gutterBottom>
              Application Settings
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ mt: 3 }}>
              <FormControlLabel 
                control={<Switch defaultChecked />} 
                label="Dark Mode" 
              />
            </Box>
            
            <Box sx={{ mt: 2 }}>
              <FormControlLabel 
                control={<Switch defaultChecked />} 
                label="Auto-save drafts" 
              />
            </Box>
            
            <Box sx={{ mt: 2 }}>
              <FormControlLabel 
                control={<Switch />} 
                label="Show analytics on dashboard" 
              />
            </Box>
            
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ bgcolor: theme.palette.primary.main }}
              >
                Apply Settings
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings; 