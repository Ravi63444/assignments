import React from 'react';

import './Header.css'

const Header=()=>{
	return(
		<div className='top shadow-5 tr  '>
			<div className='dib  fl ml4'>
				<b>YourLogo</b>
			</div>
			<div className='dib '>
				<img src='https://cdn1.iconfinder.com/data/icons/ui-22/24/391-512.png' 
				height='20px' width='20px' className='mr3' alt=''/>
				<div className='br-100 dib ba pa1 bg-green mr5'>
					AB
				</div>
			</div>
		</div>
		);
}

export default Header;