import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { updateWork }  from '../actions/workActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';



class WorksLists extends Component {

	constructor(props) {		
		super(props)

		var states = {};

		this.props.works.forEach( function(work) {		
			states[`number_${work.id}`] = work.vote_count
		})

		this.state = states
	}



	handleClick = (event) => {
	
	  this.setState({
        [event.target.id]: this.state[event.target.id] + 1       
      });

      this.props.actions.updateWork( { vote_count: this.state[event.target.id] + 1 } , parseInt( event.target.id.split("_").pop() ) );
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

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({ updateWork }, dispatch)};
};

export default connect(null, mapDispatchToProps)(WorksLists);


