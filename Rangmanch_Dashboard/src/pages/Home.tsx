import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  LinearProgress,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Paper,
  Tooltip,
  useTheme
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  MonetizationOn as MonetizationOnIcon,
  ShoppingCart as ShoppingCartIcon,
  MoreVert as MoreVertIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

// Import the same assets but clean up imports
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";

const Home: React.FC = () => {
  const theme = useTheme();

  // Card data for statistics
  const statsCards = [
    {
      title: "Today's Sales",
      value: "$53,000",
      change: "+30%",
      icon: <MonetizationOnIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      color: "primary"
    },
    {
      title: "Today's Users",
      value: "3,200",
      change: "+20%",
      icon: <PeopleIcon sx={{ fontSize: 40, color: theme.palette.success.main }} />,
      color: "success"
    },
    {
      title: "New Clients",
      value: "+1,200",
      change: "-20%",
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.warning.main }} />,
      color: "warning"
    },
    {
      title: "New Orders",
      value: "$13,200",
      change: "+10%",
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: theme.palette.info.main }} />,
      color: "info"
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Soft UI Shopify Version",
      budget: "$14,000",
      progress: 60,
      team: [team1, team2, team3, team4]
    },
    {
      title: "Progress Track",
      budget: "$3,000",
      progress: 10,
      team: [team1, team2]
    },
    {
      title: "Fix Platform Errors",
      budget: "Not Set",
      progress: 100,
      team: [team1, team3]
    },
    {
      title: "Launch new Mobile App",
      budget: "$20,600",
      progress: 100,
      team: [team1, team2]
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Dashboard Overview
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', boxShadow: theme.shadows[2] }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {card.title}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', my: 0.5 }}>
                      {card.value}
                    </Typography>
                  </Box>
                  {card.icon}
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: card.change.startsWith('+') 
                      ? theme.palette.success.main 
                      : theme.palette.error.main 
                  }}
                >
                  {card.change} since last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Projects Section */}
      <Card sx={{ mb: 4, boxShadow: theme.shadows[2] }}>
        <CardHeader
          title="Projects"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Divider />
        <List sx={{ p: 0 }}>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  py: 2,
                  px: 3,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' }
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  width: { xs: '100%', sm: '30%' }, 
                  mb: { xs: 2, sm: 0 } 
                }}>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    {project.title}
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  width: { xs: '100%', sm: '15%' },
                  mb: { xs: 2, sm: 0 }
                }}>
                  <Typography variant="body2" color="text.secondary">
                    Budget: {project.budget}
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  width: { xs: '100%', sm: '30%' },
                  mb: { xs: 2, sm: 0 }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                      {project.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    color={project.progress === 100 ? "success" : "primary"}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                  width: { xs: '100%', sm: '25%' }
                }}>
                  <Box sx={{ display: 'flex' }}>
                    {project.team.map((member, idx) => (
                      <Tooltip key={idx} title="Team Member" placement="top">
                        <Avatar
                          src={member}
                          alt={`team-${idx}`}
                          sx={{
                            width: 32,
                            height: 32,
                            ml: idx !== 0 ? -1 : 0,
                            border: `2px solid ${theme.palette.background.paper}`
                          }}
                        />
                      </Tooltip>
                    ))}
                  </Box>
                </Box>
              </ListItem>
              {index < projects.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Button variant="text" color="primary">
            View All Projects
          </Button>
        </Box>
      </Card>

      {/* Additional Summary Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', boxShadow: theme.shadows[2] }}>
            <CardHeader
              title="Task Overview"
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Daily Tasks
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  87%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={87}
                color="primary"
                sx={{ height: 8, borderRadius: 4, mb: 3 }}
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Weekly Tasks
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  65%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={65}
                color="secondary"
                sx={{ height: 8, borderRadius: 4, mb: 3 }}
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Monthly Goals
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  92%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={92}
                color="success"
                sx={{ height: 8, borderRadius: 4 }}
              />
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', boxShadow: theme.shadows[2] }}>
            <CardHeader
              title="Recent Activity"
              action={
                <IconButton aria-label="settings">
                  <NotificationsIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent>
              <List sx={{ p: 0 }}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={team1} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="New content published"
                    secondary="2 hours ago"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={team2} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Weekly team meeting"
                    secondary="Yesterday"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={team3} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="New subscriber milestone reached"
                    secondary="2 days ago"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={team4} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Content engagement report"
                    secondary="3 days ago"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home; 