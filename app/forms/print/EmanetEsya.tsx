import * as React from 'react';

class EmanetEsya extends React.Component<any, any>{

	render(){
		return(
			<div className="print">

				<div className="printLogo"></div>
				<div className="printTitle">T.C.<br />.............. KAYMAKAMLIĞI<br />............................... HUZUREVİ MÜDÜRLÜĞÜ<br /><br />YAŞLI EMANET EŞYA FORMU</div>

				<div className="printAreaThree">
					<div className="printRowThree">
						<div className="printColumnThree">SIRA NO</div>
						<div className="printColumnThree">EMANET EDİLEN EŞYANIN CİNSİ</div>
						<div className="printColumnThree">EMANET EDİLEN EŞYANIN MİKTARI</div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree">1</div>
						<div className="printColumnThree">Bilgisayar</div>
						<div className="printColumnThree">1</div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree">2</div>
						<div className="printColumnThree">Diş Fırçası ve Diş Macunu</div>
						<div className="printColumnThree">5</div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree">3</div>
						<div className="printColumnThree">Kablolu Kulaklık</div>
						<div className="printColumnThree">1</div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
					</div>
					<div className="printRowThree">
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
						<div className="printColumnThree"></div>
					</div>
				</div>

				<div className="printBottomThree">
					<div className="printBottomThreeSingle">
						<b>TESLİM EDEN YAŞLININ</b>
						<em>Halit Yalvaç</em>
						<em>18.07.2019</em>
					</div>
					<div className="printBottomThreeSingle">
						<b>TESLİM ALANIN</b>
						<em>Pelin Sucuyum</em>
						<em>Bina Sorumlusu</em>
						<em>18.07.2019</em>
					</div>
					<div className="printBottomThreeSingle">
						<b>ŞAHİT OLAN</b>
						<em>Hakan Şahitim</em>
						<em>Doktor</em>
						<em>18.07.2019</em>
					</div>
				</div>

				<div className="printBottomCenter">
					<b>UYGUNDUR</b>
					<em>..../..../........</em>
					<div className="printBottomKurulusMuduru">KURULUŞ MÜDÜRÜ</div>
				</div>

			</div>
		);
	}

}

export default EmanetEsya;