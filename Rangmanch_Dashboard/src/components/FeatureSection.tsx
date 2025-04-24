import React from 'react';
import { Box, Card, Typography, useTheme } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import AnimatedButton from './AnimatedButton';

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
  onClick?: () => void;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  icon,
  color,
  delay,
  onClick
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: 2,
        height: '100%',
        cursor: 'pointer',
        animation: `${fadeInRight} 0.6s ease-out forwards`,
        animationDelay: `${delay}s`,
        opacity: 0,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: `0 0 24px ${color}30`,
        },
      }}
      onClick={onClick}
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
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <AnimatedButton
            variant="text"
            animation="shine"
            sx={{ color: color }}
            endIcon={<ArrowForwardIcon />}
          >
            Learn More
          </AnimatedButton>
        </Box>
      </Box>
    </Card>
  );
};

export default FeatureSection; 