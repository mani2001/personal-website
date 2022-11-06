import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import CTA from './CTA'
import IL1 from './Il1'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>technical skills &</h5>
            <h2>Experience</h2>
            <div className="container experience__container">
                <div className="skills">
                    <h3>Technical Skillset</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div>  <h4>Machine Learning</h4>
                            <small className="text-light">Experienced</small></div>
                          
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>Deep Learning</h4>
                            <small className="text-light">Experienced</small></div>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>NLP</h4>
                            <small className="text-light">Intermediate</small></div>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>Backend(Django)</h4>
                            <small className="text-light">Intermediate</small></div>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>Databases</h4>
                            <small className="text-light">Intermediate</small></div>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>React</h4>
                            <small className="text-light">Intermediate</small></div>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>Data Structures & Algorithms</h4>
                            <small className="text-light">Experienced</small></div>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>Google Protocol Buffers</h4>
                            <small className="text-light">Experienced</small></div>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <div><h4>Html&Css</h4>
                            <small className="text-light">Intermediate</small></div>
                            
                        </article>
                    </div>
                </div>
                <div className="internships"><h3>Internships</h3>
                <div className="internship__container">
                <article className="internship__details">
                            <div>  <h4>SDE intern @ Jio</h4>
                            <small className="text-light"><p>Worked on knowledge graph APIs for generic ontologies and tested them on various parameters.

Worked on knowledge graph APIs for generic ontologies and tested them on various parameters.</p>
Skills: gRPC · Protocol Buffers · ArangoDB · Knowledge Graphs · Python (Programming Language) · Machine Learning</small></div>
                        </article>
                        <CTA />
                        <br />
                        <article className="internship__details">
                            <div>  <h4>Data Scientist intern @ MlSquare</h4>
                            <small className="text-light"><p>Worked on MLOps and api testing. Tested barcode scanning api by building custom pipelines and implemented decision trees to extract information about different parameters involved.</p>
                            Skills: Data Analysis · Ops · MLOps · Python (Programming Language) · Machine Learning</small></div>
                          
                        </article>
                        <IL1 />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
