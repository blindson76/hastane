import * as React from 'react';
import Circle from 'react-circle';
import './style.scss';

class CircleProgress extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			value: 0
		}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({ value: this.props.toValue });
		}, 250);
	}

	render(){

		let { title } = this.props;
		if ( title === 'TOPLAM' ){ title = 'Toplam'; }
		if ( title === 'BEKLEMEDE' ){ title = 'Beklemede'; }
		if ( title === 'KABUL' ){ title = 'Kabul Edildi'; }
		if ( title === 'IPTAL' ){ title = 'İptal Edildi'; }

		return(
			<div className={ 'circleBeyaz ' + this.props.class }>
				<div className="circleSVG">
					<Circle
						progress={this.state.value}
						animate={true}
						animationDuration="2250ms"
						size="72"
						lineWidth="26"
						progressColor={this.props.color}
						bgColor="#f9f9f9"
						roundedStroke={false}
						showPercentage={false}
					/>
					<i className="circleValueText">{this.props.toValue}</i>
				</div>
				<div className="circleInfo">
					<div className="circleTitle">{title}</div>
					<div className="circleSubTitle">{this.props.subTitle}</div>
				</div>
			</div>
		);
	}

}

export default CircleProgress;