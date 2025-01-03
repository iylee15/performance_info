'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Test() {
    const [data, setData] = useState([]);

    const fetchApiData = async () => {
        let serviceKey = 'ffb2e5d6f87f41ca9e2a3314ff44adad';
        let stdate = 20230401;
        let eddate = 20230430;
        let cpage = 1;
        let row = 10;
        let url = 'https://kopis.or.kr/openApi/restful/pblprfr?service=' + serviceKey + '&stdate='+stdate+'&eddate='+eddate+'&cpage='+cpage+'&rows='+row+'&signgucode=11&signgucodesub=1111';
    
        const allPerformanceData = [];
        for (let i = 1; i <= 10; i++){
            const response = await axios.get(`https://kopis.or.kr/openApi/restful/pblprfr?service=${serviceKey}&stdate=20230401&eddate=20230430&cpage=${i}&rows=10&signgucode=11&signgucodesub=1111`);
            allPerformanceData.push({...response.data});
        }
        // const { apiData } = await axios.get(url);
        // setData(apiData);
        setData(allPerformanceData);
    }

    useEffect(()=>{
        fetchApiData();
    },[]);

    return (
        <div>
            <h1>테스트용 컴포넌트</h1>
            <p>공연정보</p>
            {/* 여기 공연정보 표시 */}
        </div>
    );
};