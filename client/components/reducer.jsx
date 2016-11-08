const init = {
	type: '',
	messages: ''
};

export default function addCommit (_state_ = init, action) {
	let state = Object.assign({}, _state_);
	switch (action.type) {
		case 'ADD_COMMIT':
			return {
				state,
				name: state.messages.name,
				message: state.message.message
			};
		default:
			return state
	}
}
