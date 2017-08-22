import React from "react";


export default class SearchBar extends React.Component{

	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	onInputChange(event) {
			//console.log(event.target.value);
			this.setState({term : event.target.value});
			this.props.onSearchTermChange(event.target.value)
	}
	render() {
		return(
              <div className="search-bar"> <input placeholder="search video" onChange={this.onInputChange.bind(this)}/></div>
			);
	}
}

