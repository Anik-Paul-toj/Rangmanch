import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  growth: string;
  icon: React.ReactElement<SvgIconProps>;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, growth, icon }) => {
  const theme = useTheme();
  const isPositive = growth.startsWith('+');

  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.paper,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent sx={{ height: '100%', p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: 'rgba(157, 78, 221, 0.1)',
              color: theme.palette.primary.main,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {React.cloneElement(icon, { sx: { fontSize: 24 } })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: isPositive ? theme.palette.success.main : theme.palette.error.main,
              bgcolor: isPositive ? 'rgba(84, 214, 44, 0.16)' : 'rgba(255, 72, 66, 0.16)',
              px: 1,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            {isPositive ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
            <Typography variant="body2" fontWeight={600}>
              {growth}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" component="div" sx={{ mb: 0.5, fontWeight: 700 }}>
            {value}
            {unit && (
              <Typography
                component="span"
                variant="body2"
                sx={{ ml: 0.5, color: theme.palette.text.secondary, fontWeight: 400 }}
              >
                {unit}
              </Typography>
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard; 