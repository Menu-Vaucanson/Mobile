import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './Stylesheets/index.css';

import Main from './Components/Main.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>
);