import React from 'react';

import './header.css';

const Header = () => {

    // const [isUserLoggedIn, setIsUserLoggedIn] = useState('');

    // const handleLogoutSession = () => {
    //     localStorage.removeItem('session');
    //     setIsUserLoggedIn('NO');
    // }

    // useEffect(() => {
    //     if(localStorage.getItem('session') === 'ACTIVE') {
    //         setIsUserLoggedIn('YES');
    //     }
    // }, [isUserLoggedIn])
    
    return (
        <div className='header'>
            <div className='header-icon'>
                <img src={'/adult_icon.ico'} alt='AFH_Icon' />
            </div>
            <div className='header-title'>
                AFH <br /> <span>Management System</span>
            </div>
            {/* <div>
                {isUserLoggedIn === 'YES' && <div>
                    <span>login as {localStorage.getItem('loggedInUser')}</span>
                    <Link to={'/'} onClick={handleLogoutSession} className='logoutBtn'>
                        Logout
                    </Link>
                </div>}
            </div> */}
        </div>
    );
}

export default Header;