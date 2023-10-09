"use client"
import React, { useState } from 'react';
import Chart from '@/components/chart/Chart';

export default function Home() {

  const [activities, setActivities] = useState([
    {
      name: 'Fisheries',
      A: 40,
      I: 200,
      D:4
    },
    {
      name: 'Aquatic Vegetable Cultivation',
      A: 30,
      I: 150,
      D:5,
    },
  ]);

  // State for impact data
  const [deltaSoilMoisture, setDeltaSoilMoisture] = useState(15);
  const [deltaWaterTable, setDeltaWaterTable] = useState(3);
  const [deltaIrrigatedLand, setDeltaIrrigatedLand] = useState(500);

  // Function to calculate total income
  const calculateTotalIncome = () => {
    return activities.reduce(
      (acc, activity) => acc + activity.A * activity.I * 12 * activity.D,
      0
    );
  };

  // Calculate total income
  const totalIncome = calculateTotalIncome();



    return (
      <div className='' style={{padding:'70px 30px' , gap:'50px',display:'flex', flexDirection:'column-reverse', justifyContent:'space-around', alignItems:'center',backgroundColor:"#D9AFD9",backgroundImage:"linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"}}>
      <div className=''>
        <h1 style={{fontSize:'30px', fontWeight:'700', textAlign:'center'}}>Project Results</h1>
        <div>
          {activities.map((activity, index) => (
            <div key={index}>
              <h2>{activity.name}</h2>
              <label>
                Number of families involved:
                <input
                  type="number"
                  value={activity.A}
                  onChange={(e) => {
                    const updatedActivities = [...activities];
                    updatedActivities[index].A = parseInt(e.target.value, 10);
                    setActivities(updatedActivities);
                  }}
                  className="border border-gray-300 p-2 rounded"
                />
              </label>
              <br />
              <label>
                Average Monthly Income per Family:
                <input
                  type="number"
                  value={activity.I}
                  onChange={(e) => {
                    const updatedActivities = [...activities];
                    updatedActivities[index].I = parseInt(e.target.value, 10);
                    setActivities(updatedActivities);
                  }}
                  className="border border-gray-300 p-2 rounded"
                />
              </label>
            </div>
          ))}
        </div>
        <h5 style={{fontWeight:'700', marginBottom:'50px'}}>Total Income Generated: ₹{totalIncome}</h5>
        <label>
          Average Increase in Soil Moisture:
          <input
            type="number"
            value={deltaSoilMoisture}
            onChange={(e) => setDeltaSoilMoisture(parseInt(e.target.value, 10))}
            className="border border-gray-300 p-2 rounded"
          />
        </label>
        <br />
        <label>
          Average Increase in Water Table:
          <input
            type="number"
            value={deltaWaterTable}
            onChange={(e) => setDeltaWaterTable(parseInt(e.target.value, 10))}
            className="border border-gray-300 p-2 rounded"
          />
        </label>
        <br />
        <label>
          Total Additional Irrigated Land:
          <input
            type="number"
            value={deltaIrrigatedLand}
            onChange={(e) => setDeltaIrrigatedLand(parseInt(e.target.value, 10))}
            className="border border-gray-300 p-2 rounded"
          />
        </label>
      </div>
      <div>
        <h1 style={{fontSize:'30px', fontWeight:'700', textAlign:'center'}}>जीविका सृजन</h1>
        <Chart activities={activities} /> {/* Display the chart */}
      </div>
      </div>
  )
}
