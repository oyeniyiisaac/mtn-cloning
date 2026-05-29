import React from 'react'
import './Achieve.css'

const Achieve = () => {
    return (
        <>
            <div className='achieve'>
                <h1><span>Our achievements <br /></span> in numbers</h1>
                <div className='achieve-container'>
                    <div className='achieve-card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/1.-FOUNDATION.png" alt="" />
                        <h2>Most Valuable African brand</h2>
                        <p>with operation in 19 markets</p>
                    </div>
                    <div className='achieve-card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/stats3.svg" alt="" />
                        <h2>312.7 million <br /> subscribers</h2>
                        <p>active across Africa</p>
                    </div>
                    <div className='achieve-card'>
                        <img src="https://www.mtn.com/wp-content/uploads/2024/07/stats2.svg" alt="" />
                        <h2>Service revenue of R56.8 billion</h2>
                        <p>Period ended 31 March 2026</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achieve
