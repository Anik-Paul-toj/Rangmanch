import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  useTheme,
  TextField,
  LinearProgress,
  Chip,
  Grid,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon,
  Info as InfoIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import AnimatedTransition from './AnimatedTransition';
import AnimatedButton from './AnimatedButton';

interface KeywordSuggestion {
  keyword: string;
  score: number;
  volume: string;
  difficulty: number;
}

const SeoOptimizer: React.FC = () => {
  const theme = useTheme();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [keywords, setKeywords] = useState<KeywordSuggestion[]>([
    { keyword: 'digital marketing', score: 92, volume: '10K-100K', difficulty: 65 },
    { keyword: 'content strategy', score: 88, volume: '1K-10K', difficulty: 45 },
    { keyword: 'SEO optimization', score: 85, volume: '1K-10K', difficulty: 55 },
    { keyword: 'marketing analytics', score: 78, volume: '1K-10K', difficulty: 70 },
  ]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 40) return theme.palette.success.main;
    if (difficulty < 70) return theme.palette.warning.main;
    return theme.palette.error.main;
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
            <SearchIcon />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            SEO Optimizer
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Enter your target keyword"
            variant="outlined"
            placeholder="e.g., digital marketing strategy"
            sx={{ mb: 2 }}
          />
          <AnimatedButton
            variant="contained"
            animation="shine"
            color="primary"
            fullWidth
            disabled={isAnalyzing}
            onClick={handleAnalyze}
            startIcon={<TrendingUpIcon />}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Keywords'}
          </AnimatedButton>
        </Box>

        {isAnalyzing && <LinearProgress sx={{ mb: 3 }} />}

        <Grid container spacing={2}>
          {keywords.map((keyword) => (
            <Grid item xs={12} key={keyword.keyword}>
              <Box
                sx={{
                  p: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    {keyword.keyword}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip
                      label={`Score: ${keyword.score}`}
                      size="small"
                      color={keyword.score >= 85 ? 'success' : 'warning'}
                    />
                    <Chip
                      label={`Volume: ${keyword.volume}`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Tooltip title="Difficulty Score">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: getDifficultyColor(keyword.difficulty) }}
                      >
                        {keyword.difficulty}%
                      </Typography>
                      <InfoIcon fontSize="small" sx={{ opacity: 0.7 }} />
                    </Box>
                  </Tooltip>
                  <IconButton size="small" color="primary">
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </AnimatedTransition>
  );
};

export default SeoOptimizer; 