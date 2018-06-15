import React from "react";
import axios from 'axios';
import {WorkExperience, WorkCategory, generate_fake_data} from '../classes/WorkExperience';
import FontAwesomeIcon from 'react-fontawesome'

class Home_content extends React.Component 
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
	generate_data()
	{
		// 0 -> cat / 1 -> work exp
		let array 	= generate_fake_data()
		let array_cat	= array[1]
		let array_exp	= array[0]
		console.log(array_cat,array_exp)
		let html = '<div class="row">'
		for (var i = array_cat.length - 1; i >= 0; i--) 
		{
			let current_cat = array_cat[i]
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
						level_display += "<span style='width:20px;height:20px;'> <i class='far fa-circle'></i> </span>"
					}
				}
				if(current_exp.workcat == current_cat)
				{
					html += '<tr><td>'+current_exp.title+'</td><td class="text-left">'+level_display+'</td></tr>'
				}
				
			}
			html += '</tbody></table></div>'
		}
		html += '</div>'
		console.log(array)
		return (html);
	}
	render()
	{
	    return(
	      <div>
		    <h2>Home</h2>
		    <form onSubmit={this.validateform}>
				<div className="input-form">
					<label>name</label>
					<input type="text" name="name"/>
				</div>
				<div className="input-form">
					<label>password</label>
					<input type="text" name="password"/>
				</div>
				<button type="submit"> Valider </button>
			</form>
				<hr />
			  <div dangerouslySetInnerHTML={{__html: this.generate_data()}} >
		      </div>
		  </div>
		  
	    );
	}
}


export default Home_content; 