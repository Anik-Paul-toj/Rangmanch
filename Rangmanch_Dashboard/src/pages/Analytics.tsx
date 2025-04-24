import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  ButtonGroup, 
  Button,
  Tab,
  Tabs,
  useTheme,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
} from '@mui/icons-material';
import { Line, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement 
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Analytics: React.FC = () => {
  const theme = useTheme();
  const [dateRange, setDateRange] = useState('last30days');
  const [selectedTab, setSelectedTab] = useState(0);

  // Mock data for charts
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  
  const viewsData = {
    labels,
    datasets: [
      {
        label: 'Page Views',
        data: [3500, 5200, 4800, 6500, 8200, 7800, 9500],
        borderColor: theme.palette.primary.main,
        backgroundColor: `${theme.palette.primary.main}20`,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Unique Visitors',
        data: [2200, 3100, 2800, 4000, 5100, 4900, 6200],
        borderColor: theme.palette.secondary.main,
        backgroundColor: `${theme.palette.secondary.main}20`,
        fill: true,
        tension: 0.4,
      },
    ],
  };
  
  const engagementData = {
    labels,
    datasets: [
      {
        label: 'Avg. Time on Page (min)',
        data: [2.5, 2.8, 3.2, 3.5, 4.0, 3.8, 4.2],
        borderColor: theme.palette.success.main,
        backgroundColor: `${theme.palette.success.main}20`,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Bounce Rate (%)',
        data: [65, 60, 55, 50, 45, 48, 42],
        borderColor: theme.palette.error.main,
        backgroundColor: `${theme.palette.error.main}20`,
        fill: true,
        tension: 0.4,
      },
    ],
  };
  
  const contentPerformanceData = {
    labels,
    datasets: [
      {
        label: 'Blog Posts',
        data: [12, 19, 15, 22, 25, 28, 30],
        backgroundColor: theme.palette.primary.main,
      },
      {
        label: 'Videos',
        data: [8, 12, 18, 15, 22, 25, 28],
        backgroundColor: theme.palette.secondary.main,
      },
      {
        label: 'Infographics',
        data: [5, 8, 10, 12, 15, 18, 20],
        backgroundColor: theme.palette.success.main,
      },
    ],
  };
  
  const conversionData = {
    labels,
    datasets: [
      {
        label: 'Newsletter Signups',
        data: [150, 220, 185, 280, 320, 350, 420],
        backgroundColor: theme.palette.info.main,
      },
      {
        label: 'Product Purchases',
        data: [45, 65, 80, 95, 110, 130, 150],
        backgroundColor: theme.palette.success.main,
      },
    ],
  };
  
  // Mock data for top performing content
  const topContent = [
    {
      id: 1,
      title: 'How to Optimize Your Content Strategy',
      type: 'Blog Post',
      views: 12500,
      engagement: '4:25',
      conversionRate: '3.2%',
      trend: 'up',
    },
    {
      id: 2,
      title: 'Social Media Marketing in 2023',
      type: 'Video',
      views: 9800,
      engagement: '5:15',
      conversionRate: '4.5%',
      trend: 'up',
    },
    {
      id: 3,
      title: 'SEO Techniques for Higher Rankings',
      type: 'Blog Post',
      views: 8200,
      engagement: '3:45',
      conversionRate: '2.8%',
      trend: 'down',
    },
    {
      id: 4,
      title: 'Content Creation Tools Review',
      type: 'Infographic',
      views: 7500,
      engagement: '2:30',
      conversionRate: '2.1%',
      trend: 'up',
    },
    {
      id: 5,
      title: 'Email Marketing Best Practices',
      type: 'Blog Post',
      views: 6900,
      engagement: '3:10',
      conversionRate: '3.7%',
      trend: 'down',
    },
  ];
  
  // Mock data for summary stats
  const summaryStats = [
    {
      title: 'Total Views',
      value: '175,320',
      change: '+15.2%',
      trend: 'up',
    },
    {
      title: 'Avg. Engagement',
      value: '3:45',
      change: '+8.7%',
      trend: 'up',
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+2.1%',
      trend: 'up',
    },
    {
      title: 'Bounce Rate',
      value: '42%',
      change: '-5.3%',
      trend: 'down',
    },
  ];
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme.palette.text.primary,
          font: {
            size: 12,
          }
        }
      },
    },
    scales: {
      y: {
        ticks: {
          color: theme.palette.text.secondary,
        },
        grid: {
          color: `${theme.palette.divider}40`,
        },
      },
      x: {
        ticks: {
          color: theme.palette.text.secondary,
        },
        grid: {
          color: `${theme.palette.divider}40`,
        },
      },
    },
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

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
        <Typography variant="h4" component="h1">
          Analytics Dashboard
        </Typography>
        
        <ButtonGroup variant="outlined">
          <Button 
            onClick={() => setDateRange('last7days')}
            variant={dateRange === 'last7days' ? 'contained' : 'outlined'}
          >
            Last 7 Days
          </Button>
          <Button 
            onClick={() => setDateRange('last30days')}
            variant={dateRange === 'last30days' ? 'contained' : 'outlined'}
          >
            Last 30 Days
          </Button>
          <Button 
            onClick={() => setDateRange('last90days')}
            variant={dateRange === 'last90days' ? 'contained' : 'outlined'}
          >
            Last 90 Days
          </Button>
        </ButtonGroup>
      </Box>
      
      {/* Summary Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {summaryStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mr: 1 }}>
                    {stat.value}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      color: stat.trend === 'up' ? theme.palette.success.main : theme.palette.error.main
                    }}
                  >
                    {stat.trend === 'up' ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                      {stat.change}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Tab Navigation */}
      <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Overview" />
          <Tab label="Content Performance" />
          <Tab label="Audience" />
          <Tab label="Conversions" />
        </Tabs>
      </Box>
      
      {/* Tab Content */}
      <Box sx={{ mb: 4 }}>
        {/* Overview Tab */}
        {selectedTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Traffic Overview
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Line options={chartOptions} data={viewsData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Engagement Metrics
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Line options={chartOptions} data={engagementData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Top Performing Content
                  </Typography>
                  <Box sx={{ overflowX: 'auto' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Title</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell align="right">Views</TableCell>
                          <TableCell align="right">Avg. Engagement</TableCell>
                          <TableCell align="right">Conversion Rate</TableCell>
                          <TableCell align="right">Trend</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {topContent.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                              {item.title}
                            </TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell align="right">{item.views.toLocaleString()}</TableCell>
                            <TableCell align="right">{item.engagement}</TableCell>
                            <TableCell align="right">{item.conversionRate}</TableCell>
                            <TableCell align="right">
                              {item.trend === 'up' ? (
                                <TrendingUp sx={{ color: theme.palette.success.main }} />
                              ) : (
                                <TrendingDown sx={{ color: theme.palette.error.main }} />
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        
        {/* Content Performance Tab */}
        {selectedTab === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Content Performance by Type
                  </Typography>
                  <Box sx={{ height: 350 }}>
                    <Bar options={chartOptions} data={contentPerformanceData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        
        {/* Audience Tab */}
        {selectedTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Audience Demographics
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Audience analytics data will be displayed here.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        
        {/* Conversions Tab */}
        {selectedTab === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Conversion Metrics
                  </Typography>
                  <Box sx={{ height: 350 }}>
                    <Bar options={chartOptions} data={conversionData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Analytics; 