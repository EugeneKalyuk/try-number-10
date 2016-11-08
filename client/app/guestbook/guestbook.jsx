import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

if (global.IS_BROWSER) {
	require('./guestbook.styl')
}



let nextTodoId = 0;
class GuestBook extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isEmptyName: false,
			isEmptyMessage: false,
			recalls: []
		};
	}

	// componentDidMount(){
	// 	if(this.props.list.type === action.)
	// }

	handlerChangeName(e) {
		this.setState({
			isEmptyName: !e.target.value.length
		})
	}

	handlerChangeMessage(e) {
		this.setState({
			isEmptyMessage: !e.target.value.length
		})
	}

	checkFields(e) {
		e.preventDefault();

		let recall = {};
		let nameText = document.getElementById('name').value;
		let messageText = document.getElementById('message').value;

		if (nameText !== '' && messageText !== '') {
			recall.name = nameText;
			recall.message = messageText;
		}
		if (nameText == '') {
			this.setState({
				isEmptyName: true
			})
		}
		if (messageText == '') {
			this.setState({
				isEmptyMessage: true
			})
		}
		if (Object.keys(recall).length !== 0) {
			this.state.recalls.push(recall);
		}

	}

	render() {

		return (
			<div>
				<div className="container">

					<h1>GuestBook</h1>

					<ul/>

					<form className="col-xs-12">

						<TextField
							floatingLabelText="Enter your name"
							fullWidth={true}
							onBlur={this.handlerChangeName.bind(this)}
							id="name"
						    ref={node => {
							    this.input = node;
						    }}
						/>
						{this.state.isEmptyName ? <div className="error">Field is required</div> : null}

						<TextField
							floatingLabelText="Enter your message"
							multiLine={true}
							rows={6}
							fullWidth={true}
							onBlur={this.handlerChangeMessage.bind(this)}
							id="message"
							ref={node => {
								this.textarea = node;
							}}
						/>
						{this.state.isEmptyMessage ? <div className="error">Field is required</div> : null}

						<button type="submit" className="btn btn-primary send-btn"
						        onClick = {this.checkFields.bind(this)}>Send
						</button>

					</form>
				</div>
			</div>
		)
	}
}
function mapStateToProps (state) {
	console.log(state);
	return {
		messages: state
	};

}

export default connect(mapStateToProps, dispatch => {
	return {
		type: 'ADD_COMMIT'
	}
})(GuestBook);
