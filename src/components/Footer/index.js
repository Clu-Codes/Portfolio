import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <ul className='icon-row'>
                <li>
                    <a href='https://github.com/Clu-Codes'>
                    <img
                    src={require('../../assets/Social-Media/Octocat.png').default}
                    alt='Github logo'
                    className='github'
                    />
                   </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/connor-cluster/'>
                    <img
                    src={require('../../assets/Social-Media/LI-In-Bug.png').default}
                    alt='LinkedIn Logo'
                    className='linkedIn'
                    />
                    </a>
                </li>
                <li>
                    <a href='https://stackoverflow.com/users/story/14351400'>
                    <img
                    src={require('../../assets/Social-Media/Stack-Overflow.png').default}
                    alt='StackOverflow logo'
                    className='Stacks'
                    />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;