
import React from 'react'

const VaccineResult = ({responseData,text}) => {
    return (
      <>
            
            <div className='container-fluid mt-4'>
            <h1 className='mb-4 text-center'>Your Area vaccine Data</h1>
            <div className="table-responsive">
                    <table className="table table-hover stats_Table">
                        <thead className='thead-dark'>
                            <tr>
                            <td>Name</td>
                            <td>Address</td>
                            <td>Fee Type</td>
                            <td>Available capacity</td>
                            <td>Available capacity Dose 1</td>
                            <td>Available capacity Dose 2</td>
                            <td>Min Age Limit</td>
                            <td>Vaccine</td>
                            <td>Slots</td>
                            </tr>


                        </thead>

                        <tbody>
                            {
                                responseData.map((currElem,index) =>{
                                    return (
                                        <tr key={index}>
                                            <td>{currElem.name}</td>
                                            <td>{currElem.address}</td>
                                            <td>{currElem.fee_type}</td>
                                            <td>{currElem.available_capacity}</td>
                                            <td>{currElem.available_capacity_dose1}</td>
                                            <td>{currElem.available_capacity_dose2}</td>
                                            <td>{currElem.min_age_limit}</td>
                                            <td>{currElem.vaccine}</td>
                                            <td>{currElem.slots}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>

                </div>
            </div>
            
    
        </>
    )
}

export default VaccineResult
