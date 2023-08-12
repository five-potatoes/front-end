import React from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SignToText from "../body/SignToText";


const Main = () => {
    /* const [showInitialBody, setShowInitialBody] = useState(true);

    const handleToggleBody = () => {
    setShowInitialBody(!showInitialBody);
    }; */
    return (
        <>
            <Header />
            <SignToText />
            
            <Footer />
            {/* {showInitialBody ? <Body1 /> : <Body2 />}*/}
            {/* <button onClick={handleToggleBody}>
            {showInitialBody ? 'Show Body 2' : 'Show Body 1'}
            </button> */}
        </>
    )
}

export default Main;