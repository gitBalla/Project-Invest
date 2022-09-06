import React from 'react';
import { Media } from 'reactstrap';
import './dashboard.css';

class Dashboard extends React.Component {
	
	render(){
		
		const dashboard = this.props.projects.map((project) => {
			return(
				<div key={project.id} id="unit" className="col-6 mt-4">
					<div class='d-flex align-items-center'>
						<div class="flex-shrink-0">
							<img src={project.image} alt={project.name} />
						</div>
						<div class="flex-grow-1 ms-3">
							<h3><strong>{project.name}</strong></h3>
							<h5><strong>State - </strong>{project.category}</h5>
							<h5><strong>Info - </strong>{project.description}</h5>
						</div>
					</div>  
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{dashboard}
					</Media>
				</div>
			</div>
		);
	}
}

export default Dashboard;