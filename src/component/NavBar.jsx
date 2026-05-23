import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className='navbar-list'>
                    <ul>
                        <li><img src="src/assets/mobile/mtn-logo.png" height="60" width="80" alt="" /></li>
                        <li>About Us</li>
                        <li>Sustainability</li>
                        <li>Investors</li>
                        <li>News</li>
                        <li>People & Culture</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div className='navbar-search'>
                    <img src="data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 18C15.1421 18 18.5 14.6421 18.5 10.5C18.5 6.35786 15.1421 3 11 3C6.85786 3 3.5 6.35786 3.5 10.5C3.5 14.6421 6.85786 18 11 18Z' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21.4998 21L16.2998 15.8' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" alt="" />
                    <div className='navbar-searchImg'>
                        <img src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/svgs/world.svg" alt="" />
                        <img src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/svgs/chevron.svg" alt="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
