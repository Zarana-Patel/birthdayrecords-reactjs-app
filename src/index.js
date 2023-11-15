import react, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById('root');
const root  = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)