import React from 'react';
import { Box, Card, Typography, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ContentMetricsCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color,
  delay
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: 2,
        height: '100%',
        animation: `${fadeInUp} 0.6s ease-out forwards`,
        animationDelay: `${delay}s`,
        opacity: 0,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: `${color}15`,
            color: color,
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </Card>
  );
};

export default ContentMetricsCard; 