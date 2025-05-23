import { Link, useNavigate } from  'react-router-dom'; // useNavigate will be used to send us to the log in page whenever the user clicks login 
import { getAuth, signOut } from 'firebase/auth'; //this function allows the user to sign out
import useUser from './hooks/useUser';

const NavBar = () => {

    const { user } =useUser();
    const navigate = useNavigate();

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            {/* below we're creatig the login and log out buttons; if the user exists we display a log out button otherwise its log in */}
            <div className="nav-right"> 
                {user 
                    ? <button onClick={() => {
                        signOut(getAuth());
                    }}>Log Out</button>

                    : <button onClick={() => {
                        navigate('/login');
                    }}>Log In</button> 
                }
            </div>
        </nav>
    )
}

export default NavBar;