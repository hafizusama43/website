import React from 'react'
import { NavLink } from 'react-router-dom'
import Main from '../images/Main.jpg'

const Home = () => {
    return (
        <>
            <section id='header'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                                <div className='col-lg-6 order-2 order-lg-1'>
                                    <h1 >Grow Your business With <strong className='name'>Usama Abdur Rehman</strong></h1>
                                   <div>
                                   <h2 className='moto'>We provide Solutions to your technnical problems</h2>
                                   </div>

                                    <div className='button'>
                                        <NavLink className='btn-start' to="/services">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 main_img'>
                                    <img className='img' src={Main} alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
