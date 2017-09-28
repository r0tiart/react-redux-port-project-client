import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap'



export default class WorksLists extends Component {

	constructor(props) {		
		super(props)

		var states = {};

		this.props.works.forEach( function(element) {		
			states[`number_${element.id}`] = 0
		})

		this.state = states
		console.log(this.state)
	}



	handleClick = (event) => {
				
	  this.setState({
        [event.target.id]: this.state[event.target.id] + 1       
      });
	}

	
	render(){
		const { works, id } = this.props

		if(id){

		  var renderWorks = works.map(work => 
		  	<ListGroupItem key={work.id}>
		  		 let n
		   		 <Link style={{ marginRight: '12px' }}  to={ `/users/${ id }/works/${ work.id }` }>{ work.title }</Link>
		   		 <button id={`number_${work.id}`} type="button" onClick={ this.handleClick.bind(this) }>Click Me!</button> <span>{ this.state[`number_${work.id}`] }</span>
		   	</ListGroupItem>
		     );
		} else {

		  var renderWorks = works.map(work => 
		  	<ListGroupItem key={work.id}>
		   		 <Link style={{ marginRight: '12px' }}  to={ `/works/${ work.id }` }>{ work.title }</Link>
		   		 <button id={`number_${work.id}`} type="button" onClick={ this.handleClick.bind(this) }>Click Me!</button> <span>{ this.state[`number_${work.id}`] }</span>
		   	</ListGroupItem>
		     );
	    }


    
		return (
		<div>
			<ListGroup>
				{ renderWorks }
			</ListGroup>
		</div>
		);
	}  
};

