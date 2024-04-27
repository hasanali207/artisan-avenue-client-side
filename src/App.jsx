import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

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
        <>
        <Header></Header>
        <div className='max-w-6xl mx-auto'>
        <Outlet></Outlet>
        </div>
        </>
    );
};

export default Root;