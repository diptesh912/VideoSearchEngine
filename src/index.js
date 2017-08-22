import _ from 'lodash';
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";
import VideoDetail from './components/video_detail';

const  API_KEY = 'AIzaSyATSx8UnJOaTNCDwWzyJWKL0Q3otpIKi34';


const  app = document.getElementById("container");

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [], 
			selectedVideo : null
		};

		this.videoSearch('surfboards')

	}

	videoSearch(term) {

		YTSearch({key:API_KEY, term: term}, (data) =>  {
			console.log(data);
			this.setState({
				videos: data, 
				selectedVideo: data[0]
			});
		} );

	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
		return(
			<div> 
			 	<SearchBar onSearchTermChange= {videoSearch} />
			 	<VideoDetail video ={this.state.selectedVideo}/>
			 	<VideoList 
			 	 onVideoSelect={video => this.setState({selectedVideo:video})} 
			 	 videos={this.state.videos}/>
			 </div>
			);
	}
}
ReactDOM.render(<App/>, app);




