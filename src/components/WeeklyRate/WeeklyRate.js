import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './WeeklyRate.css'

const WeeklyRate = () => {

  //toggle start
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

//toggle end

const [weeklyData, setWeeklyData] = useState({});
useEffect(() => {
    fetch('https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison')
    .then(res=>res.json())
    .then(data=>{
        setWeeklyData(data.rateLabels)
    })


  },[]);
  const [bodyData, setBodyData] = useState([]);

    useEffect(() => {
      fetch('https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison')
      .then(res=>res.json())
      .then(result=>{
          setBodyData(result.rateBody)
      })

  },[]);

    return (
        <div className='container'>

            <div className='mt-5 d-flex justify-content-between'>
                <p>Hotel Rate Comparison <i className="arrow down"></i></p>
                  <div className='mb-3'>
                    <FormGroup row>
                    
                      <FormControlLabel
                        control={
                          <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />}
                          
                        label="Weekly Data"
                    />
                  </FormGroup>
              </div>
            </div>

<table className="table table-hover">
  <thead className='design'>
      <tr>
          <th className='text-black-50 ' scope="col">{weeklyData[0]}</th>
          <th className='text-black-50 ' scope="col">{weeklyData[1]}</th>
          <th className='text-black-50 ' scope="col">{weeklyData[2]}</th>
          <th className='text-black-50 ' scope="col">{weeklyData[3]}</th>
          <th className='text-black-50 ' scope="col">{weeklyData[4]}</th>
          <th className='text-black-50 ' scope="col">{weeklyData[5]}</th>
          <th className='text-black-50 ' scope="col">{weeklyData[6]}</th>
          <th className='text-black-50 ' scope="col">{weeklyData[7]}</th>
      </tr>
  </thead>

  <tbody >
      {bodyData.map(or => {
            const keys = Object.keys(or).slice(1)
              return (
                <tr>
                  <td >{or.name}</td>
                  {keys.map(day => <td  >${ or[day]?.otherPrice} <span style= {{color:'red',fontSize:'10px'}} >${or[day]?.compare}</span> </td>)}
              </tr>
            )
          }
          )}
          
  </tbody>
</table>
        </div>
    );
};

export default WeeklyRate;