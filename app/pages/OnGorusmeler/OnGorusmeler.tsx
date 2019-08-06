import * as React from 'react';
import DataGrid from '../../components/DataGrid/DataGrid';
import Request from '../../functions/Request';
import { getDateTR } from '../../functions/Functions';
import { Loading, Message, Notify, FaIcon } from 'karcin-ui';
import ReactToPrint from 'react-to-print';
import OnGorusme from '../../forms/print/OnGorusme';
const linkStart = window['config'].linkStart;

const { Filters } = require('react-data-grid-addons');
const { NumericFilter, SingleSelectFilter } = Filters;

const stateFormatter = ({ value }) => {
	return <div className={'dataGridState ' + value}>{value}</div>;
};

class OnGorusmeler extends React.Component<any, any>{

	private printPage: React.RefObject<any>;
	private printRef: React.RefObject<any>;

	constructor(props){ super(props);
		this.state = {
			customer: [],
			printData: {
				customer: {},
				customerRelative: []
			},
			dataGridKey: 1,
			printKey: 1,
			noResult: false
		};
		this.printPage = React.createRef();
		this.printRef = React.createRef();
		this.print = this.print.bind(this);
		this.sil = this.sil.bind(this);
		this.getData();
	}

	componentDidMount(){
		Loading.add({ color: 'primary', id: 'loadingWrapper' });
	}

	getData(){

		const request = new Request();
		request.setHeaderToken();
		request.setData({
			method: 'customerList',
			processor: 'dashboard'
		});
		
		request.run().then(result => {
			let customer = [];
			result.resultMap.map((item, index) => {
				customer.push({
					...item.customer,
					customerRelative: item.customerRelative
				});
			});
			this.setState({
				customer,
				dataGridKey: this.state.dataGridKey + 1
			}, () => {
				Loading.remove({ id: 'loadingWrapper' });
				this.setState({ noResult: customer.length === 0 });
			});
		});
	}

	yeniEkle(){ window.location.href = linkStart + 'yeni-on-gorusme'; }

	guncelle(item){
		console.log('güncelle');
		console.log(item);
	}

	print(item){
		this.setState({
			printData: {
				customer: item,
				customerRelative: item.customerRelative
			},
			printKey: this.state.printKey + 1
		}, () => {
			this.printRef.current.handlePrint();
		});
	}

	sil(item){
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
						data: [item.id]
					});
					
					request.run().then(result => {
						Loading.remove();
						if ( result.code === 200 ){
							Loading.add({ color: 'primary', id: 'loadingWrapper' });
							Notify.success({ message: 'Başarıyla silindi.', position: "top-right", time: 2 });
							this.getData();
						}else if ( result.code === 900 ){
							Notify.error({ message: result.message, position: "top-right", time: 2 });
						}
					});
				
				}
			}
		});
	}

	render(){
		return(
			<div>
				<h1 className="title">Ön Görüşmeler</h1>
				
				{ !this.state.noResult ? (
				<div id="loadingWrapper" className="contentWhite">

					<DataGrid
						key = {this.state.dataGridKey}
						columns = {
							[
								{ key: 'id', name: 'No', width: 120, sortDescendingFirst: true },
								{ key: 'customerSituation', name: 'Durumu', width: 180, formatter: stateFormatter, filterRenderer: SingleSelectFilter },
								{ key: 'createDate', name: 'Oluşturulma Tarihi', width: 240 },
								{ key: 'identityNumber', name: 'T.C. Kimlik No', width: 180 },
								{ key: 'name', name: 'İsim', width: 180 },
								{ key: 'surName', name: 'Soyisim', width: 180 },
								{ key: 'gender', name: 'Cinsiyet', width: 160 },
							]
						}
						rows = {this.state.customer}
						buttons = {[
							{name:"Yeni Ekle",icon:"fa-plus",press:this.yeniEkle},{name:"Yazdır",icon:"fa-print",press:this.print},{name:"Güncelle",icon:"fa-edit",press:this.guncelle},{name:"Sil",icon:"fa-trash",press:this.sil}
						]}
						height={600}
					/>

					<ReactToPrint
						trigger={() => <div className="hidden"></div>}
						content={() => this.printPage.current}
						ref={this.printRef}
					/>

					<div className="hidden">
						<OnGorusme {...this.state.printData} ref={this.printPage} key={this.state.printKey} />
					</div>

				</div>

				) : (

					<div className="noResult mt10">
						<span><FaIcon code="fa-search" /></span>
						<div className="noResultText">Herhangi bir ön görüşme bulunamadı.</div>
					</div>

				) }
			</div>
		);
	}

}

export default OnGorusmeler;