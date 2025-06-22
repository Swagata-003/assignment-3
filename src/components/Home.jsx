import React from 'react'
import {BsBookFill,BsFillGrid3X3GapFill,BsPersonFill} from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle} from 'recharts';
import './Hm.css';
function Home(){
  const data = [
    {
      name: 'February',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'March',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'April',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'May',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'June',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'July',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'August',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
        <main className='main-container'>
          <div className='main-title'>
            <h3>DASHBOARD</h3>
          </div>
          <div className='main-cards'>
            <div className='card'>
              <div className='cards-inner'>
                <h3>Books Available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsBookFill className='card-icon'/></h3>  
                <h3>500</h3>
              </div>
            </div>
            <div className='card'>
              <div className='cards-inner'>
                <h3>Categories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsFillGrid3X3GapFill className='card-icon'/></h3>
                <h3>9</h3>
              </div>
            </div>
            <div className='card'>
              <div className='cards-inner'>
                <h3>Books Borrowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsBookFill  className='card-icon'/></h3>
                <h3>100</h3>
              </div>
            </div>
            <div className='card'>
              <div className='cards-inner'>
                <h3>Regular Traffic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsPersonFill  className='card-icon'/></h3>
                <h3>1000</h3>
              </div>
            </div>
            </div>
            <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

          </div>
        </main>
    </>
  )
}

export default Home
