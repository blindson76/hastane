import * as React from 'react';
import { connect } from 'react-redux';
import { FaIcon } from 'karcin-ui';

class SearchBox extends React.Component<any, any>{

	private node: React.RefObject<any>;

	constructor(props){ super(props);

		this.node = React.createRef();
		this.setSearchBox = this.setSearchBox.bind(this);

	}

	setSearchBox(){ this.props.reduxFunc('setSearchBox', false); }

	componentDidMount(){
		this.props.reduxFunc('setSearchInput', this.node);
	}

	render(){
		return(
			<div>
				<div className={ 'searchBox' + ( this.props.searchBox ? ' active' : '' ) }></div>
				<div className="searchForm">
					<form>
						<input ref={this.node} type="text" placeholder="Ara" />
						<div onClick={this.setSearchBox} className="searchClose">
							<FaIcon code="fa-times" />
						</div>
					</form>
				</div>
			</div>
		);

	}

}

const mapStateToProps = (state) => {
	return {
		searchBox: state.searchBox,
		searchInput: state.searchInput
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		reduxFunc: (type, payload) => dispatch({ type: type, payload: payload })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);