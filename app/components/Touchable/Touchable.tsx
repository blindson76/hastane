import * as React from 'react';
import { FaIcon } from 'karcin-ui';
import './style.scss';

export default class Touchable extends React.Component<any, any>{
	render(){
		return(
			<div onClick={this.props.press} className={this.props.class}>
				<FaIcon code={this.props.icon} />
				<div className="touchableText">{this.props.title}</div>
			</div>
		);
	}
}