import React from 'react';
import { AppBar, Box, Toolbar, styled, Typography, InputBase, Badge, Avatar } from '@mui/material';
import { Mail, Notifications } from '@mui/icons-material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: "0 10px",
    width: "40%",
    borderRadius: theme.shape.borderRadius
}))

const Icons = styled(Box)({
    display:'flex',
    justifyContent:"center",
    gap:"20px"
})

const navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6'><TipsAndUpdatesIcon/>Info Talk</Typography>
                <Search><InputBase  sx={{color:"black"}} placeholder='Text here...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail></Mail>
                    </Badge>
                    <Badge badgeContent={2} color="error">
                    <Notifications></Notifications>
                    </Badge>
                    <Avatar sx={{width:30,height:30}} src='https://material-ui.com/static/images/avatar/6.jpg'/>
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default navbar
