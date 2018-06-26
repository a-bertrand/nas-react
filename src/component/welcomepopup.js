import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width :'400px',
    transform             : 'translate(-50%, -50%)',
    color 				  : 'black'
  }
};
class WelcomePopup extends React.Component 
{
	constructor() 
	{
		super();

		this.state = {
			modalIsOpen: true
		};

		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}
	render() 
	{
		return(
			<div>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal">
					<h2><i className="fa fa-info-circle"></i> Information</h2>
					<p>
						Site en construction, hébergé chez moi, avec une connection
						ADSL avec un débit montant de environ 50-70 ko/sec...
						Donc certain projet risque d'être long voir très long à charger. 
						Merci de votre compréhension. 
					</p>
					<button className="pull-right" onClick={this.closeModal}>Fermer</button>
				</Modal>
			</div>
		);
	}
}

export default WelcomePopup;
