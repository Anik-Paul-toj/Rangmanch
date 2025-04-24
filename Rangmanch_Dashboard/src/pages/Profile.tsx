import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Divider,
  Paper,
  Switch,
  FormControlLabel,
  Alert,
  Stack,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  InputAdornment,
  useTheme,
} from '@mui/material';
import {
  Person as PersonIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  DataUsage as DataUsageIcon,
  Language as LanguageIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Upload as UploadIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const Profile: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [editing, setEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 9876543210',
    role: 'Content Creator',
    bio: 'Creative content producer specializing in cultural storytelling and theatrical presentations. 5+ years experience in digital content creation and performance art promotion.',
    location: 'Mumbai, India',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    joinDate: 'January 2022',
    socialLinks: {
      twitter: '@rahulsharma',
      instagram: '@rahulsharma_creates',
      linkedin: 'rahul-sharma-creates',
    },
    password: '********',
    newPassword: '',
    confirmPassword: '',
  });
  
  // Mock notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    contentUpdates: true,
    commentNotifications: true,
    marketingEmails: false,
  });
  
  // Mock security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30 minutes',
  });
  
  // Mock connected apps
  const connectedApps = [
    { id: 1, name: 'Google Drive', connected: 'Jan 15, 2023', status: 'Active' },
    { id: 2, name: 'Adobe Creative Cloud', connected: 'Mar 22, 2023', status: 'Active' },
    { id: 3, name: 'YouTube', connected: 'Feb 8, 2023', status: 'Inactive' },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleEditToggle = () => {
    if (editing) {
      // Save logic would go here
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
    setEditing(!editing);
  };

  const handleUserDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setUserData({
        ...userData,
        [parent]: {
          ...userData[parent as keyof typeof userData] as Record<string, any>,
          [child]: value
        }
      });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationSettings({
      ...notificationSettings,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecuritySettings({
      ...securitySettings,
      [e.target.name]: e.target.checked,
    });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      
      {saveSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Profile updated successfully!
        </Alert>
      )}
      
      <Paper sx={{ mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab icon={<PersonIcon />} label="Personal Info" />
          <Tab icon={<NotificationsIcon />} label="Notifications" />
          <Tab icon={<SecurityIcon />} label="Security" />
          <Tab icon={<DataUsageIcon />} label="Connected Apps" />
        </Tabs>
        
        {/* Personal Info Tab */}
        {tabValue === 0 && (
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Personal Information</Typography>
              <Button
                startIcon={editing ? <SaveIcon /> : <EditIcon />}
                onClick={handleEditToggle}
                variant={editing ? "contained" : "outlined"}
                color={editing ? "primary" : "secondary"}
              >
                {editing ? "Save Changes" : "Edit Profile"}
              </Button>
            </Box>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  src={userData.avatarUrl}
                  alt={userData.name}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                
                {editing && (
                  <Stack direction="row" spacing={1}>
                    <Button
                      startIcon={<UploadIcon />}
                      size="small"
                      variant="outlined"
                      sx={{ mt: 1 }}
                    >
                      Upload
                    </Button>
                    <Button
                      startIcon={<DeleteIcon />}
                      size="small"
                      color="error"
                      variant="outlined"
                      sx={{ mt: 1 }}
                    >
                      Remove
                    </Button>
                  </Stack>
                )}
                
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Member since
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {userData.joinDate}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={userData.name}
                      onChange={handleUserDataChange}
                      disabled={!editing}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Role"
                      name="role"
                      value={userData.role}
                      onChange={handleUserDataChange}
                      disabled={!editing}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={userData.email}
                      onChange={handleUserDataChange}
                      disabled={!editing}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={userData.phone}
                      onChange={handleUserDataChange}
                      disabled={!editing}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Bio"
                      name="bio"
                      value={userData.bio}
                      onChange={handleUserDataChange}
                      disabled={!editing}
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Location"
                      name="location"
                      value={userData.location}
                      onChange={handleUserDataChange}
                      disabled={!editing}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Social Media Profiles
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Twitter"
                    name="socialLinks.twitter"
                    value={userData.socialLinks.twitter}
                    onChange={handleUserDataChange}
                    disabled={!editing}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TwitterIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Instagram"
                    name="socialLinks.instagram"
                    value={userData.socialLinks.instagram}
                    onChange={handleUserDataChange}
                    disabled={!editing}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <InstagramIcon color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="LinkedIn"
                    name="socialLinks.linkedin"
                    value={userData.socialLinks.linkedin}
                    onChange={handleUserDataChange}
                    disabled={!editing}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkedInIcon sx={{ color: '#0077B5' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
        
        {/* Notifications Tab */}
        {tabValue === 1 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Notification Settings
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Email Notifications"
                  secondary="Receive email notifications for important updates"
                />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    name="emailNotifications"
                    checked={notificationSettings.emailNotifications}
                    onChange={handleNotificationChange}
                    color="primary"
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Push Notifications"
                  secondary="Receive push notifications in your browser"
                />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    name="pushNotifications"
                    checked={notificationSettings.pushNotifications}
                    onChange={handleNotificationChange}
                    color="primary"
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Content Updates"
                  secondary="Get notified when new content is added"
                />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    name="contentUpdates"
                    checked={notificationSettings.contentUpdates}
                    onChange={handleNotificationChange}
                    color="primary"
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Comment Notifications"
                  secondary="Get notified when someone comments on your content"
                />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    name="commentNotifications"
                    checked={notificationSettings.commentNotifications}
                    onChange={handleNotificationChange}
                    color="primary"
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Marketing Emails"
                  secondary="Receive newsletters and promotional emails"
                />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    name="marketingEmails"
                    checked={notificationSettings.marketingEmails}
                    onChange={handleNotificationChange}
                    color="primary"
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary">
                Save Preferences
              </Button>
            </Box>
          </Box>
        )}
        
        {/* Security Tab */}
        {tabValue === 2 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Security Settings
            </Typography>
            
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Change Password
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Current Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={userData.password}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon color="action" />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handlePasswordVisibility}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="New Password"
                      name="newPassword"
                      type={showPassword ? "text" : "password"}
                      value={userData.newPassword}
                      onChange={handleUserDataChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Confirm New Password"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      value={userData.confirmPassword}
                      onChange={handleUserDataChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                      Update Password
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Security Options
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Two-Factor Authentication"
                      secondary="Add an extra layer of security to your account"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        name="twoFactorAuth"
                        checked={securitySettings.twoFactorAuth}
                        onChange={handleSecurityChange}
                        color="primary"
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Login Alerts"
                      secondary="Get notified of new login attempts"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        name="loginAlerts"
                        checked={securitySettings.loginAlerts}
                        onChange={handleSecurityChange}
                        color="primary"
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Session Timeout"
                      secondary={`Your session will expire after ${securitySettings.sessionTimeout} of inactivity`}
                    />
                    <ListItemSecondaryAction>
                      <Button size="small" variant="outlined">
                        Change
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        )}
        
        {/* Connected Apps Tab */}
        {tabValue === 3 && (
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Connected Applications</Typography>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                color="primary"
              >
                Connect New App
              </Button>
            </Box>
            
            <Grid container spacing={2}>
              {connectedApps.map((app) => (
                <Grid item xs={12} md={6} key={app.id}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar 
                            sx={{ 
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              mr: 2
                            }}
                          >
                            <LanguageIcon />
                          </Avatar>
                          <Box>
                            <Typography variant="h6">{app.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              Connected on {app.connected}
                            </Typography>
                          </Box>
                        </Box>
                        <Chip 
                          label={app.status} 
                          color={app.status === 'Active' ? 'success' : 'default'}
                          size="small"
                        />
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          startIcon={<DeleteIcon />}
                        >
                          Disconnect
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Profile; 