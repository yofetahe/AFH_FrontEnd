import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Menu from './components/common/menu';

const SecuredRoute = (props: any) => {
    const [ isLoggedIn ] = useState(localStorage.getItem('session'));
    console.log('>>>> ', props);    
    return (
        <Route path={props.location.pathname}
            render={data => isLoggedIn === 'ACTIVE' ? 
                (<div><Menu url={props.location.pathname} /><props.component {...data}></props.component></div>) :
                (<Redirect to={{ pathname: '/' }}></Redirect>)} >
        </Route>
    );
}

export default SecuredRoute;