import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './Data.css'
import {ButtonToolbar,Button} from 'react-bootstrap';
const Data=(props)=>{
	let Statusbutton;
	let color;
	if(props.Status==='Editorial Review')
	{
		Statusbutton='warning';
		color='#ffc107';
	}
	else if(props.Status==='Completed')
	{
		Statusbutton='success';
		color='#28a745';
	}
	else if(props.Status==='Revision Requested')
	{
		Statusbutton='primary';
		color='#007bff';
	}
	else if(props.Status==='Deadline Missed')
	{
		Statusbutton='danger';
		color='#dc3545';
	}

	let button='View';
	if(props.Status==='Revision Requested')
	{
		button='Revise';
	}

	const buttonstyle={
		borderLeft:'2px solid',
		borderLeftColor:color
	}

	let value;
	if(props.Time==='0')
	{
		value=<><i className="las la-star" style={{color:'#ffc107'}}></i> {props.Rate}</>
	}
	else
	{
		value=<><i class="las la-stopwatch"></i> {props.Time}</>
	}
	return(
		<div className='CardParent shadow-3 mb2' style={buttonstyle}>
			<Row className='pl5'>
				<Col>
					<Row>
						<h4>{props.title}</h4>
					</Row>
					<Row>
						<h6>{props.Category} | {props.Industry} | 400 Words</h6>
					</Row>
				</Col>
				<Col>
					<h4 >{props.Cost}</h4>
				</Col>
				<Col>
					<ButtonToolbar>
						<Button variant={Statusbutton} size="sm" className='status' >{props.Status}</Button>
					</ButtonToolbar>
				</Col>
				<Col>
					{value}
				</Col>
				<Col>
					<ButtonToolbar>
						<Button variant='outline-info' size='sm' className='button' >{button}</Button>
					</ButtonToolbar>
				</Col>
				
				
				
				
			</Row>
			

		</div>
		);
}

export default Data;