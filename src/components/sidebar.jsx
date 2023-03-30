import React from 'react';
import { Box, ListItem,List, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { AccountBox, Groups, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material';

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm:"block"} }}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#homepage">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home Page" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#page">
                            <ListItemIcon>
                                <Pages />
                            </ListItemIcon>
                            <ListItemText primary="Page" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#group">
                            <ListItemIcon>
                                <Groups />
                            </ListItemIcon>
                            <ListItemText primary="Group" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#Marketplace">
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="MarketPlace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#Person">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#settings">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#profile">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" ahref="#profile">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;
