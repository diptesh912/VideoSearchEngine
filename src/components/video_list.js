import React from 'React';
import VideoListItem from './video_list_item'

export default class VideoList extends React.Component {
	constructor(props) {
		super(props);		
	}
     
	 render() {	 
	   	 const videoItem = this.props.videos.map((video) => {
	   	 	return <VideoListItem key={video.etag} video= {video} onVideoClick= {this.props.onVideoSelect}/>
	   	 });
	 	return(
	 		<ul className="col-md-4 list-group">
                {videoItem}
	 		</ul>
	 		);
	 }
}