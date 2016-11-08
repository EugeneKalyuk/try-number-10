import App from './app/app';
import GuestBook from './app/guestbook/guestbook';

export default function () {
	return {
		component: App,
		path: '/',
		indexRoute: {
			component: GuestBook
		}
	};
}