import * as React from 'react';
import { FaIcon, Message, Loading, Notify } from 'karcin-ui';
import Request from '../functions/Request';

class AnaEkranRandevular extends React.Component<any, any>{

	private node: React.RefObject<any>;

	constructor(props){ super(props);

		this.state = {
			show: false,
			item: this.props.item
		};

		this.node = React.createRef();

		this.change = this.change.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.randevuSil = this.randevuSil.bind(this);

	}

	change(){

		if ( !this.state.show ){
			window.addEventListener('click', this.handleOutsideClick, false);
		}else{
			window.removeEventListener('click', this.handleOutsideClick, false);
		}

		this.setState({ show: !this.state.show });

	}

	handleOutsideClick(e){
		if ( this.node.current.contains(e.target) ) return;
		this.change();
	}

	randevuSil(){
		Message.confirm({
			message: 'Seçilen veriyi silmek istediğinize emin misiniz?',
			color: 'secondary',
			title: 'Emin misiniz?',
			icon: 'fa-trash',
			callBack: (call) => {
				if ( call.response.name === 'OK' ){

					Loading.add();

					const request = new Request();
					request.setHeaderToken();
					request.setData({
						method: 'deleteById',
						processor: 'appointment',
						data: [this.state.item.id]
					});
					
					request.run().then(result => {
						Loading.remove();
						if ( result.code === 200 ){
							Notify.success({ message: 'Başarıyla silindi.',  time: 2 });
							this.props.press();
						}else if ( result.code === 900 ){
							Notify.error({ message: result.message, time: 3 });
						}
					});
				
				}
			}
		});
	}

	render(){
		return(
			<div className="randevuTabloTek" ref={this.node}>
				<span>{this.state.item.name + ' ' + this.state.item.surName}</span>
				<span>{ this.state.item.phone }</span>
				<span>{ this.state.item.appoinmentDate }</span>
				<span>{ this.state.item.appoinmentHour }</span>
				<span className="gorusmeButton">
					<b className={ 'stateGun3' }>2 gün kaldı.</b>
				</span>
				<span className="gorusmeButton">
					<u onClick={this.change} className={ this.state.show ? 'active' : '' }>
						<i></i>
						<i></i>
						<i></i>
					</u>
					<div className={ 'onGorusmeAcilir randevuAcilir' + ( this.state.show ? ' active' : '' ) }>
						<ul>
							<li>
								<a href="on-gorusme/54">
									<div className="onGorusmeAcilirSimge">
										<FaIcon code="fa-car" />
									</div>
									<div className="onGorusmeAcilirYazi">Ön Görüşmeye Taşı</div>
								</a>
							</li>
							<li>
								<a onClick={this.randevuSil}>
									<div className="onGorusmeAcilirSimge">
										<FaIcon code="fa-times" />
									</div>
									<div className="onGorusmeAcilirYazi">Randevuyu İptal Et</div>
								</a>
							</li>
						</ul>
					</div>
				</span>
			</div>
		);
	}

}

export default AnaEkranRandevular;