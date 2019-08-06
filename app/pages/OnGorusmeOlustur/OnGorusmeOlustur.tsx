import * as React from 'react';
import OnGorusme from '../../forms/submit/OnGorusme';
import CircleProgressLayout from '../../components/CircleProgress/Layout';

class YeniOnGorusme extends React.Component<any, any>{

	constructor(props){ super(props);
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	}

	render(){
		return(
			<div>
				<h1 className="title">Yeni Ön Görüşme</h1>
				<CircleProgressLayout />				

				<div className="contentWhite">

					<OnGorusme />

				</div>
			</div>
		);
	}

}

export default YeniOnGorusme;