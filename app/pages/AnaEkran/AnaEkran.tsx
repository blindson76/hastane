import * as React from 'react';
import { Loading } from 'karcin-ui';
import { AreaChart, Area, ResponsiveContainer, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import BekleyenOnGorusme from '../../components/BekleyenOnGorusme';
import AnaEkranRandevular from '../../components/AnaEkranRandevular';
import Request from '../../functions/Request';
const linkStart = window['config'].linkStart;
import './style.scss';

const data = [
	{ name: "Ocak", value: 92 },
	{ name: "Şubat", value: 139 },
	{ name: "Mart", value: 112 },
	{ name: "Nisan", value: 87 },
	{ name: "Mayıs", value: 80 },
	{ name: "Haziran", value: 158 },
	{ name: "Temmuz", value: 190 },
	{ name: "Ağustos", value: 210 },
	{ name: "Eylül", value: 190 },
	{ name: "Ekim", value: 159 },
	{ name: "Kasım", value: 206 },
	{ name: "Aralık", value: 210 },
];

const dataPie = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 50 },
	{ name: 'Group C', value: 100 },
	{ name: 'Group D', value: 150 },
];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Baslangic extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			data: [],
			randevular: []
		};
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		this.getData();
		this.getRandevu();
	}

	componentDidMount(){
		Loading.add({ id: 'loadingWrapper' });
		Loading.add({ id: 'loadingRandevular' });
	}

	getData(){

		const request = new Request();
		request.setHeaderToken();
		request.setData({
			method: 'customerList',
			processor: 'dashboard'
		});
		
		request.run().then(result => {
			this.setState({ data: result.resultMap }, () => {
				Loading.remove({ id: 'loadingWrapper' });
			});
		});
	}

	getRandevu(loading = false){
		if ( loading ) Loading.add({ id: 'loadingRandevular' });
		const request = new Request();
		request.setHeaderToken();
		request.setData({
			method: 'appointmentList',
			processor: 'appointment'
		});

		request.run().then(result => {
			this.setState({ randevular: result.resultMap }, () => {
				Loading.remove({ id: 'loadingRandevular' });
			});
		});
	}

	goRandevular(){ window.location.href = linkStart + 'randevular'; }

	render(){

		return(
			<div>
				<h1 className="title">Başlangıç</h1>

				<div className="contentTransparent">
					<div className="contentWhite chartWrapper">
						
						<div className="chartHeader">
							<div className="chartTitle">Aylara Göre Konaklayan Yaşlılar</div>
							<div className="chartInfo">Toplam 560 yaşlı</div>
						</div>

						<ResponsiveContainer height={120}>
							<AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
								<Tooltip cursor={false} content={<CustomTooltip />} />
								<Area type="monotone" dataKey="value" stroke="#34BFA3" fill="#0FCCA6" />
							</AreaChart>
						</ResponsiveContainer>

					</div>
					<div className="contentWhite chartWrapper">

						<div className="chartHeader">
							<div className="chartTitle">Bekleyen Ön Başvuru Sayısı</div>
							<div className="chartInfo">Toplam 26 bekleyen ön başvuru</div>
						</div>

						<div className="barChart">
							<ResponsiveContainer height={120}>	
								<BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barCategoryGap={0}>
									<Tooltip cursor={false} content={<CustomTooltip />} />
									<Bar dataKey="value" fill="#E14C86" />
								</BarChart>
							</ResponsiveContainer>
						</div>

					</div>
					<div className="contentWhite chartWrapper">
						
						<div className="chartHeader">
							<div className="chartTitle">Kat Doluluk Oranları</div>
							<div className="chartInfo">Toplam 16 oda boş</div>
						</div>

						<div className="pieChart">
							<ResponsiveContainer height={162}>
								<PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
									<Tooltip cursor={false} content={<CustomTooltip />} />
									<Pie
									data={dataPie}
									innerRadius={60}
									outerRadius={80}
									paddingAngle={5}
									dataKey="value"
									>
									{ dataPie.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]} />) }
									</Pie>
								</PieChart>
							</ResponsiveContainer>
						</div>

					</div>
				</div>

				<div className="onGorusmelerWhite">
					<div className="onGorusmelerTitle">Randevular <div onClick={this.goRandevular} className="titleEnd">Tüm Randevular</div></div>
					<div id="loadingRandevular" className="randevuTablolar">
						<div className="randevuTabloTek">
							<span>İsim Soyisim</span>
							<span>Telefon Numarası</span>
							<span>Randevu Tarihi</span>
							<span>Saati</span>
							<span>Kalan Zaman</span>
							<span>Etkileşimler</span>
						</div>
						{ this.state.randevular.map((item, index) => (
							<AnaEkranRandevular press={() => this.getRandevu(true)} key={item.id + '-' + index} item={item} />
						)) }
					</div>
				</div>

				<div className="onGorusmelerWhite">
					<div className="onGorusmelerTitle">Son Yapılan Ön Görüşmeler</div>
					<div id="loadingWrapper" className="onGorusmeler">
						<div className="bekleyenOnGorusme">
							<span>T.C. Kimlik No</span>
							<span>İsim Soyisim</span>
							<span>Cinsiyet</span>
							<span>Oluşturulma Tarihi</span>
							<span>Durum</span>
							<span>Etkileşimler</span>
						</div>
						{ this.state.data.map((item, index) => (
							<BekleyenOnGorusme key = {index} data = {item} />
						)) }
					</div>
				</div>

			</div>
		);

	}

}

const CustomTooltip: React.SFC<any> = ({ active, payload, label }) => {
	return active ? ( <div className="customTooltip">{ payload[0].payload.name + ': ' + payload[0].payload.value }</div> ) : null;
};

export default Baslangic;