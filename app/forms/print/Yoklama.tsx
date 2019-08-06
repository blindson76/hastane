import * as React from 'react';

class Yoklama extends React.Component<any, any>{

	gunler(write){
		let gunler = [];
		for ( let i = 1; i <= 31; i++) gunler.push(<div key={i} className="yoklamaColumn">{ write ? i : null }</div>);
		return gunler;
	}

	render(){
		return(
			<div className="print">

				<div className="printLogo"></div>
				<div className="printTitle">T.C.<br />.............. KAYMAKAMLIĞI<br />............................... HUZUREVİ MÜDÜRLÜĞÜ<br /><br />YOKLAMA ÇİZELGESİ</div>

				<div className="yoklama">
					<div className="yoklamaRow">
						<div className="yoklamaColumn">SIRA NO</div>
						<div className="yoklamaColumn">ADI SOYADI</div>
						{ this.gunler(true) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">1</div>
						<div className="yoklamaColumn">Kemal Tahir</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">1</div>
						<div className="yoklamaColumn">Kemal Tahir</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">1</div>
						<div className="yoklamaColumn">Kemal Tahir</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">1</div>
						<div className="yoklamaColumn">Kemal Tahir</div>
						{ this.gunler(false) }
					</div>
				</div>

				<div className="yoklama yoklamaFooter">
					<div className="yoklamaRow">
						<div className="yoklamaColumn">Mevcut Yaşlı Sayısı:</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">İzinli Yaşlı Sayısı:</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">Hastanede Yatan Yaşlı Sayısı:</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">Hasta Yaşlı Sayısı:</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">İzinsiz Ayrılan Yaşlı Sayısı:</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">Misafir Yaşlı Sayısı:</div>
						{ this.gunler(false) }
					</div>
					<div className="yoklamaRow">
						<div className="yoklamaColumn">Toplam Yaşlı Sayısı:</div>
						{ this.gunler(false) }
					</div>
				</div>

			</div>
		);
	}

}

export default Yoklama;