import React from 'react';

import Data from '../Data/Data'
import './Datalist.css'
const Datalist=({RawData})=>{
	const dataComponent=RawData.map((user,i)=>{
		return <Data title={RawData[i].Title} 
		Category={RawData[i].Category} 
		Industry={RawData[i].Industry}
		Status={RawData[i].Status}
		Cost={RawData[i].Cost}
		Id={RawData[i].Id} 
		key={i} 
		Time={RawData[i].Time}
		Rate={RawData[i].Rate}/>
	})
	return(
		<div >
			{dataComponent}
		</div>
		);
}

export default Datalist;