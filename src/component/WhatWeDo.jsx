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
                <div className='growth-platforms-container' data-aos="fade-right" data-aos-duration="1000">
                    <h1>Our growth platforms</h1>
                    <div className='growth-platforms'>
                        <div className='growth-card-container'>
                            <div className='growth-card1'>
                                <img src="https://www.mtn.com/wp-content/uploads/2024/07/Logo.svg" alt="" />
                                <p>We want to be African's leading digital platform</p>
                                <img src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/svgs/Union.svg" className='growth-arrow' alt="" />
                            </div>
                            <div className='growth-card2'>
                                <img src="https://www.mtn.com/wp-content/uploads/2024/07/Logo-4.svg" alt="" />
                                <p>Businesses operating in the modern context should always strive to improve productivity.</p>
                                <img src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/svgs/Union.svg" className='growth-arrow' alt="" />
                            </div>
                            <div className='growth-card3'>
                                <img src="https://www.mtn.com/wp-content/uploads/2024/07/Logo-1.svg" alt="" />
                                <p>Our next-generation services company connecting Africa with digital solutions.</p>
                                <img src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/svgs/Union.svg" className='growth-arrow' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo
