import * as React from 'react';
import { Loading, Notify, FaIcon } from 'karcin-ui';
import { getNowDate } from '../../functions/Functions';
import { DefaultInput, RadioInput, DefaultTextArea, DefaultDateInput } from '../items/Inputs';

class SosyalEtkinlik extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			turu: '',
			tarihi: getNowDate(),
			katilanlar: '',
			suresi: '',
			amaci: '',
			sureci: '',
			degerlendirme: '',

			error_turu: false,
			error_tarihi: false,
			error_katilanlar: false,
			error_suresi: false,
			error_amaci: false,
			error_sureci: false,
			error_degerlendirme: false
		};

		this.inputValueChange = this.inputValueChange.bind(this);
		this.submit = this.submit.bind(this);

	}

	inputValueChange(name, value){ this.setState({ [name]: value }); }

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
		
		const promise1 = new Promise(resolve => {
			Object.keys(this.state).map((item, index) => {
				if ( item.substr(0, 5) === 'error' ){
					this.setState({ [item]: this.state[item.substr(6)].toString().trim().length === 0 });
				}
			});
			setTimeout(() => { resolve(true); }, 200);
		});

		const promise2 = new Promise(resolve => {
			promise1.then(result => {
				Object.keys(this.state).map((item, index) => {
					if ( item.substr(0, 5) === 'error' && this.state[item] ) resolve(false);
				});
				resolve(true);
			});
		});

		return promise2;

	}

	render(){
		return(
			<form onSubmit={this.submit}>
				<div className="formWrapper">
					
					<div className="formItemFlex">
						<RadioInput
							title="Etkinliğin Türü"
							name="turu"
							value={this.state.turu}
							error={this.state.error_turu}
							errorName="error_turu"
							change={this.inputValueChange}
							radioData={['Müze Gezisi', 'Satranç']}
						/>
						<DefaultDateInput
							title="Etkinliğin Tarihi"
							name="tarihi"
							value={this.state.tarihi}
							error={this.state.error_tarihi}
							errorName="error_tarihi"
							change={this.inputValueChange}
						/>
					</div>
					<div className="formItemFlex">
						<DefaultInput
							title="Etkinliğin Süresi"
							icon="fa-clock"
							name="suresi"
							value={this.state.suresi}
							error={this.state.error_suresi}
							errorName="error_suresi"
							change={this.inputValueChange}
						/>
						<DefaultInput
							title="Etkinliğe Katılanlar"
							icon="fa-user"
							name="katilanlar"
							value={this.state.katilanlar}
							error={this.state.error_katilanlar}
							errorName="error_katilanlar"
							change={this.inputValueChange}
						/>
					</div>
					<DefaultTextArea
						title="Etkinliğin Amacı"
						name="amaci"
						value={this.state.amaci}
						error={this.state.error_amaci}
						errorName="error_amaci"
						change={this.inputValueChange}
					/>
					<DefaultTextArea
						title="Etkinliğin Süreci"
						name="sureci"
						value={this.state.sureci}
						error={this.state.error_sureci}
						errorName="error_sureci"
						change={this.inputValueChange}
					/>
					<DefaultTextArea
						title="Değerlendirme"
						name="degerlendirme"
						value={this.state.degerlendirme}
						error={this.state.error_degerlendirme}
						errorName="error_degerlendirme"
						change={this.inputValueChange}
					/>

					<div className="formItemButtons">
						<div onClick={this.submit} className="save">
							<span><FaIcon code="fa-check" /></span>
							<b>Kaydet</b>
						</div>
					</div>

				</div>
			</form>
		);
	}

}

export default SosyalEtkinlik;