import * as React from 'react';
import * as Inputs from '../../forms/items/Inputs';
import Touchable from '../../components/Touchable/Touchable';
import Request from '../../functions/Request';
import { Loading, Notify } from 'karcin-ui';

const defaultSaat = [
	{ title: '09:00', disabled: false },
	{ title: '10:00', disabled: false },
	{ title: '11:00', disabled: false },
	{ title: '12:00', disabled: false },
	{ title: '13:00', disabled: false },
	{ title: '14:00', disabled: false },
	{ title: '15:00', disabled: false },
	{ title: '16:00', disabled: false },
	{ title: '17:00', disabled: false }
]

export default class Randevu extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			adi: '', soyadi: '', telefon: '', tarih: '', saat: '', randevuyapan: 'Yakını',
			er_adi: false, er_soyadi: false, er_telefon: false, er_tarih: false, er_saat: false, er_randevuyapan: false,
			saatler: defaultSaat, saatDolu: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.validate = this.validate.bind(this);
		this.submit = this.submit.bind(this);
	}

	handleChange(name, value){
		this.setState({ [name]: value }, () => {
			if ( name === 'tarih' && value !== 'Invalid date' ) this.kontrolSaat();
		});
	}

	kontrolSaat(){
		Loading.add();
		const requestData = [this.state.tarih];

		const request = new Request();
		request.setHeaderToken();
		request.setData({
			method: 'appointmentControl',
			processor: 'appointment',
			data: requestData
		});

		request.run().then(result => {
			console.log(result);
			Loading.remove();
			const gelenler = result.resultMap[0].timeControl;
			let sabitSaatler = JSON.parse( JSON.stringify( defaultSaat ) );
			gelenler.map((item, index) => {
				let sIndex = sabitSaatler.findIndex( (sItem) => sItem.title === item.substr(0, 5) );
				if ( sIndex !== -1 ){
					sabitSaatler[sIndex].disabled = true;
				}
			});
			this.setState({ saatler: sabitSaatler, saat: '', er_saat: false }, () => {
				this.saatDoluKontrol();
			});
		});
	}

	async submit(){
		const valid = await this.validate();
		if ( valid ){
			Loading.add();

			const requestData = [{
				name: this.state.adi,
				surName: this.state.soyadi,
				phone: this.state.telefon,
				appoinmentDate: this.state.tarih,
				appoinmentHour: this.state.saat + ':00'
			}];

			const request = new Request();
			request.setHeaderToken();
			request.setData({
				method: 'add',
				processor: 'appointment',
				data: requestData
			});

			request.run().then(result => {
				Loading.remove();
				if ( result.code === 200 ){
					Notify.success({ message: 'Randevu başarıyla oluşturuldu.', time: 3 });
				}else if ( result.code === 900 ){
					Notify.error({ message: result.message, time: 3 });
				}
			});

		}else{
			if ( this.state.saatDolu ){
				Notify.error({ message: 'Seçilen güne ait tüm randevu saatleri maalesef dolmuştur.', time: 3 });
			}else{
				Notify.error({ message: 'Lütfen eksik bilgileri doldurun.', time: 3 });
			}
		}
	}

	validate(){
		const validInputNames = new Array('er_adi', 'er_soyadi', 'er_telefon', 'er_tarih', 'er_saat');

		const checkInputs = new Promise(resolve => {
			validInputNames.map((errorName, index) => {
				this.setState({ [errorName]: this.state[errorName.substr(3)].toString().trim().length === 0 });
			});
			this.setState({ er_telefon: this.state.telefon.length !== 14 });
			this.setState({ er_tarih: this.state.tarih === 'Invalid date' || this.state.tarih.toString().trim().length === 0 });
			setTimeout(() => { resolve(true); }, 200);
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

	saatDoluKontrol(){
		let saatler = this.state.saatler;
		let sonuc = saatler.filter(item => item.disabled);
		this.setState({ saatDolu: defaultSaat.length == sonuc.length });
	}

	render(){
		return(
			<div>
				<h1 className="title">Yeni Randevu Oluştur</h1>
				<div className="contentWhite">

					<div className="formItemFlex">
						<Inputs.InputDisable title="Randevuyu Yapan Personel" icon="fa-user" value="Hamdi Kellecioğlu" />
						<Inputs.RadioInput change={this.handleChange} title="Randevuyu Yapan"
							name="randevuyapan" value={this.state.randevuyapan} radioData={['Kendisi', 'Yakını']}
							error={this.state.er_randevuyapan} errorName="er_randevuyapan"
						/>
					</div>
					<div className="formItemFlex">
						<Inputs.DefaultInput change={this.handleChange} icon="fa-user" title="Adı"
							name="adi" value={this.state.adi} errorName="er_adi" error={this.state.er_adi}
						/>
						<Inputs.DefaultInput change={this.handleChange} icon="fa-user" title="Soyadı"
							name="soyadi" value={this.state.soyadi} errorName="er_soyadi" error={this.state.er_soyadi}
						/>
					</div>
					<div className="formItemFlex">
						<Inputs.PhoneNumberInput change={this.handleChange} icon="fa-phone" title="Telefon Numarası"
							name="telefon" value={this.state.telefon} errorName="er_telefon" error={this.state.er_telefon}
						/>
						<Inputs.DefaultDateInput change={this.handleChange} title="Randevu Tarihi" minDate={true}
							name="tarih" value={this.state.tarih} errorName="er_tarih" error={this.state.er_tarih}
						/>
					</div>
					<Inputs.SaatRadioInput change={this.handleChange} title="Randevu Saati"
						name="saat" value={this.state.saat} error={this.state.er_saat} errorName="er_saat"
						radioData={this.state.saatler}
					/>
					{ this.state.saatDolu && (
						<div className="randevuSaatDolu">Seçilen güne ait tüm randevu saatleri maalesef dolmuştur.</div>
					) }

					<Touchable
						title="Randevu Oluştur"
						icon="fa-check"
						press={this.submit}
						class="bigGreenButton mt20"
					/>

				</div>
			</div>
		);
	}

}