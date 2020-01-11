import React,{Component} from 'react';



import Datalist from '../../Components/DataList/Datalist';
import {RawData} from '../../RawData';
import {Row,Col} from 'react-bootstrap';

import './Content.css'


class  Content extends Component{
	constructor()
	{
		super();
		this.state={
			category:'',
			industry:'',
			status:'',
			Rawdata:RawData,
		}
	}

	ChangeCategory=(event)=>{
		if(event.target.value!=='All Content Category')
		{
			this.setState({category:event.target.value});
		}
	
	}

	ChangeIndustry=(event)=>{
		if(event.target.value!=='All Industry')
		{
			this.setState({industry:event.target.value});
		}
		
	}

	ChangeStatus=(event)=>{
		if(event.target.value!=='Status')
		{
			this.setState({status:event.target.value});
		}
		
	}

	ClearFilters=()=>{
		this.setState({category:''});
		this.setState({industry:''});
		this.setState({status:''});
		var dropDown = document.getElementById("cat");
		var dropDown1 = document.getElementById("ind");
		var dropDown2 = document.getElementById("stat");
        dropDown.selectedIndex = 0;
        dropDown1.selectedIndex = 0;
        dropDown2.selectedIndex = 0;
	}

	render()
	{
		//Filtering data as per filters(Category,Industry,Status)
		const FilteredData=this.state.Rawdata.filter(data=>{
			return data.Category.includes(this.state.category);
		});
		const FilteredData1=FilteredData.filter(data=>{
			return data.Industry.includes(this.state.industry);
		});
		const FilteredData3=FilteredData1.filter(data=>{
			return data.Status.includes(this.state.status);
		});

		//Fetching all Category,Industry,Status
		const Content=RawData.map((user,i)=>{
		return <option  key={i} value={RawData[i].Category}>{RawData[i].Category}</option>
		});
		const Industry=RawData.map((user,i)=>{
		return <option  key={i}  value={RawData[i].Industry}>{RawData[i].Industry}</option>
		});
		const Status=RawData.map((user,i)=>{
		return <option  key={i}  value={RawData[i].Status}>{RawData[i].Status}</option>
		});
		

	return(
		
			<div className='content-parent '>
			<center>
			
				<div className='parent'>
					
					<Row><h1 className='pl3'>Your Jobs</h1></Row>
					<Row>
						<Col  xs={12} sm={12} md={6} lg={6} >
							<Row>
								<Col  xs={12} sm={12}  lg={4} >
									<select id='cat' name='content' onChange={this.ChangeCategory}>
									
										<option value='0'>All Content Category</option>
									  	{Content}
									</select>
								</Col>
								<Col xs={12} sm={12}  lg={4}>
									<select id='ind' name='industry' onChange={this.ChangeIndustry}>
										<option value='0'>All Industry</option>
									  	{Industry}
									</select>
								</Col>
								<Col xs={12} sm={12}  lg={4}>
									<select id='stat' name='status' onChange={this.ChangeStatus}>
										<option value='0'>Status</option>
									  	{Status}
									</select>
								</Col>
							</Row>	
						</Col>

						<Col  xs={12} sm={12} md={2} lg={2} className='tl'>
							<button className='clear' onClick={this.ClearFilters}>Clear All</button>
						</Col>

						<Col   xs={12} sm={12} md={4} lg={4}>
							<Row>
								<Col xs={12} sm={12}  lg={6}>
									<span>Displaying 1-8 of 123 jobs</span>
								</Col>
								<Col xs={12} sm={12}  lg={6}>
									<select className='time'>

										<option>Least time left first</option>
							  			<option>Max time left first</option>
									</select>
								</Col>
							</Row>
						</Col>
						

						
						
						
					</Row>
					<Row >
						<div className='data'>
							<Datalist RawData={FilteredData3}/>
						</div>
					</Row>
				</div>

			</center>
			</div>
		
		);
	}
	
}

export default Content;