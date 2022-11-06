import React from 'react'
import CV from '../../assests/Manikantan_Resume_Official.pdf'
const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
    )
}

export default CTA
