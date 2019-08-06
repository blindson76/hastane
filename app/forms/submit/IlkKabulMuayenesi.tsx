import * as React from 'react';
import { Loading, Notify, FaIcon } from 'karcin-ui';
import { MyBreadcrumb, MyBreadcrumbButtons } from '../items/MyBreadcrumb';
import { getNowDate } from '../../functions/Functions';
import { DefaultInput, RadioInput, DefaultTextArea, DefaultDateInput, TCKimlikInput, OtherRadioInput, CheckListInput } from '../items/Inputs';

class IlkKabulMuayenesi extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {

			viewData: [
				'Yaşlıya Ait Bilgiler',
				'Durumlar',
				'Hastalıklar'
			],
			view: 1,

			adisoyadi: '',
			kurulusageldigiyer: '',
			sosyalguvencesi: '',
			tckimlikno: '',
			annebabaadi: '',
			boyukilosu: '',
			cinsiyet: '',
			egitimdurumu: '',
			kalacagikatodano: '',
			kabultarihi: getNowDate(),
			meslegi: '',

			gelissekli: '',
			gelissekli_other: false,

			dusmeriski: '',

			konusmadurumu: '',
			konusmadurumu_other: false,

			isitmedurumu: '',
			isitmedurumu_other: false,

			gormedurumu: '',
			gormedurumu_other: false,

			hastaliklar: [],

			aileselhastaliklar: '',
			aileselhastaliklar_other: false,

			error_adisoyadi: false,
			error_kurulusageldigiyer: false,
			error_sosyalguvencesi: false,
			error_tckimlikno: false,
			error_annebabaadi: false,
			error_boyukilosu: false,
			error_cinsiyet: false,
			error_egitimdurumu: false,
			error_kalacagikatodano: false,
			error_meslegi: false,
			error_diger: false,

			error_gelissekli: false,
			error_dusmeriski: false,
			error_konusmadurumu: false,
			error_isitmedurumu: false,
			error_gormedurumu: false,

			error_hastaliklar: false,
			error_aileselhastaliklar: false
			
		};

		this.inputValueChange = this.inputValueChange.bind(this);
		this.submit = this.submit.bind(this);
		this.viewChange = this.viewChange.bind(this);

	}

	inputValueChange(name, value){ this.setState({ [name]: value }); }

	viewChange(bool){
		this.setState({ view: bool ? this.state.view + 1 : this.state.view - 1 });
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	}

	async submit(e){

		e.preventDefault();

		if ( await this.validate() ){

			Loading.add({ color: "primary" });

			setTimeout(() => {

				Loading.remove();
				Notify.success({ message: "Bilgiler başarıyla kaydedildi.", position: "top-right", time: 5 });

			}, 1000);

		}else{

			this.setState({ view: 1 });

			Notify.error({ message: "Eksik bilgileri lütfen doldurun.", position: "top-right", time: 5 });

		}

	}

	validate(){
		
		return true;

	}

	render(){
		return(
			<form onSubmit={this.submit}>
				<div className="formWrapper">
					
					<MyBreadcrumb view={this.state.view} viewData={this.state.viewData} />

					{ this.state.view === 1 && (<div>
	
					<div className="formItemSubTitle mt0">
						<span>1. Yaşlıya Ait Bilgiler</span>
					</div>

					<div className="formItemFlex">
						<DefaultInput
							title="Adı Soyadı"
							icon="fa-user"
							name="adisoyadi"
							value={this.state.adisoyadi}
							error={this.state.error_adisoyadi}
							errorName="error_adisoyadi"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Kuruluşa Geldiği Yer"
							icon="fa-user"
							name="kurulusageldigiyer"
							value={this.state.kurulusageldigiyer}
							error={this.state.error_kurulusageldigiyer}
							errorName="error_kurulusageldigiyer"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Sosyal Güvencesi"
							icon="fa-user"
							name="sosyalguvencesi"
							value={this.state.sosyalguvencesi}
							error={this.state.error_sosyalguvencesi}
							errorName="error_sosyalguvencesi"
							change={this.inputValueChange}
						/>
					</div>
					<div className="formItemFlex">
						<TCKimlikInput
							title="T.C. Kimlik Numarası"
							icon="fa-key"
							name="tckimlikno"
							value={this.state.tckimlikno}
							error={this.state.error_tckimlikno}
							errorName="error_tckimlikno"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Anne - Baba Adı"
							icon="fa-user"
							name="annebabaadi"
							value={this.state.annebabaadi}
							error={this.state.error_annebabaadi}
							errorName="error_annebabaadi"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Boyu / Kilosu"
							icon="fa-user"
							name="boyukilosu"
							value={this.state.boyukilosu}
							error={this.state.error_boyukilosu}
							errorName="error_boyukilosu"
							change={this.inputValueChange}
						/>
					</div>
					<RadioInput
						title="Cinsiyeti"
						name="cinsiyet"
						value={this.state.cinsiyet}
						error={this.state.error_cinsiyet}
						errorName="error_cinsiyet"
						change={this.inputValueChange}
						radioData={['Erkek', 'Kadın']}
					/>
					<RadioInput
						title="Eğitim Durumu"
						name="egitimdurumu"
						value={this.state.egitimdurumu}
						error={this.state.error_egitimdurumu}
						errorName="error_egitimdurumu"
						change={this.inputValueChange}
						radioData={['İlkokul', 'Lise', 'Ön Lisans', 'Lisans', 'Yüksek Lisans']}
					/>
					<div className="formItemFlex">
						<DefaultInput
							title="Kalacağı Kat / Oda No"
							icon="fa-user"
							name="kacalagikatodano"
							value={this.state.kalacagikatodano}
							error={this.state.error_kalacagikatodano}
							errorName="error_kalacagikatodano"
							change={this.inputValueChange}
						/>
						<DefaultDateInput
							title="Kuruluşa Kabul Tarihi"
							name="kabultarihi"
							value={this.state.kabultarihi}
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Mesleği"
							icon="fa-user"
							name="meslegi"
							value={this.state.meslegi}
							error={this.state.error_meslegi}
							errorName="error_meslegi"
							change={this.inputValueChange}
						/>
					</div>

					</div>) }

					{ this.state.view === 2 && (<div>
	
					<div className="formItemSubTitle mt0">
						<span>2. Durumlar</span>
					</div>

					<OtherRadioInput
						title="Birime Geliş Şekli"
						name="gelissekli"
						value={this.state.gelissekli}
						error={this.state.error_gelissekli}
						errorName="error_gelissekli"
						change={this.inputValueChange}
						radioData={
							[
								{ value: 'Yürüyerek', other: false },
								{ value: 'Tekerlekli Sandalye', other: false },
								{ value: 'Destekle', other: false },
								{ value: 'Diğer', other: true }
							]
						}
						otherInputName="gelissekli_other"
						otherInputShow={this.state.gelissekli_other}
					/>
					<RadioInput
						title="Düşme Riski Değerlendirmesi"
						name="dusmeriski"
						value={this.state.dusmeriski}
						error={this.state.error_dusmeriski}
						errorName="error_dusmeriski"
						change={this.inputValueChange}
						radioData={['Var', 'Yok']}
					/>
					<OtherRadioInput
						title="Konuşma Durumu"
						name="konusmadurumu"
						value={this.state.konusmadurumu}
						error={this.state.error_konusmadurumu}
						errorName="error_konusmadurumu"
						change={this.inputValueChange}
						radioData={
							[
								{ value: 'Konuşabiliyor', other: false },
								{ value: 'Konuşamıyor', other: false },
								{ value: 'Diğer', other: true }
							]
						}
						otherInputName="konusmadurumu_other"
						otherInputShow={this.state.konusmadurumu_other}
					/>
					<OtherRadioInput
						title="İşitme Durumu"
						name="isitmedurumu"
						value={this.state.isitmedurumu}
						error={this.state.error_isitmedurumu}
						errorName="error_isitmedurumu"
						change={this.inputValueChange}
						radioData={
							[
								{ value: 'Duyabiliyor', other: false },
								{ value: 'Duyamıyor', other: false },
								{ value: 'İşitme Cihazı Kullanıyor', other: false },
								{ value: 'Diğer', other: true }
							]
						}
						otherInputName="isitmedurumu_other"
						otherInputShow={this.state.isitmedurumu_other}
					/>
					<OtherRadioInput
						title="Görme Durumu"
						name="gormedurumu"
						value={this.state.gormedurumu}
						error={this.state.error_gormedurumu}
						errorName="error_gormedurumu"
						change={this.inputValueChange}
						radioData={
							[
								{ value: 'Görebiliyor', other: false },
								{ value: 'Göremiyor', other: false },
								{ value: 'Gözlük Kullanıyor', other: false },
								{ value: 'Şaşılık Var', other: false },
								{ value: 'Diğer', other: true }
							]
						}
						otherInputName="gormedurumu_other"
						otherInputShow={this.state.gormedurumu_other}
					/>

					</div>) }

					{ this.state.view === 3 && (<div>
	
					<div className="formItemSubTitle mt0">
						<span>3. Hastalıklar</span>
					</div>

					{ JSON.stringify(this.state.hastaliklar) }
			
					<CheckListInput
						title="Hastalıklar"
						name="hastaliklar"
						value={this.state.hastaliklar}
						error={this.state.error_hastaliklar}
						errorName="error_hastaliklar"
						change={this.inputValueChange}
						checkData={['Epilepsi', 'HT', 'Psikiyatrik ve Ruhsal Hastalık', 'Baş Dönmesi', 'DM', 'KOAH', 'Kalp Yetmezliği', 'Sarılık', 'Siyanoz', 'Kusma', 'Beslenme Güçlüğü', 'Kaza ve Ameliyat', 'Parazit', 'Diğer']}
					/>
					<OtherRadioInput
						title="Ailesel Hastalıklar"
						name="aileselhastaliklar"
						value={this.state.aileselhastaliklar}
						error={this.state.error_aileselhastaliklar}
						errorName="error_aileselhastaliklar"
						change={this.inputValueChange}
						radioData={
							[
								{ value: 'Var (Belirtiniz)', other: true },
								{ value: 'Yok', other: false }
							]
						}
						otherInputName="aileselhastaliklar_other"
						otherInputShow={this.state.aileselhastaliklar_other}
					/>

					</div>) }

					<MyBreadcrumbButtons view={this.state.view} maxView={this.state.viewData.length} viewChange={this.viewChange} submit={this.submit} />

				</div>
			</form>
		);
	}

}

export default IlkKabulMuayenesi;