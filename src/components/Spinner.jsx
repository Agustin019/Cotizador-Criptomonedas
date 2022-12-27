import React from 'react'
import  '../styles/spinner.css'

const Spinner = () => {
    return (
        <div>
            <div className='spinner'>
                <div className='bounce1'></div>
                <div className='bounce2'></div>
                <div className='bounce3'></div>
            </div>
        </div>
    )
}

export default Spinner