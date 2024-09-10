import React, { useState } from 'react'
import './info.css'

function CoinInfo({ heading, desc }) {
    const shortDesc = desc.slice(0, 300) + "<p style = 'color: var(--grey) !important'>READ MORE...</p>";
    const fullDesc = desc + "<p style = 'color: var(--grey) !important'>READ LESS...</p>";
    const [flag, setFlag] = useState(false)
    return (
        <div className='wrapper'>
            <h2 className='heading'>{heading}</h2>
            {
                desc.length > 300 ?
                    <p className='desc' onClick={() => setFlag(!flag)} dangerouslySetInnerHTML={{ __html: flag == false ? shortDesc : fullDesc }} ></p> : 
                    <p className='desc' dangerouslySetInnerHTML={{ __html: desc }}/>
            }

        </div>
    )
}

export default CoinInfo