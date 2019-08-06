import * as React from 'react';
import { FaIcon, Message, Notify, Loading } from 'karcin-ui';
import { DefaultInput, PhoneNumberInput, InputDisable } from '../forms/items/Inputs';
import Request from '../functions/Request';
import Touchable from '../components/Touchable/Touchable';

class YakinlarTablosu extends React.Component<any, any>{

	private node: React.RefObject<any>;

	constructor(props){ super(props);

		this.state = {
			show: false,
			updateShow: false,

			tckimlik: this.props.identityNumber,
			adi: this.props.name,
			soyadi: this.props.surName,
			yakinlik: this.props.relativeDegree,
			meslek: this.props.job,
			adresi: this.props.address,
			telefon: this.props.phone,

			error_adi: false,
			error_soyadi: false,
			error_yakinlik: false,
			error_meslek: false,
			error_adresi: false,
			error_telefon: false
		};

		this.node = React.createRef();
		
		this.change = this.change.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.delete = this.delete.bind(this);
		this.updateState = this.updateState.bind(this);
		this.inputValueChange = this.inputValueChange.bind(this);
		this.submit = this.submit.bind(this);

	}

	inputValueChange(name, value){ this.setState({ [name]: value }); }

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

					/* REQUEST - START */
			
					const request = new Request();
					request.setHeaderToken();
					request.setData({
						method: 'deleteById',
						processor: 'customerRelative',
						data: [this.props.id]
					});
					
					request.run().then(result => {
						Loading.remove();
						if ( result.code === 200 ){
							Notify.success({ message: 'Yaşlı yakını başarıyla silindi.', position: "top-right", time: 2 });
							this.props.press('loadingBottomWrapper');
						}else if ( result.code === 900 ){
							Notify.error({ message: result.message, position: "top-right", time: 2 });
						}
					});

					/* REQUEST - END */
				
				}
			}
		});
	}

	updateState(){ this.setState({ updateShow: !this.state.updateShow }); }

	async submit(){
		if ( await this.validate() ){
			
			Loading.add({ color: 'primary' });

			/* REQUEST - START */

			const requestData = [{
				customer: this.props.customer,
				id: this.props.id,
				name: this.state.adi,
				surName: this.state.soyadi,
				phone: this.state.telefon,
				relativeDegree: this.state.yakinlik,
				address: this.state.adresi,
				job: this.state.meslek,
				identityNumber: this.props.identityNumber,
				deleted: false
			}];
	
			const request = new Request();
			request.setHeaderToken();
			request.setData({
				method: 'update',
				processor: 'customerRelative',
				data: requestData
			});
			
			request.run().then(result => {
				Loading.remove();
				if ( result.code === 200 ){
					this.setState({ updateShow: false });
					Notify.success({ message: 'Yaşlı yakını başarıyla güncellendi.', position: "top-right", time: 2 });
					this.props.press('loadingBottomWrapper');
				}else if ( result.code === 900 ){
					Notify.error({ message: result.message, position: "top-right", time: 2 });
				}
			});

			/* REQUEST - END */

		}else{
			Notify.error({ message: "Eksik bilgileri lütfen doldurun.", position: "top-right", time: 5 });
		}
	}

	validate(){
		
		const validInputNames = new Array('error_adi', 'error_soyadi', 'error_yakinlik', 'error_meslek', 'error_adresi', 'error_telefon');

		const checkInputs = new Promise(resolve => {
			validInputNames.map((errorName, index) => {
				this.setState({ [errorName]: this.state[errorName.substr(6)].trim().length === 0 });
			});
			this.setState({ error_telefon: this.state.telefon.length !== 14 });
			setTimeout(() => { resolve(true); }, 400);
		});

		const checkInputValues = new Promise(resolve => {
			checkInputs.then(result => {
				let checkInputValue = false;
				validInputNames.map((errorName, index) => {
					if ( this.state[errorName] ) resolve(false);
				});
				resolve(true);
			});
		});

		return checkInputValues;

	}

	render(){
		return(
			<div className="yasliYakinlariTablo" ref={this.node}>
				<span className="first">{ this.props.identityNumber }</span>
				<span>{ this.props.name + ' ' + this.props.surName }</span>
				<span>{ this.props.relativeDegree } </span>
				<span>{ this.props.job }</span>
				<span>{ this.props.phone }</span>
				
				<span className="tabloUcNokta">
					<u onClick={this.change} className={ this.state.show ? 'active' : '' }>
						<i></i>
						<i></i>
						<i></i>
					</u>
					<div className={ 'onGorusmeAcilir' + ( this.state.show ? ' active' : '' ) }>
						<ul>
							<li>
								<a onClick={this.updateState}>
									<div className="onGorusmeAcilirSimge">
										<FaIcon code="fa-edit" />
									</div>
									<div className="onGorusmeAcilirYazi">Güncelle</div>
								</a>
							</li>
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
				<div className={'yakinlarUpdate' + (this.state.updateShow ? ' active' : '')}>
					<div className="yakinlarUpdateArea">
						<div className="yakinlarUpdateTitle">Yaşlı Yakını Güncelle</div>
						<div className="yakinlarUpdateWhite">
							<InputDisable
								title="T.C. Kimlik Numarası"
								icon="fa-key"
								value={this.state.tckimlik}
							/>
							<div className="formItemFlex">
								<DefaultInput
									title="Adı"
									icon="fa-user"
									name="adi"
									value={this.state.adi}
									error={this.state.error_adi}
									errorName="error_adi"
									change={this.inputValueChange}
								/>
								<DefaultInput
									title="Soyadı"
									icon="fa-user"
									name="soyadi"
									value={this.state.soyadi}
									error={this.state.error_soyadi}
									errorName="error_soyadi"
									change={this.inputValueChange}
								/>
							</div>
							<div className="formItemFlex">
								<DefaultInput
									title="Yakınlığı"
									icon="fa-user"
									name="yakinlik"
									value={this.state.yakinlik}
									error={this.state.error_yakinlik}
									errorName="error_yakinlik"
									change={this.inputValueChange}
								/>
								<DefaultInput
									title="Mesleği"
									icon="fa-user"
									name="meslek"
									value={this.state.meslek}
									error={this.state.error_meslek}
									errorName="error_meslek"
									change={this.inputValueChange}
								/>
							</div>
							<div className="formItemFlex">
								<DefaultInput
									title="Adresi"
									icon="fa-user"
									name="adresi"
									value={this.state.adresi}
									error={this.state.error_adresi}
									errorName="error_adresi"
									change={this.inputValueChange}
								/>
								<PhoneNumberInput
									title="Telefon Numarası"
									icon="fa-phone"
									name="telefon"
									value={this.state.telefon}
									error={this.state.error_telefon}
									errorName="error_telefon"
									change={this.inputValueChange}
								/>
							</div>
						</div>
						<div className="yakinlarUpdatesButtons">
							<div className="touchablesFlex">
								<Touchable
									title="Güncelle"
									icon="fa-check"
									press={this.submit}
									class="bigGreenButton"
								/>
								<Touchable
									title="Vazgeç"
									icon="fa-times"
									press={this.updateState}
									class="bigTransButton"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default YakinlarTablosu;