import React, { Component } from 'react';
import GuestBook from './guestbook/guestbook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const Page = () => (
	<MuiThemeProvider>
		<GuestBook/>
	</MuiThemeProvider>
);

class App extends Component {
	render(){
		return(
			<Page />
		)
	}
}

export default App;