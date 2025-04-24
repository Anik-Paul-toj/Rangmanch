import React from 'react';
import { Grid } from '@mui/material';
import {
  Article as ArticleIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import ContentMetricsCard from './ContentMetricsCard';

const MiddleMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Total Content',
      value: '2,845',
      subtitle: '12% increase from last month',
      icon: <ArticleIcon />,
      color: '#9d4edd',
      delay: 0.1,
    },
    {
      title: 'Engagement Rate',
      value: '68%',
      subtitle: '5% increase from last month',
      icon: <TrendingUpIcon />,
      color: '#00b4d8',
      delay: 0.2,
    },
    {
      title: 'Audience Reach',
      value: '125K',
      subtitle: '18% increase from last month',
      icon: <PeopleIcon />,
      color: '#4cc9f0',
      delay: 0.3,
    },
    {
      title: 'Social Shares',
      value: '3,642',
      subtitle: '7% increase from last month',
      icon: <ShareIcon />,
      color: '#f72585',
      delay: 0.4,
    },
  ];

  return (
    <Grid container spacing={3}>
      {metrics.map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <ContentMetricsCard {...metric} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MiddleMetrics; 