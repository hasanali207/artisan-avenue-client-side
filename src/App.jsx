import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'react-tooltip/dist/react-tooltip.css'
const Root = () => {
    const location = useLocation();
        
    useEffect(()=>{
        if(location.pathname === '/'){
            document.title = `Home`
        }else{ document.title = `${location.pathname.replace('/', '')}`}
       if(location.state){
        document.title = location.state;
       }
    }, [location.pathname])

    return (
        <div>
        <Header ></Header>
        <div className='max-w-6xl mx-auto p-4 md:p-6 lg:p-0 '>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;