import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  useTheme,
  TextField,
  Chip,
  Grid,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Transform as TransformIcon,
  ContentCopy as ContentCopyIcon,
  AutoAwesome as AutoAwesomeIcon,
} from '@mui/icons-material';
import AnimatedTransition from './AnimatedTransition';
import AnimatedButton from './AnimatedButton';

interface ContentFormat {
  id: string;
  label: string;
  description: string;
  icon: React.ReactElement;
}

const contentFormats: ContentFormat[] = [
  {
    id: 'social',
    label: 'Social Media Post',
    description: 'Transform into engaging social media content',
    icon: <AutoAwesomeIcon />,
  },
  {
    id: 'blog',
    label: 'Blog Article',
    description: 'Convert into a detailed blog post',
    icon: <ContentCopyIcon />,
  },
  {
    id: 'newsletter',
    label: 'Newsletter',
    description: 'Adapt for email newsletter format',
    icon: <TransformIcon />,
  },
];

const ContentRepurposer: React.FC = () => {
  const theme = useTheme();
  const [selectedFormat, setSelectedFormat] = useState('');
  const [content, setContent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTransform = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
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
            <TransformIcon />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Content Repurposer
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Original Content"
              variant="outlined"
              placeholder="Paste your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Target Format</InputLabel>
              <Select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                label="Target Format"
              >
                {contentFormats.map((format) => (
                  <MenuItem key={format.id} value={format.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {format.icon}
                      <Box>
                        <Typography variant="body1">{format.label}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {format.description}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <AnimatedButton
              variant="contained"
              animation="shine"
              color="primary"
              fullWidth
              disabled={!content || !selectedFormat || isProcessing}
              onClick={handleTransform}
              startIcon={<AutoAwesomeIcon />}
            >
              {isProcessing ? 'Transforming...' : 'Transform Content'}
            </AnimatedButton>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                bgcolor: theme.palette.background.default,
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Transformation History
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {contentFormats.map((format) => (
                  <Chip
                    key={format.id}
                    label={format.label}
                    icon={format.icon}
                    variant="outlined"
                    onClick={() => setSelectedFormat(format.id)}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </AnimatedTransition>
  );
};

export default ContentRepurposer; 