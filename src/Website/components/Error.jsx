import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="container error">
        <div className="col-12 ">
          <div className="row">
            <h1>Error <strong className='err'>404</strong></h1>
            <p>The page you requested doesnot exist.</p>
            <div className='button-err'>
              <NavLink className='btn-err' to="/">Homepage</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error
