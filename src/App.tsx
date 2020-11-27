import React, { useEffect } from 'react';
import { AppContent } from './components/AppContent';
import { AppHeader } from './components/AppHeader';
// https://react-bootstrap.github.io

function App() {
	return <main className="main">
		<AppHeader />
		<AppContent />
	</main>
}

export default App;

