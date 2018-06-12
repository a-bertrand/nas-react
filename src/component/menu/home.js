import React from "react";
import axios from 'axios';

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
		  </div>
	    );
	}
}


export default Home_content; 