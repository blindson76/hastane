import * as React from 'react';

class AylikKabulEdilen extends React.Component<any, any>{

	render(){
		return(
			<div className="print">

				<div className="printLogo"></div>
				<div className="printTitle">MİA HUZUREVİ<br />........ YILI ........ AYI KABUL EDİLEN YAŞLI LİSTESİ</div>

				<div className="pirntYasliListesi">
					<div className="printYasliListesiRow">
						<div className="printYasliListesiColumn">SIRA NO</div>
						<div className="printYasliListesiColumn">ADI SOYADI</div>
						<div className="printYasliListesiColumn">CİNSİYETİ</div>
						<div className="printYasliListesiColumn">DOĞUM YERİ VE YILI</div>
						<div className="printYasliListesiColumn">ÖĞRENİM DURUMU</div>
						<div className="printYasliListesiColumn">MÜRACAAT ETTİĞİ İL</div>
						<div className="printYasliListesiColumn">
							<span>
								<em>HUZUREVİNE KABUL</em>
							</span>
							<span>
								<em>TARİH</em>
								<em>NEDENİ</em>
							</span>
						</div>
						<div className="printYasliListesiColumn">ÜCRET DURUMU</div>
						<div className="printYasliListesiColumn">SAĞLIK DURUMU</div>
					</div>
					<div className="printYasliListesiRow">
						<div className="printYasliListesiColumn">1</div>
						<div className="printYasliListesiColumn">EMRE KAÇAN</div>
						<div className="printYasliListesiColumn">ERKEK</div>
						<div className="printYasliListesiColumn">KOCASİNAN 1986</div>
						<div className="printYasliListesiColumn">LİSANS</div>
						<div className="printYasliListesiColumn">KAYSERİ</div>
						<div className="printYasliListesiColumn">
							<span>
								<em>11.07.2019</em>
								<em>YAŞLI</em>
							</span>
						</div>
						<div className="printYasliListesiColumn">İYİ</div>
						<div className="printYasliListesiColumn">SAĞLIKLI</div>
					</div>
					<div className="printYasliListesiRow">
						<div className="printYasliListesiColumn">1</div>
						<div className="printYasliListesiColumn">EMRE KAÇAN</div>
						<div className="printYasliListesiColumn">ERKEK</div>
						<div className="printYasliListesiColumn">KOCASİNAN 1986</div>
						<div className="printYasliListesiColumn">LİSANS</div>
						<div className="printYasliListesiColumn">KAYSERİ</div>
						<div className="printYasliListesiColumn">
							<span>
								<em>11.07.2019</em>
								<em>YAŞLI</em>
							</span>
						</div>
						<div className="printYasliListesiColumn">İYİ</div>
						<div className="printYasliListesiColumn">SAĞLIKLI</div>
					</div>
				</div>

				<div className="printBottomTwo">
					<div className="printBottomTwoSingle">
						<b>DÜZENLEYEN</b>
						<em>Halit Yalvaç</em>
						<em>Doktor</em>
						<em>18.07.2019</em>
					</div>
					<div className="printBottomTwoSingle">
						<em>..../..../........</em>
						<div className="printBottomTwoSingleB">KURULUŞ MÜDÜRÜ</div>
					</div>
				</div>

			</div>
		);
	}

}

export default AylikKabulEdilen;