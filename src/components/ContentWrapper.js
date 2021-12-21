import React from 'react';
import Contentrowtop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TopBar from './TopBar';

 
const Contentwrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
    
    <div id="content">
        <TopBar/>       
        <Contentrowtop/>
        <Table/>   
    </div>        
        <Footer/>
    </div>
    );
}

 
export default Contentwrapper;