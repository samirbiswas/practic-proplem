import React, { useEffect, useState } from 'react';
import './WeeklyRate.css'

const WeeklyRate = () => {
const [weeklyData, setWeeklyData] = useState({});
useEffect(() => {
    fetch('https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison')
    .then(res=>res.json())
    .then(data=>{
        setWeeklyData(data.rateLabels)
    })


  },[]);
  const [bodyData, setBodyData] = useState([]);
    console.log(bodyData)
  useEffect(() => {
    fetch('https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison')
    .then(res=>res.json())
    .then(result=>{
        setBodyData(result.rateBody)
    })


  },[]);



    return (
        <div className='container'>
            <div className='mt-5'>
            <p>Hotel Rate Comparison <i className="arrow down"></i></p>
            </div>

            <table className="table table-hover">
  <thead>
    <tr>
        <th className='text-black-50 ' scope="col">{weeklyData[0]}</th>
        <th className='text-black-50 ' scope="col">{weeklyData[1]}</th>
        <th className='text-black-50 ' scope="col">{weeklyData[2]}</th>
        <th className='text-black-50 ' scope="col">{weeklyData[3]}</th>
        <th className='text-black-50 ' scope="col">{weeklyData[4]}</th>
        <th className='text-black-50 ' scope="col">{weeklyData[5]}</th>
        <th className='text-black-50 ' scope="col">{weeklyData[6]}</th>
    </tr>

  </thead>
  <tbody>
        
  { bodyData.map( or=>
                   <tr>
                       <td >{or.name}</td>
                        <td >{or}</td>
                   </tr>
            )}
            

  </tbody>
</table>
           <div>
           
           </div>
        </div>
    );
};

export default WeeklyRate;