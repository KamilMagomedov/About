import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from '@/context/dataProvider'
import App from './App'

const container = document.getElementById('root')

if (container) {
	const root = createRoot(container)
	root.render(
		<BrowserRouter>
			<DataProvider>
				<App />
			</DataProvider>
		</BrowserRouter>
	)
}
