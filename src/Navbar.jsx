const Navbar=()=>{
    return(
        <nav className="navbar">
            <h1>Blog App</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    background: '#f1356d',
                    borderRadius: '8px',
                }}>New blog</a>
            </div>

        </nav>
    );
}

export default Navbar;