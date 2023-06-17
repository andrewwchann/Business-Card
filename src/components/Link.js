import React from 'react'

export default function toLink(prop) {
    return (
        <a href={prop.account} target='_blank'>
            <button className='link-button'>
                {prop.name}
            </button>
        </a>
    )
}

// const linkedinLink = () => {
//     const profile = 'https://www.linkedin.com/in/andrew-chan-815195239/';
//     return (
//         <a href={profile} target='_blank' rel='noopener norefferer' className='linkedin-button'>
//             Linkedin
//         </a>
//     )
// }

// export default linkedinLink;