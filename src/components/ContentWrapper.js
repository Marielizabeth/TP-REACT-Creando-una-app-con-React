import React from 'react';
import Contentrowtop from './ContentRowTop';
import Footer from './Footer';
import TopBar from './TopBar';

 
const Contentwrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
    
    <div id="content">
        <TopBar/>       
        <Contentrowtop/>   
    </div>
        <Footer/>
    </div>
    );
}

 
export default Contentwrapper;