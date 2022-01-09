import React, { useState } from 'react'

const Contact = () => {
    const [text, setText] = useState({
        fullname:"",
        email:"",
        number:"",
        message:"",
    })
    const clicked = () => {
        alert("Clicked")
    }
    const changed = (event) => {
      const {name,value}=event.target
     setText((preVal)=>{
        return {
            ...preVal,
            [name]:value,
        }
     })
    }
    return (
        <>
            <div className="services">
                <h2>Contact Us</h2>
            </div>
            <div className="col-lg-4 col-10 mx-auto form">
                <div className="row">
                    <div className="container">
                        <div className="data">
                            <div className="area">
                                <label htmlFor="">Fullname</label><br />
                                <input className='form-control' type="text" name="fullname" autoFocus autoComplete='off'
                                autoCapitalize='words' value={text.fullname} onChange={changed}></input>
                            </div>
                            <div className="area">
                                <label htmlFor="">Email</label><br />
                                <input className='form-control' type="email" value={text.email} name="email" onChange={changed}></input>
                            </div>
                            <div className="area">
                                <label htmlFor="">Phone Number</label><br />
                                <input className='form-control number' placeholder='0000-0000000' name="number" type="text" value={text.number} onChange={changed}></input>
                            </div>
                            <div className="area">
                                <label htmlFor="">Message</label><br />
                                <textarea className='form-control' name="" name="message" value={text.message} onChange={changed}></textarea>
                            </div>
                            <div className="area">
                                <button className='btn-start submit' onClick={clicked}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact
