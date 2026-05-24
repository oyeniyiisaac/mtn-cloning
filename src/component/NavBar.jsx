import './NavBar.css'
const NavBar = () => {
    const searchBtn = () => {
        // alert("Search button clicked!");
        const searchContainer = document.querySelector('.search-container');
        searchContainer.style.display = 'flex';
    }
    const searchCloseBtn = () => {
        const searchContainer = document.querySelector('.search-container');
        searchContainer.style.display = 'none';
    }
    const menuBarOpen = () => {
        const menuBarClose = document.querySelector('.menu-bar-close');
        menuBarClose.style.display = 'block';
        const menuBarOpen = document.querySelector('.menu-bar-open');
        menuBarOpen.style.display = 'none';
        const menuBarBoard = document.querySelector('.menu-bar-board');
        menuBarBoard.style.display = 'block';

    }
    const menuBarClose = () => {
        const menuBarClose = document.querySelector('.menu-bar-close');
        menuBarClose.style.display = 'none';
        const menuBarOpen = document.querySelector('.menu-bar-open');
        menuBarOpen.style.display = 'block';
        const menuBarBoard = document.querySelector('.menu-bar-board');
        menuBarBoard.style.display = 'none';
    }
    function menuBarBoard() {
        const menuBarClose = document.querySelector('.menu-bar-close');
        menuBarClose.style.display = 'none';
        const menuBarOpen = document.querySelector('.menu-bar-open');
        menuBarOpen.style.display = 'block';
        const menuBarBoard = document.querySelector('.menu-bar-board');
        menuBarBoard.style.display = 'none';
    }
    return (
        <>
            <nav className="navbar">
                <div className='navbar-list'>
                    <ul>
                        <img src="src/assets/mobile/mtn-logo.png" height="60" width="80" alt="" />
                        <li>About Us</li>
                        <li>Sustainability</li>
                        <li>Investors</li>
                        <li>News</li>
                        <li>People & Culture</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div className='navbar-search'>
                    <img src="data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 18C15.1421 18 18.5 14.6421 18.5 10.5C18.5 6.35786 15.1421 3 11 3C6.85786 3 3.5 6.35786 3.5 10.5C3.5 14.6421 6.85786 18 11 18Z' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21.4998 21L16.2998 15.8' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" alt="" onClick={searchBtn} />
                    <div className='navbar-searchImg'>
                        <img src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/svgs/world.svg" alt="" />
                        <img src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/svgs/chevron.svg" alt="" />
                    </div>
                </div>

                <div className='search-container'>
                    <input type="text" />
                    <button><img src="data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 18C15.1421 18 18.5 14.6421 18.5 10.5C18.5 6.35786 15.1421 3 11 3C6.85786 3 3.5 6.35786 3.5 10.5C3.5 14.6421 6.85786 18 11 18Z' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21.4998 21L16.2998 15.8' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" alt="" /></button>
                    <button onClick={searchCloseBtn} className='searchCloseBtn'>close <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgkJCQkJPGcgZmlsbD0iIzIzMjMyMyIgZmlsbC1ydWxlPSJub256ZXJvIj4KCQkJCQkJPHJlY3QgdHJhbnNmb3JtPSJyb3RhdGUoNDUgOCA3KSIgeT0iNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIHJ4PSIxIj48L3JlY3Q+CgkJCQkJCTxyZWN0IHRyYW5zZm9ybT0icm90YXRlKC00NSA4IDcpIiB5PSI2IiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgcng9IjEiPjwvcmVjdD4KCQkJCQk8L2c+CgkJCQk8L3N2Zz4=" alt="" /> </button>
                </div>
                <div className='hamburger'>
                    <img src="data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 18C15.1421 18 18.5 14.6421 18.5 10.5C18.5 6.35786 15.1421 3 11 3C6.85786 3 3.5 6.35786 3.5 10.5C3.5 14.6421 6.85786 18 11 18Z' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21.4998 21L16.2998 15.8' stroke='%23202020' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" alt="" onClick={searchBtn} />


                    <svg onClick={menuBarOpen} className='menu-bar-open' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>

                    <svg onClick={menuBarClose} className='menu-bar-close' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
                    </svg>



                </div>
            </nav>
            <div onClick={menuBarBoard} className='menu-bar-board bg-white p-4'>
                <hr />
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Sustainability</li>
                    <li>Investors</li>
                    <li>News</li>
                    <li>People & Culture</li>
                    <li>Legal</li>
                </ul>
            </div>
        </>
    )
}

export default NavBar
