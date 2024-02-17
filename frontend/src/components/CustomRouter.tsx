import React, {useEffect} from "react";
import Slider from "./Slider";
import ApplicationRoutes from "../models/enums/ApplicationRoutes";
import {useLocation} from "react-router-dom";

type CustomRouterProps = {
    routing: string;
}

const CustomRouter: React.FC<CustomRouterProps> = ({routing}) => {

    const location = useLocation();

    const [currentRoute, setCurrentRoute] = React.useState<string>(routing);

    const handleRouteChange = (newRoute: string) => {
        const enumValues = Object.values(ApplicationRoutes);

        for (const value of enumValues) {
            if (newRoute === value) {
                setCurrentRoute(value);
                return;
            }
        }
        setCurrentRoute(ApplicationRoutes.HOME);
    }

    useEffect(() => {
        console.log('Location changed');
    }, [location]);

    // useEffect(() => {
    //     const enumValues = Object.values(ApplicationRoutes);
    //     const path = location.pathname;
    //     const route = path.split('/')[1];
    //
    //     for (const value of enumValues) {
    //         if (route === value) {
    //             setCurrentRoute(value);
    //             return;
    //         }
    //     }
    //     setCurrentRoute(ApplicationRoutes.HOME);
    //
    // }, [location.pathname]);

    function addRouting(routing: string) {

        const path = location.pathname;
        const route = path.split('/')[1];

        if (route !== currentRoute){
            // sb changes the route manually
            handleRouteChange(route);

            return;
        }

        let newURL = process.env.REACT_APP_HOMEPAGE_URL;

        if (routing !== '/'){
            const prettyRouting = routing.replace(/\s+/g, '-');
            newURL = newURL + prettyRouting;
        }

        window.history.pushState({ path: newURL }, '', newURL);
    }

    function renderSwitch(routing: string){

        const path = location.pathname;
        addRouting(`/${routing}`);
        switch (routing) {
            case ApplicationRoutes.HOME:
                return <Slider/>;
            case ApplicationRoutes.ABOUT:
                return <div>o latarniku</div>;
            case ApplicationRoutes.FAQ:
                return <div>faq</div>;
            case ApplicationRoutes.CREATORS:
                return <div>tworcy</div>;
            case ApplicationRoutes.ALGORITHM:
                return <div>algorytm</div>;
            default:
                return <Slider/>;
        }
    }

    return (
        <div>
            {renderSwitch(currentRoute)}
        </div>
    );
}

export default CustomRouter;