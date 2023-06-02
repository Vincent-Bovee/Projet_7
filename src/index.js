import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Propos from './pages/Propos'
import Produit from './pages/Produit'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

// import ReactDOM from 'react-dom'
// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/propos" element={<Propos />} />
//                 <Route path="/produit/:key" element={<Produit />} />
//                 <Route path="*" element={<Error />} />
//             </Routes>
//             <Footer />
//         </Router>
//     </React.StrictMode>,
// document.getElementById('root')
// )

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<Propos />} />
                <Route path="/produit/:key" element={<Produit />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
  