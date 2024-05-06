// App.js
import DefaultLayout from 'components/Layout/DefaultLayout';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from 'routes';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        return <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}
