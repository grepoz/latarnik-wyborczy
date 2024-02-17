import React, {useEffect} from 'react';
import './styles/App.css';
import {useLocation} from 'react-router-dom';
import CustomNavbar from "./components/CustomNavbar";
import CustomRouter from "./components/CustomRouter";
import ApplicationRoutes from "./models/enums/ApplicationRoutes";

// TODO jak ktoś poda z palca to też ma przenosić

function App() {

    const [currentRoute, setCurrentRoute] = React.useState<string>('');


    const handleRouteChange = (currentRoute: string) => {
        setCurrentRoute(currentRoute);
    }

    return (
        <div className={"app-grid"}>

            <header className={"app-header"}>
                <h3>Latarnik Wyborczy</h3>
                <CustomNavbar onRouteChange={handleRouteChange}/>
            </header>

            <main className={"app-main"}>
                <CustomRouter routing={currentRoute} />
            </main>

            <footer className={"app-footer"}>
                © 2023. Wszystkie prawa zastrzeżone.
            </footer>

        </div>
    );
}

export default App;
