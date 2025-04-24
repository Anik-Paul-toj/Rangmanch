import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EngagementChart: React.FC = () => {
  const theme = useTheme();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Engagement',
        data: [4000, 3000, 5000, 4800, 5600, 6200],
        borderColor: theme.palette.primary.main,
        backgroundColor: 'rgba(157, 78, 221, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: theme.palette.primary.main,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'SEO Performance',
        data: [2400, 2800, 3200, 3800, 4200, 4600],
        borderColor: theme.palette.secondary.main,
        backgroundColor: 'rgba(255, 158, 0, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: theme.palette.secondary.main,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme.palette.text.secondary,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: theme.palette.text.secondary,
        },
      },
      y: {
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          color: theme.palette.text.secondary,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.paper,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Content Performance
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Engagement and SEO metrics over time
          </Typography>
        </Box>
        <Box sx={{ height: 360, width: '100%' }}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EngagementChart; 