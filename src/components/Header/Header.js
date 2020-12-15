import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {

    async function logout(event) {
        event.preventDefault();
        props.handleLogout();
    }

    return (
        <header className='Header'>
            <Link to='/'>
            <h1> My Food Diary</h1>
            </Link>
            <nav>
                <ul className='NavLinks'>
                    {
                        props.user.name ?
                        <> 
                        <li><Link to='/' onClick={logout}>Logout</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/diets'>Food Entries</Link></li>
                        </>
                        :
                        <>
                        <li><Link to='/signup'>Signup</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        </>
                        }
                </ul>
            </nav>
        </header>
    );
}

