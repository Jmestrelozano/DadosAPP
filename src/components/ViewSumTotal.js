import React, { useEffect } from 'react'

export const ViewSumTotal = ({ResultValue}) => {



    return (
    <div className="row">
        <div className="col-12 text-center">
            <div className="card-header my-5">
                <h5><b>SUMA DE LOS DADOS</b></h5>
                <button className="btn btn-dark white-text">
                    <h2 id="SumaDados">{ResultValue}</h2>
                </button>
            </div>
        </div>
    </div>
    )
}
