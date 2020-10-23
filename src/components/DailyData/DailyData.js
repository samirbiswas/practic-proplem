import React, { useEffect, useState } from 'react';

const DailyData = () => {
    const [dailyData, setDailyData] = useState([]);
    console.log(dailyData)
    useEffect(() => {
        fetch('https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison')
        .then(res=>res.json())
        .then(result=>{
            setDailyData(result.rateBody)
        })
    
    
      },[]);
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>

                <tbody>
                    { dailyData.map(dt=> 

                    <tr>
                        <th scope="row"> {dt.name}</th>
                        
                    </tr>
                )}
                </tbody>
        </table>
        </div>
    );
};

export default DailyData;