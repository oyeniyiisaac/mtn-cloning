import ChartBoard from './ChartBoard'
import './ChartAndBoard.css'

const ChartAndBoard = () => {
    return (
        <>
            <div className='chart-board-container'>
                <h1 className='container-head'>Investors</h1>
                <div className='chart-board-content'>
                    <div className='chart-container'>
                        <ChartBoard />
                        <div>
                            <div style={{ backgroundColor: '#373737', padding: '0 1rem', margin: '0 1.5rem 0 3.2rem', color: '#fff'}}>
                                <p>ZAR 0
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.78em" height="1em" viewBox="0 0 16 9">
                                    <path d="M0 0h16v9H0z" fill="none" />
                                        <path fill="#ff0000" d="M7.18 7.62L3.03 2.79c-.6-.7-.1-1.79.82-1.79h8.29c.93 0 1.42 1.09.82 1.79L8.82 7.62c-.43.5-1.21.5-1.64 0" />
                                </svg><strong style={{color: '#ff0000'}}>-19792 C </strong><span style={{color: '#ff0000', fontSize: '12px'}}>  -100%</span><br /><span style={{fontSize: '12px'}}>Wed Feb 25, 2026 08:29</span></p>
                            </div>
                            <button>VIEW ALL INVESTORS</button>
                        </div>
                    </div>
                    <div className='board-container'>
                        <h4>Investors</h4>
                        <h1>Upcoming events</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChartAndBoard
