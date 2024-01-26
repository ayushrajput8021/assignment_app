import './App.css';
import { lazy, Suspense } from 'react';
import AddEmployee from './pages/AddEmployee';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const LazyShowEmployee = lazy(() => import('./pages/ShowEmployee'));

function App() {
	return (
		<div className='m-6 ml-10 flex flex-col'>
			<BrowserRouter>
				<h1 className='text-2xl'>Admin Panel</h1>
				<Routes>
					<Route path='/' element={<AddEmployee />} />
					<Route
						path='/show'
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<LazyShowEmployee />
							</Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
