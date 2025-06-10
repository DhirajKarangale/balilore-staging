import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
              <p className="mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="bg-[#E91E63] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300">Go Home</a>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App