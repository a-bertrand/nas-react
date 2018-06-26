import React from "react";
import axios from 'axios';
import {WorkExperience, WorkCategory, generate_fake_data} from '../classes/WorkExperience';
import FontAwesomeIcon from 'react-fontawesome'
import WelcomePopup from '../welcomepopup';

/* ------------------------------------------------------------------------- */
class HomeContent extends React.Component 
{
	constructor(props) 
	{
	    super(props);
	}
	validateform(event)
	{
		let name = 'test'//event.target.name.value
		let pass = 'pass'//event.target.password.value
		event.preventDefault();
		/*
		const myApi = axios.create({
		  timeout: 10000,
		  withCredentials: true,
		  transformRequest: [(data) => JSON.stringify(data.data)],
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  }
		});*/
		let mydata = JSON.stringify({name:name, pass:pass})
		let url = 'http://nodejs.atlachnacha.synology.me/user/login'
		let config =  {headers: {
		    'Content-Type': 'application/json',
		  }}
		 /*
		console.log(mydata)
		///console.log(mydata)
		axios.post(url, {data: {
			name:name
		}},
		{ headers:{
				'Content-Type': 'application/json',
			}
		})*/
		const params = new URLSearchParams();
		params.append('name', name);
		params.append('pass', pass);
		axios({
		  method: 'post',
		  url: url,
		  data: params
		}).then(res => 
	      {
	        console.log(res);
	        console.log(res.data);
	      }).catch(function (error) 
	      {
		    console.log(error);
		  });;

/*
		axios.post('',{name:name, pass:pass},config).then(res => 
	      {
	        console.log(res);
	        console.log(res.data);
	      }).catch(function (error) 
	      {
		    console.log(error);
		  });
*/
	}
	generate_presentation(array)
	{

		let array_cat	= array[1]
		let array_exp	= array[0]
		let html = ''
		html += '<div class="col-md-6" id="cv-perso-persentation">'
		html += '<div class="row">'
		
		html += '<div class="col-md-4">'
		html += '<div class="box-pict-text">'
		html += '<img class="img-responsive profile-picture" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png"/>'
		html += '</div>'
		html += '</div>'

		html += '<div class="col-md-8">'
		html += '<div class="box-pict-text" id="personnal-information-box">'
		html += '<p>Anthony Bertrand</p>'
		html += '<p>Développeur informatique</p>'
		html += '<p>28, rue de la roseraie à Gières</p>'
		html += '<p>26 ans (04/07/1991)</p>'
		html += '<p>Permis B</p>'
		html += '</div>'
		html += '</div>'

		html += '<div class="col-md-12">'
		for (var i = array_cat.length - 1; i >= 0; i--) 
		{
			let current_cat = array_cat[i]
			if ( i == 5)
			{
				for (var j = 0; j < array_exp.length; j++) 
				{
					let current_exp = array_exp[j]
					if(current_exp.workcat == current_cat)
					{
						html += '<div class="card"><div class="card-header">'+current_exp.job_title+' | '+current_exp.company+' | '+current_exp.startdate.getFullYear()+' - '+current_exp.enddate.getFullYear()+'</div>';
						html += '<div class="card-body">'+current_exp.summary+'</div>'
						html += '</div>'
					}
				}
			}
		}
		html += '</div><!-- end of md12-->'
		html += '</div><!-- end of row -->'
		html += '</div><!-- end of md6 -->'

		return (html);
	}
	generate_data()
	{
		// 0 -> cat / 1 -> work exp
		let array 	= generate_fake_data()
		let array_cat	= array[1]
		let array_exp	= array[0]
		let html = this.generate_presentation(array)
		for (var i = 4; i >= 0; i--) 
		{
			let current_cat = array_cat[i]
			if ( i == 3)
			{
				html += '<div class="col-md-6" id="exp_pro"><h2>'+current_cat.title+'</h2>';
				for (var j = 0; j < array_exp.length; j++) 
				{
					let current_exp = array_exp[j]
					if(current_exp.workcat == current_cat)
					{
						let startdate;
						if(current_exp.startdate.getMonth()+1 < 10)
						{
							startdate = '0'+(current_exp.startdate.getMonth()+1)+'.'+current_exp.startdate.getFullYear()
						}
						else
						{
							startdate = (current_exp.startdate.getMonth()+1)+'.'+current_exp.startdate.getFullYear()
						}
						let enddate = "Aujourd'hui"
						if (current_exp.enddate == 'actuel')
						{/*nothing*/} 
						else
						{
							if(current_exp.enddate.getMonth()+1 < 10)
							{
								enddate = '0'+(current_exp.enddate.getMonth()+1)+'.'+current_exp.enddate.getFullYear()
							}
							else
							{
								enddate = (current_exp.enddate.getMonth()+1)+'.'+current_exp.enddate.getFullYear()
							}
							
						}
						html += '<div class="card"><div class="card-header">'+current_exp.job_title+' | '+current_exp.company+' | '+startdate+' - '+enddate+'</div>';
						html += '<div class="card-body">'+current_exp.summary+'</div>'
						html += '</div>'
					}
				}
				html += '</div>';
			}
			else if (i== 0 || i == 1 || i == 2) 
			{
				html += '<div class="col-md-6">'
				html += '<table class="table"><thead><tr> <th>'+current_cat.title+'</th></tr></thead><tbody>'
				for (var j = array_exp.length - 1; j >= 0; j--) 
				{
					let current_exp = array_exp[j]
					let level_display = ''
					for (var x = 0; x < 10; x++) 
					{
						if ( x < current_exp.level )
						{
							level_display += "<span style='width:20px;height:20px;'> <i class='fa fa-circle'></i> </span>"
						}
						else
						{
							level_display += "<span style='width:20px;height:20px;'> <i class='fa fa-circle fa-opacity-half'></i> </span>"
						}
					}
					if(current_exp.workcat == current_cat)
					{
						html += '<tr><td>'+current_exp.title+'</td><td class="text-left">'+level_display+'</td></tr>'
					}
					
				}
				html += '</tbody></table></div>'
			}
		}
		return (html);
	}
	render()
	{
	    return(
	    	
			<div>
				<hr />
			  	<div className="row" dangerouslySetInnerHTML={{__html: this.generate_data()}} >
			  	</div>
				<div >
		    		<WelcomePopup />
		    	</div>
			</div>
	    );
	}
}


export default HomeContent; 