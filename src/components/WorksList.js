import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { updateWork }  from '../actions/workActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';



class WorksLists extends Component {

	


	handleClick = (event) => {
	
	

      this.props.actions.updateWork( { vote_count: this.state[event.target.id] + 1 } , parseInt( event.target.id.split("_").pop() ) );
	}

	
	render(){
		const { works, id } = this.props
		if(id){
		  var renderWorks = works.sort( (work_1, work_2) => { return work_2.vote_count - work_1.vote_count } ).map(work => 
		  	<ListGroupItem key={work.id}>
		  		 let n
		   		 <Link style={{ marginRight: '12px' }}  to={ `/users/${ id }/works/${ work.id }` }>{ work.title }</Link>
		   		 <button id={`number_${work.id}`} type="button" onClick={ this.handleClick.bind(this) }>Click Me!</button> <span>{ work.vote_count }</span>
		   	</ListGroupItem>
		     );
		} else {

		  var renderWorks = works.sort( (work_1, work_2) => { return work_2.vote_count - work_1.vote_count } ).map(work => 
		  	<ListGroupItem key={work.id}>
		   		 <Link style={{ marginRight: '12px' }}  to={ `/works/${ work.id }` }>{ work.title }</Link>
		   		 <button id={`number_${work.id}`} type="button" onClick={ this.handleClick.bind(this) }>Click Me!</button> <span>{ work.vote_count }</span>
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


