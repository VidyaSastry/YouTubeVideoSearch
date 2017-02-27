import React from 'react';
import './../style/video_detail.css'

const VideoListItem = ({video, onVideoSelect}) => {
  const image_url = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li className="list-group-item"
      onClick={()=> onVideoSelect(video)}>
      <div className="media">
        <div className="media-left">
          <img src={image_url} className="media-object" alt="Youtube thumbnails" />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
