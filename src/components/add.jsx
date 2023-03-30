
import { Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, Stack } from '@mui/material'
import { Add as AddIcon, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import React from 'react'
import { Box } from '@mui/system';
import { useState } from "react";

const StyledModal = styled(Modal)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"10px"
})
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: "fixed", bottom: 30, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
      >
        <Box width={400} bgcolor="white" p={3} height={280} borderRadius={5}>
        <Typography variant='h6' color={'grey'} textAlign="center">Create Post</Typography>
        <UserBox>
          <Avatar src="https://material-ui.com/static/images/avatar/6.jpg" >
          </Avatar>
          <Typography fontWeight={500} variant="Span">Kricz Dk</Typography>
        </UserBox>
        <TextField
        sx={{width:"100%"}}
        multiline
        rows={2}
        placeholder="What's on your mind?"
        variant="standard" />
        <Stack direction="row" gap={"10px"}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBack color='error'/>
          <PersonAdd color='grey'/>
        </Stack>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
