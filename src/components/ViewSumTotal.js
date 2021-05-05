import React from 'react'

export const ViewSumTotal = ({ResultValue}) => {
    return (
    <div class="row">
        <div class="col-12 text-center">
            <div class="card-header my-5">
                <h5><b>SUMA DE LOS DADOS</b></h5>
                <button class="btn btn-dark white-text">
                    <h2 id="SumaDados">{ResultValue}</h2>
                </button>
            </div>
        </div>
    </div>
    )
}
