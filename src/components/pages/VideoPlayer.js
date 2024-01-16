import React from 'react'
import Header from '../common/Header'
import VideoCards from '../layout/VideoCards';
import { useMediaQuery } from '@mui/material';
import cuteCat from '../../assets/videos/cute cat playing with yarn.mp4'
import nature from '../../assets/videos/Waterfall Clip.mp4'
import dog from '../../assets/videos/Funny Dog.mp4'
import ocean from '../../assets/videos/sea waves sound effects.mp4'
import city from '../../assets/videos/Starry Nights in the City_ Timelapse Journeys After Dark.mp4'

function VideoPlayer() {
  const videos = [
    {
      title: 'Cute Cat',
      description: 'A cute cat playing with a ball of yarn.',
      url: cuteCat,
    },
    {
      title: 'Nature Beauty',
      description: 'Scenic view of a beautiful landscape with mountains and rivers.',
      url: nature,
    },
    {
      title: 'Funny Dog',
      description: 'A funny dog doing tricks and making people laugh.',
      url: dog,
    },
    {
      title: 'Ocean Waves',
      description: 'Relaxing video of ocean waves crashing on the shore.',
      url: ocean,
    },
    {
      title: 'City Lights',
      description: 'Night view of a city with dazzling lights and skyscrapers.',
      url: city,
    },
  ];
  
  const isScreenInRange = useMediaQuery('(max-width: 425px)');
  return (
    <>
    <Header Heading="VIDEO PLAYER" />
    <VideoCards videos={videos} mobile={isScreenInRange}/>
    </>
  )
}
export default VideoPlayer