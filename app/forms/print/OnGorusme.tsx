import * as React from 'react';
import { getAge, getDateTR } from '../../functions/Functions';

class OnGorusme extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			customer: this.props.customer,
			customerRelative: this.props.customerRelative,
			muracaatEden: {},
			engelDurumu: ''
		}
	}

	componentDidMount(){
		this.start();
	}

	start(){

		if ( this.state.customerRelative.length !== 0 ){
			this.setState({ muracaatEden: this.state.customerRelative[0] });
		}

		let engelDurumu = '';
		engelDurumu = engelDurumu + ( this.state.customer.physical ? 'Bedensel, ' : '' );
		engelDurumu = engelDurumu + ( this.state.customer.psychological ? 'Zihinsel, ' : '' );
		engelDurumu = engelDurumu + ( this.state.customer.mental ? 'Ruhsal, ' : '' );
		engelDurumu = engelDurumu + ( this.state.customer.nothing ? 'Yok, ' : '' );
		engelDurumu = engelDurumu.slice(0, -2);

		this.setState({ engelDurumu });

	}

	render(){
		return(
			<div className="print">

				<div className="printLogo"></div>
				<div className="printTitle">MİA YAŞAM MERKEZİ ÖZEL HUZUREVİ VE YAŞLI<br />BAKIM BÖLÜMÜ ÖN GÖRÜŞME FORMU</div>

				<div className="printArea">
					<div className="printRow">
						<div className="printColumn">GÖRÜŞME TARİHİ</div>
						<div className="printColumn">{ getDateTR(this.state.customer.createDate, true) }</div>
					</div>
				</div>
		
				<div className="printSubTitle">1. MÜRACAAT EDENİN</div>
				<div className="printArea">
					<div className="printRow">
						<div className="printColumn">ADI SOYADI</div>
						<div className="printColumn">{ (this.state.muracaatEden.name || '') + ' ' + (this.state.muracaatEden.surName || '') }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">ADRES</div>
						<div className="printColumn">{ this.state.muracaatEden.address }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">TELEFON NUMARASI</div>
						<div className="printColumn">{ this.state.muracaatEden.phone }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">YAKINLIK DERECESİ</div>
						<div className="printColumn">{ this.state.muracaatEden.relativeDegree }</div>
					</div>
				</div>

				<div className="printSubTitle">2. YAŞLININ</div>
				<div className="printArea">
					<div className="printRow">
						<div className="printColumn">ADI SOYADI</div>
						<div className="printColumn">{ (this.state.customer.name || '') + ' ' + (this.state.customer.surName || '') }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">YAŞI</div>
						<div className="printColumn">{ getAge(this.state.customer.birthDate) }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">DOĞUM YERİ</div>
						<div className="printColumn">{ this.state.customer.birthPlace }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">DOĞUM TARİHİ</div>
						<div className="printColumn">{ getDateTR(this.state.customer.birthDate, false) }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">CİNSİYETİ</div>
						<div className="printColumn">{ this.state.customer.gender }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">MEDENİ DURUMU</div>
						<div className="printColumn">{ this.state.customer.civilStatus }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">MESLEĞİ</div>
						<div className="printColumn">{ this.state.customer.job }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">SOSYAL GÜVENLİK DURUMU</div>
						<div className="printColumn">{ this.state.customer.socialSituation }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">MAAŞ DURUMU</div>
						<div className="printColumn">{ this.state.customer.salaryStatus }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">ALACAĞI HİZMET BİÇİMİ</div>
						<div className="printColumn">{ this.state.customer.serviceFormat }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">ODA TİPİ</div>
						<div className="printColumn">{ this.state.customer.roomType }</div>
					</div>
				</div>

				<div className="printSubTitle">3. YAŞLININ SAĞLIK DURUMU</div>
				<div className="printArea">
					<div className="printRow">
						<div className="printColumn">ENGEL DURUMU</div>
						<div className="printColumn">{ this.state.engelDurumu }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">VARSA SÜREGELEN HASTALIĞI / TANISI</div>
						<div className="printColumn">{ this.state.customer.continuingSickness }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">TAKİP EDİLDİĞİ SAĞLIK KURULUŞU</div>
						<div className="printColumn">{ this.state.customer.heltInstution }</div>
					</div>
					<div className="printRow">
						<div className="printColumn">GEÇİRDİĞİ HASTALIKLAR</div>
						<div className="printColumn">{ this.state.customer.pastSickness }</div>
					</div>
				</div>

				<div className="printSubTitle">4. YAŞLININ YAKINLARINA AİT BİLGİLER</div>
				<div className="printTable">
					<div className="printTableRow">
						<div className="printTableColumn ftw1 flexW">ADI SOYADI</div>
						<div className="printTableColumn ftw2">YAKINLIĞI</div>
						<div className="printTableColumn ftw2">MESLEĞİ</div>
						<div className="printTableColumn ftw4">ADRESİ</div>
						<div className="printTableColumn ftw2">TELEFONU</div>
					</div>
					{ this.state.customerRelative.map((item, index) => (
						<div key={index} className="printTableRow">
							<div className="printTableColumn ftw1 flexW">{ item.name + ' ' + item.surName }</div>
							<div className="printTableColumn ftw2">{ item.relativeDegree }</div>
							<div className="printTableColumn ftw2">{ item.job }</div>
							<div className="printTableColumn ftw4">{ item.address }</div>
							<div className="printTableColumn ftw2">{ item.phone }</div>
						</div>
					)) }
				</div>

				<div className="printAuthor">
					<b>GÖRÜŞMEYİ GERÇEKLEŞTİREN</b>
					<span>AHMET ERKIYMAZ</span>
				</div>

				<div className="printFooter">Bu form { getDateTR(new Date(), true) } tarihinde yönetim paneli üzerinden hazırlanmıştır.</div>

			</div>
		);
	}

}

export default OnGorusme;