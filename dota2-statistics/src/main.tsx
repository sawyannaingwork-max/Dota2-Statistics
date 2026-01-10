import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import './index.css'

// Creating client
const client = new QueryClient();

// Creating root
const root = createRoot(document.getElementById('root')!);

// Rendering the app
root.render(
    <BrowserRouter>
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
    </BrowserRouter>
);