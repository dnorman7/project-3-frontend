import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className='Header'>
            <Link to='/'>
            <h1>Exercise App Logo</h1>
            </Link>
            <nav>
                <ul className='NavLinks'>
                    {
                        props.user ?
                        <> 
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
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

