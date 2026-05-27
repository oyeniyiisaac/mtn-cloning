import React from 'react'
import './WhatWeDo.css'

const WhatWeDo = () => {
    return (
        <>
            <div className='what-we-do'>
                <div className='card-container'>
                    <div className='card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/Icon.svg" alt="" />
                        <p>About </p>
                    </div>
                    <div className='card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/Investment.svg" alt="" />
                        <p>Investors </p>
                    </div>
                    <div className='card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/News.svg" alt="" />
                        <p>Newsroom</p>
                    </div>
                    <div className='card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/sustainability.svg" alt="" />
                        <p>Sustainability</p>
                    </div>
                    <div className='card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/People-Culture.svg" alt="" />
                        <p>People & Culture</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo
