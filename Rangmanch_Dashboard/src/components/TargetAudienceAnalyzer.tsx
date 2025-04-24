import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  useTheme,
  CircularProgress,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  Language as LanguageIcon,
  InterestsOutlined as InterestIcon,
} from '@mui/icons-material';
import AnimatedTransition from './AnimatedTransition';
import AnimatedButton from './AnimatedButton';

interface AudienceInsight {
  category: string;
  value: string;
  confidence: number;
}

const TargetAudienceAnalyzer: React.FC = () => {
  const theme = useTheme();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [insights, setInsights] = useState<AudienceInsight[]>([
    { category: 'Age Range', value: '25-34', confidence: 85 },
    { category: 'Interests', value: 'Technology, Business', confidence: 92 },
    { category: 'Location', value: 'Urban Areas', confidence: 78 },
    { category: 'Behavior', value: 'Early Adopters', confidence: 88 },
  ]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <AnimatedTransition inProp={true} type="grow">
      <Card
        sx={{
          p: 3,
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 8px 24px ${theme.palette.primary.main}20`,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              bgcolor: `${theme.palette.primary.main}15`,
              color: theme.palette.primary.main,
              mr: 2,
            }}
          >
            <GroupIcon />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Target Audience Analyzer
          </Typography>
        </Box>

        <List sx={{ mb: 3 }}>
          {insights.map((insight, index) => (
            <React.Fragment key={insight.category}>
              <ListItem>
                <ListItemIcon>
                  {index === 0 && <GroupIcon color="primary" />}
                  {index === 1 && <InterestIcon color="secondary" />}
                  {index === 2 && <LanguageIcon color="info" />}
                  {index === 3 && <TrendingUpIcon color="success" />}
                </ListItemIcon>
                <ListItemText
                  primary={insight.category}
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                      <Typography variant="body2" color="text.secondary">
                        {insight.value}
                      </Typography>
                      <Chip
                        label={`${insight.confidence}% confidence`}
                        size="small"
                        color={insight.confidence > 85 ? 'success' : 'warning'}
                        sx={{ height: 24 }}
                      />
                    </Box>
                  }
                />
              </ListItem>
              {index < insights.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <AnimatedButton
            variant="contained"
            animation="shine"
            color="primary"
            fullWidth
            disabled={isAnalyzing}
            onClick={handleAnalyze}
            startIcon={isAnalyzing ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Audience'}
          </AnimatedButton>
        </Box>
      </Card>
    </AnimatedTransition>
  );
};

export default TargetAudienceAnalyzer; 