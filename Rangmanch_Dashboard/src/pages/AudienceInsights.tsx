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
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Devices as DevicesIcon,
  Language as LanguageIcon,
  QueryStats as QueryStatsIcon,
  Public as PublicIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement,
  ArcElement,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
);

const AudienceInsights: React.FC = () => {
  const theme = useTheme();
  const [dateRange, setDateRange] = useState('last30days');
  const [selectedTab, setSelectedTab] = useState(0);

  // Mock data for audience demographics
  const ageData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        data: [15, 35, 25, 15, 7, 3],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.primary.light,
          theme.palette.secondary.main,
          theme.palette.secondary.light,
          theme.palette.success.main,
          theme.palette.info.main,
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const genderData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        data: [42, 56, 2],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.info.main,
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const locationData = {
    labels: ['United States', 'India', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'Others'],
    datasets: [
      {
        data: [35, 15, 12, 8, 6, 5, 19],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.primary.light,
          theme.palette.secondary.main,
          theme.palette.secondary.light,
          theme.palette.success.main,
          theme.palette.info.main,
          theme.palette.warning.main,
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const deviceData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        data: [65, 30, 5],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.success.main,
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const referrerData = {
    labels: ['Organic Search', 'Social Media', 'Direct', 'Email', 'Referral', 'Other'],
    datasets: [
      {
        label: 'Referrer Sources',
        data: [45, 25, 15, 8, 5, 2],
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.primary.main,
          theme.palette.info.main,
          theme.palette.secondary.main,
          theme.palette.warning.main,
          theme.palette.error.main,
        ],
      },
    ],
  };
  
  const socialMediaData = {
    labels: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok', 'Pinterest'],
    datasets: [
      {
        label: 'Social Media Traffic',
        data: [35, 25, 15, 12, 8, 3, 2],
        backgroundColor: [
          '#E1306C', // Instagram
          '#4267B2', // Facebook
          '#1DA1F2', // Twitter
          '#0077B5', // LinkedIn
          '#FF0000', // YouTube
          '#000000', // TikTok
          '#E60023', // Pinterest
        ],
      },
    ],
  };
  
  // Mock data for top audience segments
  const audienceSegments = [
    {
      id: 1,
      name: 'Tech Enthusiasts',
      size: '32%',
      engagement: 'High',
      interests: ['Technology', 'Gadgets', 'Software'],
      behaviors: ['Early adopters', 'High research before purchase'],
    },
    {
      id: 2,
      name: 'Content Creators',
      size: '28%',
      engagement: 'Very High',
      interests: ['Social Media', 'Design', 'Video Production'],
      behaviors: ['Active commenters', 'Share frequently'],
    },
    {
      id: 3,
      name: 'Marketing Professionals',
      size: '18%',
      engagement: 'Medium',
      interests: ['Marketing', 'SEO', 'Analytics'],
      behaviors: ['Downloaders of resources', 'Return visitors'],
    },
    {
      id: 4,
      name: 'Small Business Owners',
      size: '15%',
      engagement: 'High',
      interests: ['Business Growth', 'Entrepreneurship', 'Strategy'],
      behaviors: ['Long reading time', 'Multiple page views'],
    },
    {
      id: 5,
      name: 'Students',
      size: '7%',
      engagement: 'Medium',
      interests: ['Education', 'Career Development', 'Budget Solutions'],
      behaviors: ['Late night browsing', 'Resource downloaders'],
    },
  ];
  
  // Mock data for top interests
  const topInterests = [
    'Content Marketing',
    'Social Media Strategy',
    'SEO Techniques',
    'Video Production',
    'Growth Hacking',
    'Personal Branding',
    'Email Marketing',
    'Analytics Tools',
    'UX/UI Design',
    'Marketing Automation',
  ];
  
  // Mock data for active times
  const activeTimes = [
    { day: 'Monday', times: ['9am-11am', '1pm-4pm'] },
    { day: 'Tuesday', times: ['10am-12pm', '2pm-5pm'] },
    { day: 'Wednesday', times: ['9am-12pm', '3pm-6pm'] },
    { day: 'Thursday', times: ['10am-1pm', '4pm-7pm'] },
    { day: 'Friday', times: ['11am-2pm', '3pm-5pm'] },
    { day: 'Saturday', times: ['11am-1pm', '3pm-5pm'] },
    { day: 'Sunday', times: ['12pm-3pm', '6pm-9pm'] },
  ];
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: theme.palette.text.primary,
          font: {
            size: 12,
          }
        }
      },
    },
  };
  
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: theme.palette.text.secondary,
        },
        grid: {
          display: false,
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

  // Function to get engagement color
  const getEngagementColor = (level: string) => {
    switch (level) {
      case 'Very High':
        return theme.palette.success.main;
      case 'High':
        return theme.palette.success.light;
      case 'Medium':
        return theme.palette.info.main;
      case 'Low':
        return theme.palette.warning.main;
      default:
        return theme.palette.primary.main;
    }
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
          Audience Insights
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
      
      {/* Tab Navigation */}
      <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Demographics" />
          <Tab label="Behavior" />
          <Tab label="Interests" />
          <Tab label="Traffic Sources" />
        </Tabs>
      </Box>
      
      {/* Tab Content */}
      <Box sx={{ mb: 4 }}>
        {/* Demographics Tab */}
        {selectedTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DevicesIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6">
                      Device Usage
                    </Typography>
                  </Box>
                  <Box sx={{ height: 300 }}>
                    <Doughnut options={chartOptions} data={deviceData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6">
                      Geographic Distribution
                    </Typography>
                  </Box>
                  <Box sx={{ height: 300 }}>
                    <Pie options={chartOptions} data={locationData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Age Distribution
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Doughnut options={chartOptions} data={ageData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Gender Distribution
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Pie options={chartOptions} data={genderData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Top Audience Segments
                  </Typography>
                  <Box sx={{ overflowX: 'auto' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Segment Name</TableCell>
                          <TableCell align="right">Size</TableCell>
                          <TableCell align="center">Engagement</TableCell>
                          <TableCell>Primary Interests</TableCell>
                          <TableCell>Key Behaviors</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {audienceSegments.map((segment) => (
                          <TableRow key={segment.id}>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                              {segment.name}
                            </TableCell>
                            <TableCell align="right">{segment.size}</TableCell>
                            <TableCell align="center">
                              <Chip 
                                label={segment.engagement}
                                size="small"
                                sx={{
                                  bgcolor: `${getEngagementColor(segment.engagement)}40`,
                                  color: getEngagementColor(segment.engagement),
                                  fontWeight: 'bold',
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              {segment.interests.map((interest, index) => (
                                <Chip 
                                  key={index}
                                  label={interest}
                                  size="small"
                                  sx={{ mr: 0.5, mb: 0.5 }}
                                />
                              ))}
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" color="text.secondary">
                                {segment.behaviors.join(', ')}
                              </Typography>
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
        
        {/* Behavior Tab */}
        {selectedTab === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6">
                      Active Times
                    </Typography>
                  </Box>
                  <List>
                    {activeTimes.map((item, index) => (
                      <ListItem key={index} divider={index < activeTimes.length - 1}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                            {item.day.charAt(0)}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.day}
                          secondary={
                            <React.Fragment>
                              <Typography variant="body2" component="span" color="text.primary">
                                Peak times:
                              </Typography>
                              {" " + item.times.join(', ')}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Engagement Patterns
                  </Typography>
                  <Typography variant="body1">
                    This section will display audience engagement patterns.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        
        {/* Interests Tab */}
        {selectedTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <QueryStatsIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6">
                      Top Interests
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {topInterests.map((interest, index) => (
                      <Chip 
                        key={index}
                        label={interest}
                        sx={{ 
                          bgcolor: `${theme.palette.primary.main}20`,
                          color: theme.palette.primary.main,
                          fontSize: '0.9rem',
                          py: 2.5,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        
        {/* Traffic Sources Tab */}
        {selectedTab === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PublicIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6">
                      Traffic Sources
                    </Typography>
                  </Box>
                  <Box sx={{ height: 350 }}>
                    <Bar options={barChartOptions} data={referrerData} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LanguageIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6">
                      Social Media Breakdown
                    </Typography>
                  </Box>
                  <Box sx={{ height: 350 }}>
                    <Bar options={barChartOptions} data={socialMediaData} />
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

export default AudienceInsights; 