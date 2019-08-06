import * as React from 'react';
import { Loading, Notify, FaIcon } from 'karcin-ui';
import { BasicInput, DefaultInput, RadioInput, CheckListInput, PhoneNumberInput, TCKimlikInput, NumberInput, DefaultDateInput } from '../items/Inputs';
import Request from '../../functions/Request';
import { MyBreadcrumb, MyBreadcrumbButtons } from '../items/MyBreadcrumb';
import { checkTCKimlik } from '../../functions/Functions';
import Touchable from '../../components/Touchable/Touchable';
const linkStart = window['config'].linkStart;

class OnGorusme extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {

			formEndShow: false,

			viewData: [
				'Yaşlıya Ait Bilgiler',
				'Yaşlının Sağlık Durumu',
				'Yaşlı Yakınlarına Ait Bilgiler'
			],
			view: 1,

			yasli_tckimlik: '',
			yasli_adi: '',
			yasli_soyadi: 'Soyadı',
			yasli_dogumtarihi: '1978-05-24',
			yasli_dogumyeri: 'Kayseri',
			yasli_cinsiyet: 'Erkek',
			yasli_medeni: 'Evli',
			yasli_meslek: 'Mühendis',
			yasli_sosyalguv: 'Bağkur',
			yasli_maas: 'Maaş Normal Seviye',
			yasli_alacagihizmet: 'Bakım Hizmeti',
			yasli_odatipi: 'Suit',

			yasli_engeldurumu: [],
			yasli_varsahastalik: 'Hastalık Yok',
			yasli_takipedildigi: 'Takip Yok',
			yasli_gecirdigihastaliklar: 'Kolu kırılmış sadece',

			yasli_yakinlari: [
				{
					tckimlik: '',
					adi: 'Fadime',
					soyadi: 'Kılıç',
					yakinlik: 'Kuzeni',
					meslek: 'Ev Hanımı',
					adresi: 'Mevlana Mah. Arda Apartmanı. No: 78 / 12 - KONYA',
					telefon: ''
				}
			],
			yasli_yakinlari_error: false,

			error_yasli_tckimlik: false,
			error_yasli_adi: false,
			error_yasli_soyadi: false,
			error_yasli_dogumyeri: false,
			error_yasli_dogumtarihi: false,
			error_yasli_cinsiyet: false,
			error_yasli_medeni: false,
			error_yasli_meslek: false,
			error_yasli_sosyalguv: false,
			error_yasli_maas: false,
			error_yasli_alacagihizmet: false,
			error_yasli_odatipi: false,

			error_yasli_engeldurumu: false,
			error_yasli_varsahastalik: false,
			error_yasli_takipedildigi: false,
			error_yasli_gecirdigihastaliklar: false,

			kayitDonenDeger: {},
			guncelleme: false
		};

		this.inputValueChange = this.inputValueChange.bind(this);
		this.submit = this.submit.bind(this);
		this.viewChange = this.viewChange.bind(this);
		this.yakinlarChange = this.yakinlarChange.bind(this);
		this.yakinEkle = this.yakinEkle.bind(this);

	}

	inputValueChange(name, value){ this.setState({ [name]: value }); }

	submit(e){
		e.preventDefault();
		if ( this.validate() ){

			Loading.add({ color: "primary" });

			let customerRelative = [];
			this.state.yasli_yakinlari.map((item, index) => {
				customerRelative.push({
					customer: this.state.kayitDonenDeger,
					identityNumber: item.tckimlik,
					name: item.adi,
					surName: item.soyadi,
					phone: item.telefon,
					relativeDegree: item.yakinlik,
					address: item.adresi,
					job: item.meslek
				});
			});

			if ( customerRelative.length !== 0 ){
				
				const promise = new Promise(resolve => {

					let sonuclar = [];
					
					customerRelative.map((item, index) => {
						const request = new Request();
						request.setHeaderToken();
						request.setData({
							method: 'add',
							processor: 'customerRelative',
							data: [ item ]
						});
						request.run().then(result => {
							sonuclar.push(result.code);
						});
					});

					resolve(sonuclar);

				});

				promise.then(result => {
					
					Notify.success({ message: 'Yaşlı yakınları başarıyla kayıt edildi.', position: "top-right", time: 3 });
					Loading.remove();
					this.setState({ formEndShow: true });

				});

			}else{
				Notify.success({ message: 'Yaşlı yakınları başarıyla kayıt edildi.', position: "top-right", time: 3 });
				Loading.remove();
				this.setState({ formEndShow: true });
			}

		}else{
			Notify.error({ message: "Eksik bilgileri lütfen doldurun.", position: "top-right", time: 5 });
		}

	}

	validate(){

		let error_yasli_yakinlari = [];
		for ( let i = 0; i < this.state.yasli_yakinlari.length; i++ ){
			let variables = Object.keys(this.state.yasli_yakinlari[i]);
			for ( let k = 0; k < variables.length; k++ ){
				let item = this.state.yasli_yakinlari[i][ variables[k] ];
				if ( variables[k] === 'tckimlik' ){
					error_yasli_yakinlari.push( !checkTCKimlik(item) );
				}else if ( variables[k] === 'telefon' ){
					error_yasli_yakinlari.push( item.toString().trim().length !== 14 );
				}else{
					error_yasli_yakinlari.push( item.toString().trim().length === 0 );
				}
			}
		}

		this.setState({ yasli_yakinlari_error: error_yasli_yakinlari.indexOf(true) !== -1 });
		return error_yasli_yakinlari.indexOf(true) === -1;

	}

	viewChange(bool){
		if ( bool ){

			if ( this.state.view === 1 ){

				const validInputNames = new Array('error_yasli_tckimlik', 'error_yasli_adi', 'error_yasli_soyadi', 'error_yasli_dogumyeri', 'error_yasli_dogumtarihi', 'error_yasli_cinsiyet', 'error_yasli_medeni', 'error_yasli_meslek', 'error_yasli_sosyalguv', 'error_yasli_maas', 'error_yasli_alacagihizmet', 'error_yasli_odatipi');

				const checkInputs = new Promise(resolve => {
					validInputNames.map((errorName, index) => {
						this.setState({ [errorName]: this.state[errorName.substr(6)].trim().length === 0 });
					});
					this.setState({ error_yasli_tckimlik: !checkTCKimlik(this.state.yasli_tckimlik) });
					setTimeout(() => { resolve(true); }, 400);
				});

				const checkInputValues = new Promise(resolve => {
					checkInputs.then(result => {
						let checkInputValue = false;
						validInputNames.map((errorName, index) => {
							if ( this.state[errorName] ) resolve(true);
						});
						resolve(false);
					});
				});

				checkInputValues.then(result => {
					if ( !result ){
						this.setState({ view: this.state.view + 1 });
						window.scroll({ top: 0, left: 0, behavior: 'smooth' });
					}else{
						Notify.error({ message: "Eksik bilgileri lütfen doldurun.", position: "top-right", time: 5 });
					}
				});

			}else if ( this.state.view === 2 ){
				this.customerStep2();
			}

		}else{
			this.setState({ view: this.state.view - 1 });
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		}
	}

	customerStep2(){

		const validInputNames = new Array('error_yasli_engeldurumu', 'error_yasli_varsahastalik', 'error_yasli_takipedildigi', 'error_yasli_gecirdigihastaliklar');

		const checkInputs = new Promise(resolve => {
			validInputNames.map((errorName, index) => {
				this.setState({ [errorName]: this.state[errorName.substr(6)].toString().trim().length === 0 });
			});
			setTimeout(() => { resolve(true); }, 400);
		});

		const checkInputValues = new Promise(resolve => {
			checkInputs.then(result => {
				let checkInputValue = false;
				validInputNames.map((errorName, index) => {
					if ( this.state[errorName] ) resolve(true);
				});
				resolve(false);
			});
		});

		checkInputValues.then(result => {
			if ( !result ){
				
				if ( !this.state.guncelleme ){
					this.customerAdd();
				}else{
					this.customerUpdate();
				}
				
			}else{
				Notify.error({ message: "Eksik bilgileri lütfen doldurun.", position: "top-right", time: 5 });
			}
		});
		
	}

	customerAdd(){
		Loading.add({ color: "primary" });

		let dogumTarihi = this.state.yasli_dogumtarihi;
		dogumTarihi = dogumTarihi.substr(6,4) + '-' + dogumTarihi.substr(3,2) + '-' + dogumTarihi.substr(0,2);

		const requestData = [{
			identityNumber: this.state.yasli_tckimlik,
			name: this.state.yasli_adi,
			surName: this.state.yasli_soyadi,
			birthDate: dogumTarihi,
			birthPlace: this.state.yasli_dogumyeri,
			gender: this.state.yasli_cinsiyet,
			civilStatus: this.state.yasli_medeni,
			socialSituation: this.state.yasli_sosyalguv,
			serviceFormat: this.state.yasli_alacagihizmet,
			roomType: this.state.yasli_odatipi,
			job: this.state.yasli_meslek,
			salaryStatus: this.state.yasli_maas,
			heltInstution: this.state.yasli_takipedildigi,
			pastSickness: this.state.yasli_gecirdigihastaliklar,
			continuingSickness: this.state.yasli_varsahastalik,
			mental: this.state.yasli_engeldurumu.indexOf('Ruhsal') !== -1,
			physical: this.state.yasli_engeldurumu.indexOf('Bedensel') !== -1,
			psychological: this.state.yasli_engeldurumu.indexOf('Zihinsel') !== -1,
			nothing: this.state.yasli_engeldurumu.indexOf('Yok') !== -1
		}];

		const request = new Request();
		request.setHeaderToken();
		request.setData({
			method: 'add',
			processor: 'customer',
			data: requestData
		});
		
		request.run().then(result => {
			Loading.remove();
			if ( result.code === 200 ){
				Notify.success({ message: 'Yaşlı başarıyla kayıt edildi.', position: "top-right", time: 3 });
				this.setState({ guncelleme: true, view: this.state.view + 1, kayitDonenDeger: result.resultMap });
				window.scroll({ top: 0, left: 0, behavior: 'smooth' });
			}else if ( result.code === 900 ){
				Notify.error({ message: result.message, position: "top-right", time: 5 });
			}
		});
	}

	customerUpdate(){
		
		Loading.add({ color: "primary" });

		let dogumTarihi = this.state.yasli_dogumtarihi;
		dogumTarihi = dogumTarihi.substr(6,4) + '-' + dogumTarihi.substr(3,2) + '-' + dogumTarihi.substr(0,2);

		const requestData = [{

			id: this.state.kayitDonenDeger.id,
			deleted: false,
			createDate: this.state.kayitDonenDeger.createDate,

			identityNumber: this.state.yasli_tckimlik,
			name: this.state.yasli_adi,
			surName: this.state.yasli_soyadi,
			birthDate: dogumTarihi,
			birthPlace: this.state.yasli_dogumyeri,
			gender: this.state.yasli_cinsiyet,
			civilStatus: this.state.yasli_medeni,
			socialSituation: this.state.yasli_sosyalguv,
			serviceFormat: this.state.yasli_alacagihizmet,
			roomType: this.state.yasli_odatipi,
			job: this.state.yasli_meslek,
			salaryStatus: this.state.yasli_maas,
			heltInstution: this.state.yasli_takipedildigi,
			pastSickness: this.state.yasli_gecirdigihastaliklar,
			continuingSickness: this.state.yasli_varsahastalik,
			mental: this.state.yasli_engeldurumu.indexOf('Ruhsal') !== -1,
			physical: this.state.yasli_engeldurumu.indexOf('Bedensel') !== -1,
			psychological: this.state.yasli_engeldurumu.indexOf('Zihinsel') !== -1,
			nothing: this.state.yasli_engeldurumu.indexOf('Yok') !== -1
		}];

		const request = new Request();
		request.setHeaderToken();
		request.setData({
			method: 'update',
			processor: 'customer',
			data: requestData
		});

		request.run().then(result => {
			Loading.remove();
			if ( result.code === 200 ){
				Notify.success({ message: 'Yaşlı başarıyla güncellendi.', position: "top-right", time: 3 });
				this.setState({ view: this.state.view + 1 });
				window.scroll({ top: 0, left: 0, behavior: 'smooth' });
			}else if ( result.code === 900 ){
				Notify.error({ message: result.message, position: "top-right", time: 5 });
			}
		});

	}

	yakinlarChange(name, value, index){
		let yakinlarUpdated = this.state.yasli_yakinlari;
		yakinlarUpdated[index][name] = value;
		this.setState({ yasli_yakinlari: yakinlarUpdated });
	}

	yakinEkle(){
		let yakinlarUpdated = this.state.yasli_yakinlari;
		yakinlarUpdated.push({
			tckimlik: '',
			adi: '',
			soyadi: '',
			yakinlik: '',
			meslek: '',
			adresi: '',
			telefon: ''
		});
		this.setState({ yasli_yakinlari: yakinlarUpdated });
	}

	yakinSil(index){
		let yakinlarUpdated = this.state.yasli_yakinlari;
	 	yakinlarUpdated.splice(index, 1);
		this.setState({ yasli_yakinlari: yakinlarUpdated });
	}

	goOnGorusmeler(){ window.location.href = linkStart + 'on-gorusmeler'; }

	render(){
		return(
			<form onSubmit={this.submit}>
				<div className="formWrapper">

					<div className={ 'formEndWrapper' + (this.state.formEndShow ? ' active' : '') }>
						<div className="formEndArea">
							<div className="formEndTitle">Ön görüşme başarıyla kayıt edildi.</div>
							<div className="formEndWhite">
								<p>Dilerseniz kayıt edilen ön görüşme formunu hızlı bir şekilde yazdırabilir veya ön görüşmeler sayfasına gidebilirsiniz.</p>
								<div className="formEndButtons">
									<div onClick={this.goOnGorusmeler} className="formEndButton">
										<span><FaIcon code="fa-print" /></span>
										<b>Yazdır</b>
									</div>
									<div onClick={this.goOnGorusmeler} className="formEndButton">
										<span><FaIcon code="fa-folder" /></span>
										<b>Ön Görüşmeler</b>
									</div>
								</div>
							</div>
						</div>
					</div>

					<MyBreadcrumb view={this.state.view} viewData={this.state.viewData} />

					{ this.state.view === 1 && (<div>

					<div className="formItemSubTitle mt0">
						<span>{ this.state.view + '. ' + this.state.viewData[ this.state.view - 1 ] }</span>
					</div>
					<TCKimlikInput
						title="T.C. Kimlik Numarası"
						icon="fa-key"
						name="yasli_tckimlik"
						value={this.state.yasli_tckimlik}
						error={this.state.error_yasli_tckimlik}
						errorName="error_yasli_tckimlik"
						change={this.inputValueChange}
					/>
					<div className="formItemFlex">
						<DefaultInput
							title="Adı"
							icon="fa-user"
							name="yasli_adi"
							value={this.state.yasli_adi}
							error={this.state.error_yasli_adi}
							errorName="error_yasli_adi"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Soyadı"
							icon="fa-user"
							name="yasli_soyadi"
							value={this.state.yasli_soyadi}
							error={this.state.error_yasli_soyadi}
							errorName="error_yasli_soyadi"
							change={this.inputValueChange}
						/>
					</div>
					<div className="formItemFlex">
						<DefaultInput
							title="Doğum Yeri"
							icon="fa-user"
							name="yasli_dogumyeri"
							value={this.state.yasli_dogumyeri}
							error={this.state.error_yasli_dogumyeri}
							errorName="error_yasli_dogumyeri"
							change={this.inputValueChange}
						/>
						<DefaultDateInput
							title="Doğum Tarihi"
							name="yasli_dogumtarihi"
							value={this.state.yasli_dogumtarihi}
							error={this.state.error_yasli_dogumtarihi}
							errorName="error_yasli_dogumtarihi"
							change={this.inputValueChange}
						/>
					</div>
					<RadioInput
						title="Cinsiyeti"
						name="yasli_cinsiyet"
						value={this.state.yasli_cinsiyet}
						error={this.state.error_yasli_cinsiyet}
						errorName="error_yasli_cinsiyet"
						change={this.inputValueChange}
						radioData={['Erkek', 'Kadın']}
					/>
					<RadioInput
						title="Medeni Durumu"
						name="yasli_medeni"
						value={this.state.yasli_medeni}
						error={this.state.error_yasli_medeni}
						errorName="error_yasli_medeni"
						change={this.inputValueChange}
						radioData={['Evli', 'Bekar', 'Eşini Kaybetmiş']}
					/>
					<div className="formItemFlex">
						<DefaultInput
							title="Mesleği"
							icon="fa-user"
							name="yasli_meslek"
							value={this.state.yasli_meslek}
							error={this.state.error_yasli_meslek}
							errorName="error_yasli_meslek"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Sosyal Güvenlik Durumu"
							icon="fa-user"
							name="yasli_sosyalguv"
							value={this.state.yasli_sosyalguv}
							error={this.state.error_yasli_sosyalguv}
							errorName="error_yasli_sosyalguv"
							change={this.inputValueChange}
						/>
					</div>
					<div className="formItemFlex">
						<DefaultInput
							title="Maaş Durumu"
							icon="fa-user"
							name="yasli_maas"
							value={this.state.yasli_maas}
							error={this.state.error_yasli_maas}
							errorName="error_yasli_maas"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Alacağı Hizmet Biçimi"
							icon="fa-user"
							name="yasli_alacagihizmet"
							value={this.state.yasli_alacagihizmet}
							error={this.state.error_yasli_alacagihizmet}
							errorName="error_yasli_alacagihizmet"
							change={this.inputValueChange}
						/>
					</div>
					<RadioInput
						title="Oda Tipi"
						name="yasli_odatipi"
						value={this.state.yasli_odatipi}
						error={this.state.error_yasli_odatipi}
						errorName="error_yasli_odatipi"
						change={this.inputValueChange}
						radioData={['Normal', 'Suit', '1 + 1']}
					/>

					</div>) }

					{ this.state.view === 2 && (<div>

					<div className="formItemSubTitle mt0">
						<span>{ this.state.view + '. ' + this.state.viewData[ this.state.view - 1 ] }</span>
					</div>
					<CheckListInput
						title="Engel Durumu"
						name="yasli_engeldurumu"
						value={this.state.yasli_engeldurumu}
						error={this.state.error_yasli_engeldurumu}
						errorName="error_yasli_engeldurumu"
						change={this.inputValueChange}
						checkData={['Bedensel', 'Zihinsel', 'Ruhsal', 'Yok']}
					/>
					<div className="formItemFlex">
						<DefaultInput
							title="Varsa Süregelen Hastalığı / Tanısı"
							icon="fa-user"
							name="yasli_varsahastalik"
							value={this.state.yasli_varsahastalik}
							error={this.state.error_yasli_varsahastalik}
							errorName="error_yasli_varsahastalik"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Takip Edildiği Sağlık Kuruluşu"
							icon="fa-user"
							name="yasli_takipedildigi"
							value={this.state.yasli_takipedildigi}
							error={this.state.error_yasli_takipedildigi}
							errorName="error_yasli_takipedildigi"
							change={this.inputValueChange}
						/>
					</div>
					<DefaultInput
						title="Geçirdiği Hastalıklar"
						icon="fa-user"
						name="yasli_gecirdigihastaliklar"
						value={this.state.yasli_gecirdigihastaliklar}
						error={this.state.error_yasli_gecirdigihastaliklar}
						errorName="error_yasli_gecirdigihastaliklar"
						change={this.inputValueChange}
					/>

					</div>) }

					{ this.state.view === 3 && (<div>

					<div className="formItemSubTitle mt0">
						<span>{ this.state.view + '. ' + this.state.viewData[ this.state.view - 1 ] }</span>
					</div>
					<div className="yasliYakinlariBilgi">* İlk eklenen yaşlı yakını aynı zamanda müracaat eden kişi olarak kayıt edilecektir.</div>
					{ this.state.yasli_yakinlari.map((item, index) => (
						<div key={index} className="yasliYakinlariKapsa">
							<BasicInput
								title="T.C. Kimlik Numarası"
								icon="fa-key"
								name="tckimlik"
								value={item.tckimlik}
								change={this.yakinlarChange}
								index={index}
								mask="99999999999"
							/>
							<div className="formItemFlex">
								<BasicInput
									title="Adı"
									icon="fa-user"
									name="adi"
									value={item.adi}
									change={this.yakinlarChange}
									index={index}
								/>
								<BasicInput
									title="Soyadı"
									icon="fa-user"
									name="soyadi"
									value={item.soyadi}
									change={this.yakinlarChange}
									index={index}
								/>
							</div>
							<div className="formItemFlex">
								<BasicInput
									title="Yakınlığı"
									icon="fa-user"
									name="yakinlik"
									value={item.yakinlik}
									change={this.yakinlarChange}
									index={index}
								/>
								<BasicInput
									title="Mesleği"
									icon="fa-user"
									name="meslek"
									value={item.meslek}
									change={this.yakinlarChange}
									index={index}
								/>
							</div>
							<div className="formItemFlex">
								<BasicInput
									title="Adresi"
									icon="fa-user"
									name="adresi"
									value={item.adresi}
									change={this.yakinlarChange}
									index={index}
								/>
								<BasicInput
									title="Telefon Numarası"
									icon="fa-user"
									name="telefon"
									value={item.telefon}
									change={this.yakinlarChange}
									index={index}
									mask="0999 999 99 99"
								/>
							</div>
							<Touchable
								title="Yakın Sil"
								icon="fa-times"
								press={() => this.yakinSil(index)}
								class="smallRedButton"
							/>
						</div>
					)) }

					{ this.state.yasli_yakinlari_error && ( <i className="formItemError">* Lütfen yaşlı yakınlarına ait bilgileri doğru ve eksiksiz doldurunuz.</i> ) }

					<Touchable
						title="Yeni Bir Yakın Ekle"
						icon="fa-plus"
						press={this.yakinEkle}
						class="smallBlueButton"
					/>

					</div>) }

					<MyBreadcrumbButtons view={this.state.view} maxView={this.state.viewData.length} viewChange={this.viewChange} submit={this.submit} />

				</div>

			</form>
		);
	}

}

export default OnGorusme;