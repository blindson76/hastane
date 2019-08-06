import * as React from 'react';
import { FaIcon, Message, Notify, Loading } from 'karcin-ui';
import Request from '../functions/Request';
import { getDateTR } from '../functions/Functions';
import ReactToPrint from 'react-to-print';
import OnGorusme from '../forms/print/OnGorusme';

class BekleyenOnGorusme extends React.Component<any, any>{

	private node: React.RefObject<any>;
	private printPage: React.RefObject<any>;

	constructor(props){ super(props);

		this.state = {
			show: false,
			customer: this.props.data.customer,
			customerRelative: this.props.data.customerRelative
		};

		this.node = React.createRef();
		this.printPage = React.createRef();
		
		this.change = this.change.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.delete = this.delete.bind(this);

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

	delete(){
		Message.confirm({
			message: 'Seçilen veriyi silmek istediğinize emin misiniz?',
			color: 'secondary',
			title: 'Emin misiniz?',
			icon: 'fa-trash',
			callBack: (call) => {
				if ( call.response.name === 'OK' ){

					Loading.add({ color: 'primary' });

					const request = new Request();
					request.setHeaderToken();
					request.setData({
						method: 'deleteById',
						processor: 'customer',
						data: [this.state.customer.id]
					});
					
					request.run().then(result => {
						Loading.remove();
						if ( result.code === 200 ){
							Notify.success({ message: 'Başarıyla silindi.', position: "top-right", time: 2 });
							setTimeout(() => { window.location.reload(); }, 1000);
						}else if ( result.code === 900 ){
							Notify.error({ message: result.message, position: "top-right", time: 2 });
						}
					});
				
				}
			}
		});
	}

	render(){

		let { customerSituation } = this.state.customer;
		let customerSituationText = '';

		if ( customerSituation === 'BEKLEMEDE' ){ customerSituationText = 'Beklemede'; }
		if ( customerSituation === 'KABUL' ){ customerSituationText = 'Kabul Edildi'; }
		if ( customerSituation === 'IPTAL' ){ customerSituationText = 'İptal Edildi'; }

		return(
			<div className="bekleyenOnGorusme" ref={this.node}>
				<span>{ this.state.customer.identityNumber }</span>
				<span>{ this.state.customer.name + ' ' + this.state.customer.surName }</span>
				<span>{ this.state.customer.gender }</span>
				<span>{ getDateTR(this.state.customer.createDate, true) }</span>
				<span className="gorusmeButton">
					<b className={ 'state' + customerSituation }>{ customerSituationText }</b>
				</span>
				<span className="gorusmeButton">
					<u onClick={this.change} className={ this.state.show ? 'active' : '' }>
						<i></i>
						<i></i>
						<i></i>
					</u>
					<div className={ 'onGorusmeAcilir' + ( this.state.show ? ' active' : '' ) }>
						<ul>
							<li>
								<a href="on-gorusme/54">
									<div className="onGorusmeAcilirSimge">
										<FaIcon code="fa-edit" />
									</div>
									<div className="onGorusmeAcilirYazi">Güncelle</div>
								</a>
							</li>
							<ReactToPrint
								trigger={() => (
									<li>
										<a>
											<div className="onGorusmeAcilirSimge">
												<FaIcon code="fa-print" />
											</div>
											<div className="onGorusmeAcilirYazi">Yazdır</div>
										</a>
									</li>
								)}
								content={() => this.printPage.current}
							/>
							<li>
								<a onClick={this.delete}>
									<div className="onGorusmeAcilirSimge">
										<FaIcon code="fa-times" />
									</div>
									<div className="onGorusmeAcilirYazi">Sil</div>
								</a>
							</li>
						</ul>
					</div>
				</span>
				<OnGorusme customer={this.state.customer} customerRelative={this.state.customerRelative} ref={this.printPage} />
			</div>
		);
	}

}

export default BekleyenOnGorusme;