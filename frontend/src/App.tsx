import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from "./components/CustomNavbar";
import ApplicationRoutes from "./models/enums/ApplicationRoutes";
import Slider from "./components/Slider";
import {PageNotFound} from "./components/PageNotFound";

const composeRelativePath = (route: string) => `/${route}`;

function App() {

    return (
        <div className={"app-grid"}>

            <header className={"app-header"}>
                <h3>Latarnik Wyborczy</h3>
                <CustomNavbar/>
            </header>

            <main className={"app-main"}>

                <Routes>
                    <Route path={composeRelativePath(ApplicationRoutes.HOME)} element={<Slider/>} />
                    <Route path={composeRelativePath(ApplicationRoutes.ABOUT)} element={<h3>ABOUT</h3>} />
                    <Route path={composeRelativePath(ApplicationRoutes.CREATORS)} element={<h3>CREATORS</h3>} />
                    <Route path={composeRelativePath(ApplicationRoutes.ALGORITHM)} element={<h3>ALGORITHM</h3>} />
                    <Route path={composeRelativePath(ApplicationRoutes.FAQ)} element={<h3>FAQ</h3>} />
                    <Route path='*' element={<PageNotFound location={ {pathname: window.location.pathname} }/>} />
                </Routes>
            </main>

            <footer className={"app-footer"}>
                © 2023. Wszystkie prawa zastrzeżone.
            </footer>

        </div>
    );
}

export default App;
