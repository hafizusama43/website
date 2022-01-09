import React from 'react'

const CardCommon = (props) => {
    return (
        <>
            <div className="col-md-4 col-12">
                <div className="row card-row ">
                    <div className="card">
                        <img src={props.source} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.desc}</p>
                            <a href="/" className="btn-start purchase">Purchase</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCommon
