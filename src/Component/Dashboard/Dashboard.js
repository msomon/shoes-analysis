import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LineChart } from 'recharts';

import './Dashboard.css'

const Dashboard = () => {
  const data=[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
  return (
      
    <div className='board'>
         <div className='area-chart'>
         <h1>Month Wise Sell </h1>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
  
      </div>
      <div className='line-chart'>
        <h1>Investment VS Revenue</h1>
      <LineChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis dataKey='investment' />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r:8 }} />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
      </div> 
    </div>
      
   
    
  
  );
};

export default Dashboard;