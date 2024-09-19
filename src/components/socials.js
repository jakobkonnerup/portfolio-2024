import React from 'react';
import './socials.css'

function Socials () {
    return (
        <div className='socials-container'>
         <p>SIG HEJ</p>
         <a href='https://www.linkedin.com/in/jakob-komischke-konnerup-4a3290156/'>
             <img src="/Assets/linkedin.svg" alt="LinkedIn" />
         </a>
         <a href='https://github.com/jakobkonnerup'>
             <img src="/Assets/github2.svg" alt="Github" />
         </a>
         <a href='https://www.instagram.com/jakobkonnerup/?hl=da'>
             <img src="/Assets/insta.svg" alt="Instagram" />
         </a>
        </div>
    )
}

export default Socials;