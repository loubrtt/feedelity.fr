"use client"
import './Partners.css'
import { useState } from 'react'

export default function Partners() {
    const [windowDisplay, setWindowDisplay] = useState(0);

    return (
        <div className='component-container'>
            <div className="partners">
                <h1>Ils nous ont fait <strong>confiance</strong>.</h1>
                <div className='swipe-partners'>
                    <button className='arrow'>←</button>
                    <div className='partner-window'>

                    </div>
                    <button className='arrow'>→</button>
                </div>
            </div>
        </div>
    )
}