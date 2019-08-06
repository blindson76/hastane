import * as React from 'react';
import CircleProgress from './CircleProgress';
import Request from '../../functions/Request';
import { Loading } from 'karcin-ui';

export default class Layout extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			data: [],
			toplam: []
		};
		this.getData();
	}

	componentDidMount(){
		Loading.add({ color: 'primary', id: 'loading' });
	}

	getData(){
		const request = new Request();
		request.setHeaderToken();
		request.setData({
			method: 'interViewResult',
			processor: 'dashboard'
		});
		
		request.run().then(result => {
			let data = [];
			let toplamValue = 0;
			let colors = {
				TOPLAM: '#646c9a',
				BEKLEMEDE: '#ffb822',
				KABUL: '#0abb87',
				IPTAL: '#fd397a'
			}
			result.resultMap.map((item, index) => {
				toplamValue = toplamValue + item.customerCount;
				data.push({
					title: item.Status,
					value: item.customerCount,
					color: colors[ item.Status ]
				});
			});
			let toplam = {
				title: 'TOPLAM',
				value: toplamValue,
				color: colors[ 'TOPLAM' ]
			};
			data.unshift(toplam);
			this.setState({ data }, () => {
				Loading.remove({ id: 'loading' });
			});

		});
	}

	render(){
		return(
			<div id="loading" className="circleTrans mb20">
				{ this.state.data.map((item, index) => (
					<CircleProgress
						key={index}
						toValue={item.value}
						color={item.color}
						class={item.title}
						title={item.title}
						subTitle="Ağustos ayı için"
					/>
				)) }
			</div>
		);
	}

}