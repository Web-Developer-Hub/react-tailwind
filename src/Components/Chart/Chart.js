import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
        food: 1232,
        sell: 123
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
        food: 6532,
        sell: 523
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 11800,
        amt: 8290,
        food: 2232,
        sell: 4323
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
        food: 6832,
        sell: 16203
    },
    {
        name: "Page E",
        uv: 11890,
        pv: 4800,
        amt: 2181,
        food: 2332,
        sell: 3323
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 9500,
        food: 6232,
        sell: 5123
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
        food: 3232,
        sell: 12223
    }
];

const Chart = () => {

    return (
        <div className=' max-w-7xl m-auto mt-3 mb-12'>
            <LineChart
                width={1200}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amt" stroke="blue" />
                <Line type="monotone" dataKey="food" stroke="red" />
                <Line type="monotone" dataKey="sell" stroke="green" />
            </LineChart>
        </div>
    );
};

export default Chart;
