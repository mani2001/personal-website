import React from 'react'
import './services.css'
import BELLE2 from '../../assests/bnl_belle2.jpg'
import AN from '../../assests/agent_navigation.png'
import TSP from '../../assests/tsp.png'
const Services = () => {
    return (
        <section id='projects' className="project1">
            <h5>Professional</h5>
            <h2>Projects</h2>
            <div className="container projects__container">
                <div>
                    <div className="projects_content">
                        <article className="projects__details">
                            <div>  <h3>Belle2 grid computing tools development(Present)</h3>

                                <small className="text-light">*Working on the prestigious KEK Belle2 experiment grid computing tools development.<br />
                                *Using tools such as gbasf2, python, Jira and others to assist physicts to run their programs on the distributed belle grid.< br />
                                *Belle2 is an international level experiment that is done in collaboration with many laboratories worldwide like KEK, BNL, CERN, and others.</small></div>
                            <img src={BELLE2} alt="belle2" className="belle2" />
                        </article></div>
                </div>
            </div>
            <div className="container projects__container">
                <div>
                    <div className="projects_content">
                        <article className="projects__details">
                            <div>  <h3>Agent Navigation using Reinforcement Learning</h3>
                                <small className="text-light">*Implemented Q-Learning, SARSA and Deep Q networks on custom-generated random obstacle 2-D maps on google colab and local machine.<br />
                                *got research level conclusions to match use-case with type of algorithm used.< br /><a href="https://github.com/mani2001/Agent-Navigation-using-reinforcement-learning">github link</a>
                                </small></div>

                            <img src={AN} alt="agent_navigation" className="AN" />

                        </article></div>
                </div>
            </div>
            <div className="container projects__container">
                <div>
                    <div className="projects_content">
                        <article className="projects__details">
                            <div>  <h3>Comparison of algorithms to solve TSP problem</h3>
                                <small className="text-light">*Compared Algorithms like Genetic Algorithm, Dynamic Programming, Branch and Bound method and Naïve Algorithm to solve the famous TSP problem and plotted graphs and visualizations.<br />
                                *Tuned the hyperparameters like population size and number of generations, to track the most effective way to implement the genetic algorithm for the problem.< br /><a href="https://github.com/mani2001/TSP-solvers">github link</a>
                                </small></div>

                            <img src={TSP} alt="TSP_solvers" className="TSP" />

                        </article></div>
                </div>
            </div>
        </section>
    )
}

export default Services
