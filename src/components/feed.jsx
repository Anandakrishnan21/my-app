import React from 'react';
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Avatar, CardHeader } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material';

const Feed = () => {
    return (
        <Box p={2} flex={4}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} arial-label="pyramid">
                            K
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Kricz Dk"
                    subheader="December 10 2015"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="./images/img2.webp"
                />
                <CardContent >
                    <Typography variant='body2' color="text.secondary">
                        The Egyptian pyramids are ancient masonry structures located in Egypt. Sources cite at least 118 identified "Egyptian" pyramids. Approximately 80 pyramids were built within the Kingdom of Kush, now located in the modern country of Sudan. Of those located in modern Egypt, most were built as tombs for the country's pharaohs and their consorts during the Old and Middle Kingdom periods.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton>
                        <Share></Share>
                    </IconButton>
                </CardActions>
            </Card>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} arial-label="pyramid">
                            K
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Kricz Dk"
                    subheader="January 02 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="./images/img3.jpg"
                />
                <CardContent >
                    <Typography variant='body2' color="text.secondary">
                        Sahara, largest desert in the world. Filling nearly all of northern Africa, it measures approximately 3,000 miles (4,800 km) from east to west and between 800 and 1,200 miles from north to south and has a total area of some 3,320,000 square miles (8,600,000 square km); the actual area varies as the desert expands and contracts over time. The Sahara is bordered in the west by the Atlantic Ocean, in the north by the Atlas Mountains and Mediterranean Sea, in the east by the Red Sea, and in the south by the Sahel—a semiarid region that forms a transitional zone between the Sahara to the north and the belt of humid savannas to the south.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton>
                        <Share></Share>
                    </IconButton>
                </CardActions>
            </Card>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} arial-label="pyramid">
                            K
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Kricz Dk"
                    subheader="January 9 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="./images/img4.jpg"
                />
                <CardContent >
                    <Typography variant='body2' color="text.secondary">
                        A monument is a large structure, usually made of stone, which is built to remind people of an event in history or of a famous person.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton>
                        <Share></Share>
                    </IconButton>
                </CardActions>
            </Card>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} arial-label="pyramid">
                            K
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Kricz Dk"
                    subheader="March 13 2019"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="./images/img6.jpg"
                />
                <CardContent >
                    <Typography variant='body2' color="text.secondary">
                        The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton>
                        <Share></Share>
                    </IconButton>
                </CardActions>
            </Card>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} arial-label="pyramid">
                            K
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Kricz Dk"
                    subheader="December 20 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="./images/img5.jpg"
                />
                <CardContent >
                    <Typography variant='body2' color="text.secondary">
                    The Shore Temple (c. 725 AD) is a complex of temples and shrines that overlooks the shore of the Bay of Bengal. It is located in Mahabalipuram, about 60 kilometres (37 mi) south of Chennai in Tamil Nadu, India.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton>
                        <Share></Share>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Feed;
