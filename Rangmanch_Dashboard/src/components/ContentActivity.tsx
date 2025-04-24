import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import {
  Search as SearchIcon,
  People as PeopleIcon,
  ContentCopy as ContentCopyIcon,
  TrendingUp as TrendingUpIcon,
  Tag as TagIcon,
} from '@mui/icons-material';

const activities = [
  { icon: <SearchIcon />, text: 'SEO optimization for 5 content pieces', time: '2 hours ago' },
  { icon: <PeopleIcon />, text: 'Audience analysis completed for Q2', time: '4 hours ago' },
  { icon: <ContentCopyIcon />, text: 'Content repurposed for social media', time: '6 hours ago' },
  { icon: <TrendingUpIcon />, text: 'Performance prediction updated', time: '1 day ago' },
  { icon: <TagIcon />, text: 'Keyword optimization suggestions generated', time: '2 days ago' },
];

const ContentActivity: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Recent Activity
        </Typography>
        <List sx={{ p: 0 }}>
          {activities.map((activity, index) => (
            <ListItem
              key={index}
              sx={{
                p: 1,
                mb: 1,
                bgcolor: 'rgba(157, 78, 221, 0.1)',
                borderRadius: 1,
                '&:last-child': { mb: 0 },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    bgcolor: 'rgba(157, 78, 221, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {React.cloneElement(activity.icon, { color: 'primary', fontSize: 'small' })}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={activity.text}
                secondary={activity.time}
                primaryTypographyProps={{ variant: 'body2' }}
                secondaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ContentActivity; 