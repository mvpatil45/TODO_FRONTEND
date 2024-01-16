import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, Divider, Stack } from '@mui/material';
import ReactPlayer from 'react-player';

export default function VideoCards(props) {
  console.log("VIDEO DATA",props.videos)
  return (
    <Stack direction={"column"} divider={<Divider orientation="horizontal" flexItem />} spacing={4} alignItems={'center'} mt={2} justifyContent={'center'}>
      {props.videos.map((video, index) => (
        <Card key={index} sx={{ width:"90%",marginBottom: 2 , boxShadow: 5}}>
          <CardActionArea>
            
            <CardMedia
              component='video'
              image={video.url}
              controls={true}
              loop={true}
              style={{ height:props.mobile? '250px':'500px'}} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {video.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {video.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
}
