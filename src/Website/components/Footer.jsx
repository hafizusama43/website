import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear()
    return (
        <>
            <footer className='footer'>
                <p>&copy; {year} | All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer
