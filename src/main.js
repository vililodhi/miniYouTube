import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA_FN0lGmGAtCIVVVWSyTa4L2_lF6M__rw';

class App extends Component {

	constructor(props) {

		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'guitar'}, (videos) => {
			//this.setState({ videos: videos });
			this.setState({ videos });
		});
	}

	render () {
        return (
	        <div>
	        	<div className="col-md-4">
	        	</div>
	        	<div className="col-md-4">
		            <h1>Mini You Tube</h1>
		            <p><img src="http://i2.kym-cdn.com/photos/images/list/001/246/217/dd4.png" /></ p>
		            Search : <SearchBar />
		            <VideoList videos={this.state.videos} />
		        </div>
		        <div className="col-md-4">
		        </div>
	        </div>
	    );
	}

}

ReactDOM.render(<App />, document.getElementById('app'));