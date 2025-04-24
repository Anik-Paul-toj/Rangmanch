import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

const projects = [
  { name: 'Company Blog Series', progress: 60 },
  { name: 'Email Newsletter Campaign', progress: 70 },
  { name: 'Social Media Content Calendar', progress: 100 },
  { name: 'Product Launch Scripts', progress: 100 },
  { name: 'YouTube Transcripts', progress: 80 },
  { name: 'Podcast Show Notes', progress: 0, status: 'cancelled' },
];

const ContentProjects: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Content Projects
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {projects.map((project, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">{project.name}</Typography>
                <Typography variant="body2" color={project.status === 'cancelled' ? 'error' : 'text.secondary'}>
                  {project.status === 'cancelled' ? 'Cancelled' : `${project.progress}%`}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={project.progress}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: project.status === 'cancelled' ? 'error.light' : 'rgba(157, 78, 221, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: project.status === 'cancelled' ? 'error.main' : '#9d4edd',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContentProjects; 