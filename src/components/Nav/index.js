import React from 'react';

function Nav(props) {
    const navLinks = ['About', 'Portfolio', 'Contact', 'Resume'];
    return(
        <header>
            <nav>
                <ul className='flex-row'>
                 {navLinks.map(tabs => (
                     <li className='nav-link' key={tabs}>
                         <a href={'#' + tabs.toLowerCase()}
                         onClick={() => props.setCurrentPage(tabs)}
                         className={
                             props.currentPage === tabs ? 'active-nav' : 'nav-link'
                         }
                         >
                            {tabs}
                         </a>
                     </li>
                 ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;