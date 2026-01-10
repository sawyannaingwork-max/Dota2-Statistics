import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Creating root
const root = createRoot(document.getElementById('root')!);

// Rendering the app
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);