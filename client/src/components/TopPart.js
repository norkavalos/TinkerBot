import React, { Component } from 'react';

export class TopPart extends Component {
	render(){
		return(
			<div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">Hello, I am Tinkerbot</h1>
          <p className="lead">I am a chatbot that will help you search events on Eventbrite by location.</p>
          <hr className="my-4"/>
          <p>Let's chat</p>
        </div>
			</div>
		);
	}
}
