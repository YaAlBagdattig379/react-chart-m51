import axion from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart ,Tooltip } from 'recharts';
// use of " axios as a fetch"
const SpecialChart = () => {
    const [phones,SetPhones] = useState([]);//to load data
    useEffect(()=>{
        axion.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loadedData = data.data.data
            const phoneData = loadedData.map(phone =>{
               const parts = phone.slug.split('-');
               const ph={
                 name : parts[0],
                 value : parseInt(parts[1]),
               };
               return ph;
               
            })
            SetPhones(phoneData)
        })
    },[])
    return (
        <BarChart width={750} height={340} data={phones}>
           <Bar dataKey="value" fill="#8884d8" />
           <Tooltip/>
        </BarChart>
    );
};

export default SpecialChart;