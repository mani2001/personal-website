import React from 'react'
import IL from '../../assests/Intern_Letter.pdf'
const CTA = () => {
    return (
        <div className="cta">
            <a href={IL} download className="btn">Download certificate</a>
        </div>
    )
}

export default CTA
