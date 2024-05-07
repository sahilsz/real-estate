import './navbar.scss';

export default function Navbar() {
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Real Estate" />
                    <span>DashEstate</span>
                </a>
                <a href="/home">Home</a>
                <a href="/home">About</a>
                <a href="/home">Contact</a>
                <a href="/home">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>
            </div>
        </nav>
    )
}