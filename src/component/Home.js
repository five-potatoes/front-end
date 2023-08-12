import React from "react";
import Header from './Home/Header';
import Footer from './Home/Footer';
import SignToText from "./Home/SignToText";


const Home = () => {
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

export default Home;