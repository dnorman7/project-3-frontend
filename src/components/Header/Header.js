import './Header.css';

export default function Header(props) {
    return (
        <header className='Header'>
            <h1>Exercise App Logo</h1>
            <nav>
                <ul className='NavLinks'>
                    <li>Logout</li>
                    <li>Dashboard</li>
                    <li>Signup</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
}

