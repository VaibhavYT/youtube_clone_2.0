/* eslint-disable no-undef */
import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { Link } from "react-router-dom";
const VideoCard = ({
  video: {
    id: { videoId },
  },
}) => {
  return (
    <Card  //for output of video card
    sx={{
         width:{md:'320px', xs:'100%'},
         boxShadow:'none',
         borderRadius:'0'
    }}
    
    > 
      {/* Link is used in replacement of a tag */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnail?.high?.url}
          alt={snippet?.title}
          sx={{
            height: 180,
            width: 358,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={bold} color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>



        {/* channelId */}
        
        <Link to={snippet.channelId ? `/channel/${snippet.channelId }` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight={bold} color="#FFF">
            {snippet?.channelTitle ||  demoChannelTitle}
             <CheckCircle sx={{
              fontSize : 12,
              color:'gray',
              ml:'5px'
             }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
