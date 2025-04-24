import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  IconButton, 
  Chip, 
  TextField, 
  InputAdornment,
  Button,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon,
} from '@mui/icons-material';
import AnimatedButton from '../components/AnimatedButton';

// Mock content data
const contentItems = [
  {
    id: 1,
    title: 'Understanding Your Audience',
    type: 'Blog Post',
    thumbnail: 'https://source.unsplash.com/random/300x200?blog',
    date: '2023-05-15',
    status: 'Published',
    views: 1250,
  },
  {
    id: 2,
    title: 'Content Marketing Strategies',
    type: 'Video',
    thumbnail: 'https://source.unsplash.com/random/300x200?marketing',
    date: '2023-06-22',
    status: 'Draft',
    views: 0,
  },
  {
    id: 3,
    title: 'SEO Best Practices',
    type: 'Infographic',
    thumbnail: 'https://source.unsplash.com/random/300x200?seo',
    date: '2023-04-30',
    status: 'Published',
    views: 3420,
  },
  {
    id: 4,
    title: 'Social Media Growth Hacks',
    type: 'Blog Post',
    thumbnail: 'https://source.unsplash.com/random/300x200?social',
    date: '2023-07-05',
    status: 'Scheduled',
    views: 0,
  },
  {
    id: 5,
    title: 'Creating Engaging Reels',
    type: 'Video',
    thumbnail: 'https://source.unsplash.com/random/300x200?video',
    date: '2023-06-10',
    status: 'Published',
    views: 5670,
  },
  {
    id: 6,
    title: 'Analytics Deep Dive',
    type: 'Case Study',
    thumbnail: 'https://source.unsplash.com/random/300x200?analytics',
    date: '2023-07-18',
    status: 'Draft',
    views: 0,
  },
];

const ContentLibrary: React.FC = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [itemAnchorEl, setItemAnchorEl] = useState<null | HTMLElement>(null);
  
  // Filter states
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  
  // Sort state
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  
  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };
  
  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchorEl(event.currentTarget);
  };
  
  const handleItemMenuClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setSelectedItem(id);
    setItemAnchorEl(event.currentTarget);
  };
  
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };
  
  const handleSortClose = () => {
    setSortAnchorEl(null);
  };
  
  const handleItemMenuClose = () => {
    setItemAnchorEl(null);
    setSelectedItem(null);
  };
  
  const handleCreateContent = () => {
    console.log('Create new content');
  };
  
  // Filter the content items based on search query and filters
  const filteredItems = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContentType = selectedContentTypes.length === 0 || selectedContentTypes.includes(item.type);
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(item.status);
    
    return matchesSearch && matchesContentType && matchesStatus;
  });
  
  // Sort the filtered items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'date') {
      return sortDirection === 'asc' 
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'title') {
      return sortDirection === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortBy === 'views') {
      return sortDirection === 'asc'
        ? a.views - b.views
        : b.views - a.views;
    }
    return 0;
  });
  
  // Get all unique content types
  const contentTypes = Array.from(new Set(contentItems.map(item => item.type)));
  
  // Get all unique statuses
  const statuses = Array.from(new Set(contentItems.map(item => item.status)));
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return theme.palette.success.main;
      case 'Draft':
        return theme.palette.warning.main;
      case 'Scheduled':
        return theme.palette.info.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box>
      <Box sx={{ 
        mb: 4, 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', sm: 'center' }
      }}>
        <Typography variant="h4" component="h1">
          Content Library
        </Typography>
        
        <AnimatedButton 
          variant="contained" 
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleCreateContent}
          animation="shine"
        >
          Create Content
        </AnimatedButton>
      </Box>
      
      <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
        <TextField
          placeholder="Search content..."
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1 }}
        />
        
        <Button 
          variant="outlined" 
          startIcon={<FilterListIcon />}
          onClick={handleFilterClick}
        >
          Filter
        </Button>
        
        <Button 
          variant="outlined" 
          startIcon={<SortIcon />}
          onClick={handleSortClick}
        >
          Sort
        </Button>
        
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem disabled>
            <Typography variant="subtitle2">Content Type</Typography>
          </MenuItem>
          
          {contentTypes.map(type => (
            <MenuItem key={type} onClick={() => {
              if (selectedContentTypes.includes(type)) {
                setSelectedContentTypes(selectedContentTypes.filter(t => t !== type));
              } else {
                setSelectedContentTypes([...selectedContentTypes, type]);
              }
            }}>
              <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'space-between',
                color: selectedContentTypes.includes(type) ? theme.palette.primary.main : 'inherit'
              }}>
                {type}
                {selectedContentTypes.includes(type) && '✓'}
              </Box>
            </MenuItem>
          ))}
          
          <MenuItem sx={{ borderTop: `1px solid ${theme.palette.divider}` }} disabled>
            <Typography variant="subtitle2">Status</Typography>
          </MenuItem>
          
          {statuses.map(status => (
            <MenuItem key={status} onClick={() => {
              if (selectedStatuses.includes(status)) {
                setSelectedStatuses(selectedStatuses.filter(s => s !== status));
              } else {
                setSelectedStatuses([...selectedStatuses, status]);
              }
            }}>
              <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'space-between',
                color: selectedStatuses.includes(status) ? theme.palette.primary.main : 'inherit'
              }}>
                {status}
                {selectedStatuses.includes(status) && '✓'}
              </Box>
            </MenuItem>
          ))}
        </Menu>
        
        <Menu
          anchorEl={sortAnchorEl}
          open={Boolean(sortAnchorEl)}
          onClose={handleSortClose}
        >
          <MenuItem onClick={() => {
            setSortBy('date');
            setSortDirection('desc');
            handleSortClose();
          }}>
            <Box sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'space-between',
              color: sortBy === 'date' && sortDirection === 'desc' ? theme.palette.primary.main : 'inherit'
            }}>
              Newest First
              {sortBy === 'date' && sortDirection === 'desc' && '✓'}
            </Box>
          </MenuItem>
          
          <MenuItem onClick={() => {
            setSortBy('date');
            setSortDirection('asc');
            handleSortClose();
          }}>
            <Box sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'space-between',
              color: sortBy === 'date' && sortDirection === 'asc' ? theme.palette.primary.main : 'inherit'
            }}>
              Oldest First
              {sortBy === 'date' && sortDirection === 'asc' && '✓'}
            </Box>
          </MenuItem>
          
          <MenuItem onClick={() => {
            setSortBy('title');
            setSortDirection('asc');
            handleSortClose();
          }}>
            <Box sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'space-between',
              color: sortBy === 'title' && sortDirection === 'asc' ? theme.palette.primary.main : 'inherit'
            }}>
              Title (A-Z)
              {sortBy === 'title' && sortDirection === 'asc' && '✓'}
            </Box>
          </MenuItem>
          
          <MenuItem onClick={() => {
            setSortBy('views');
            setSortDirection('desc');
            handleSortClose();
          }}>
            <Box sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'space-between',
              color: sortBy === 'views' && sortDirection === 'desc' ? theme.palette.primary.main : 'inherit'
            }}>
              Most Views
              {sortBy === 'views' && sortDirection === 'desc' && '✓'}
            </Box>
          </MenuItem>
        </Menu>
      </Box>
      
      <Grid container spacing={3}>
        {sortedItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.15)`,
              },
            }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={item.thumbnail}
                  alt={item.title}
                />
                <Chip 
                  label={item.type}
                  size="small"
                  sx={{ 
                    position: 'absolute', 
                    top: 10, 
                    left: 10,
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                  }}
                />
                <Chip 
                  label={item.status}
                  size="small"
                  sx={{ 
                    position: 'absolute', 
                    top: 10, 
                    right: 10,
                    bgcolor: `${getStatusColor(item.status)}80`,
                    color: 'white',
                  }}
                />
                <IconButton 
                  sx={{ 
                    position: 'absolute', 
                    bottom: 5, 
                    right: 5,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    }
                  }}
                  onClick={(e) => handleItemMenuClick(e, item.id)}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="h2" gutterBottom noWrap>
                  {item.title}
                </Typography>
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(item.date).toLocaleDateString()}
                  </Typography>
                  {item.status === 'Published' && (
                    <Typography variant="body2" color="text.secondary">
                      {item.views.toLocaleString()} views
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Menu
        anchorEl={itemAnchorEl}
        open={Boolean(itemAnchorEl)}
        onClose={handleItemMenuClose}
      >
        <MenuItem onClick={handleItemMenuClose}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleItemMenuClose}>
          Duplicate
        </MenuItem>
        <MenuItem onClick={handleItemMenuClose}>
          Share
        </MenuItem>
        <MenuItem onClick={handleItemMenuClose} sx={{ color: theme.palette.error.main }}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ContentLibrary; 