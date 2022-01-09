import React from 'react'
import CardCommon from './Cardcommon'
import Laptop from '../images/Laptop.jpg'
import Items from './Items'

const Services = () => {
    return (
        <>
            <div className="services">
                <h2>Services</h2>
            </div>
            <div className="container main-card">
                {/* <div className="container"> */}
                <div className="col-12 card-row">
                    <div className="row">
                        {
                            Items.map((curVal, ind) => {
                                return <CardCommon key={ind}
                                source={Laptop}
                                name={curVal.name}
                                desc={curVal.desc}

                                />
                            })
                        }
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Services