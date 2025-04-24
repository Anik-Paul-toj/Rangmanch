import React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import ContentChart from '../components/ContentChart';
import EngagementChart from '../components/EngagementChart';
import MiddleMetrics from '../components/MiddleMetrics';
import ContentRepurposer from '../components/ContentRepurposer';
import SeoOptimizer from '../components/SeoOptimizer';
import TargetAudienceAnalyzer from '../components/TargetAudienceAnalyzer';
import AnimatedButton from '../components/AnimatedButton';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box sx={{ 
        mb: 4, 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', sm: 'center' }
      }}>
        <Typography variant="h4" component="h1" gutterBottom={isMobile}>
          Dashboard Overview
        </Typography>
        <AnimatedButton 
          variant="contained" 
          color="primary"
          onClick={() => console.log('Refresh clicked')}
          animation="shine"
          fullWidth={isMobile}
        >
          Refresh Data
        </AnimatedButton>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MiddleMetrics />
        </Grid>
        
        <Grid item xs={12} lg={6}>
          <ContentChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <EngagementChart />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <TargetAudienceAnalyzer />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ContentRepurposer />
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <SeoOptimizer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;