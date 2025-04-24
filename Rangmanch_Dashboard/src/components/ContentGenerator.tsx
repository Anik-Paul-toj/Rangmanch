import React, { useState } from 'react';
import {
  Box,
  Card,
  TextField,
  Typography,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
} from '@mui/material';
import { Create as CreateIcon } from '@mui/icons-material';
import AnimatedTransition from './AnimatedTransition';
import AnimatedButton from './AnimatedButton';

const ContentGenerator: React.FC = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [contentType, setContentType] = useState('blog');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState(500);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <AnimatedTransition inProp={isVisible} type="grow">
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
            <CreateIcon />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Smart Content Generator
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Content Type</InputLabel>
              <Select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                label="Content Type"
              >
                <MenuItem value="blog">Blog Post</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="social">Social Media</MenuItem>
                <MenuItem value="script">Video Script</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Tone</InputLabel>
              <Select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                label="Tone"
              >
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
                <MenuItem value="formal">Formal</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <Typography gutterBottom>Content Length (words)</Typography>
            <Slider
              value={length}
              onChange={(_, value) => setLength(value as number)}
              min={100}
              max={2000}
              step={100}
              marks
              valueLabelDisplay="auto"
              sx={{
                '& .MuiSlider-thumb': {
                  bgcolor: theme.palette.primary.main,
                },
                '& .MuiSlider-track': {
                  bgcolor: theme.palette.primary.main,
                },
              }}
            />
          </Box>

          <TextField
            multiline
            rows={4}
            placeholder="Enter your content brief here..."
            fullWidth
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <AnimatedButton
              variant="outlined"
              animation="shine"
              color="primary"
              fullWidth
            >
              Save Draft
            </AnimatedButton>
            
            <AnimatedButton
              variant="contained"
              animation="shine"
              color="primary"
              fullWidth
              disabled={isGenerating}
              onClick={handleGenerate}
            >
              {isGenerating ? 'Generating...' : 'Generate Content'}
            </AnimatedButton>
          </Box>
        </Box>
      </Card>
    </AnimatedTransition>
  );
};

export default ContentGenerator; 