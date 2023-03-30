import React from 'react';
import { Avatar, Box, Typography, AvatarGroup, ListItem, ListItemText, List, Divider, ListItemAvatar } from "@mui/material"
const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"} }}>
            <Box position="fixed">
                <Typography variant='h6'>Online Friends</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Fairy"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Jone"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary">
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travisi Howard" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Carl"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        >
                                        to Scott, Jone, Jeffin
                                    </Typography>
                                    {" — Is your place is a forest area..."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/4.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="may"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        >
                                        to Scary, Alex, Jennifer
                                    </Typography>
                                    {" —the weedend is here friends.. "}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/5.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Mrinal"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        >
                                        to Mars, Axar, Patel
                                    </Typography>
                                    {" — hello.... "}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Rightbar;
