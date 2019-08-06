import * as React from 'react';
import { FaIcon } from 'karcin-ui';
import Touchable from '../../components/Touchable/Touchable';

class MyBreadcrumb extends React.Component<any, any>{

	render(){
		return(
			<div className="myBreadcrumb">
				{ this.props.viewData.map((item, index) => (
					<div key={index} className={ 'myBreadcrumbItem' + ( this.props.view > index ? ' active' : '' ) }>
						<em>{ '0' + (index + 1) }</em>
						<span>{ item }</span>
					</div>
				)) }
			</div>
		);
	}

}

class MyBreadcrumbButtons extends React.Component<any, any>{

	render(){
		return(
			<div className="formItemButtons">
				{ this.props.view !== 1 && (
					<div onClick={ () => { this.props.viewChange(false) } } className="prev">
						<span><FaIcon code="fa-angle-left" /></span>
						<b>Önceki</b>
					</div>
				) }
				{ this.props.view !== this.props.maxView ? (
					<div onClick={ () => { this.props.viewChange(true) } } className="next">
						<span><FaIcon code="fa-angle-right" /></span>
						<b>Sonraki</b>
					</div>
				) : (
					<Touchable
						title="Kaydet"
						icon="fa-check"
						press={this.props.submit}
						class="bigGreenButton"
					/>
				) }
			</div>
		);
	}

}

export { MyBreadcrumb, MyBreadcrumbButtons };