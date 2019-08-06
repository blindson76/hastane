import * as React from 'react';

class YasliKabul extends React.Component<any, any>{

	render(){
		return(
			<div className="print">

				<div className="printLogo"></div>
				<div className="printTitle">T.C.<br />.............. KAYMAKAMLIĞI<br />............................... HUZUREVİ MÜDÜRLÜĞÜ<br /><br />YAŞLI KABUL RAPORU</div>

				<div className="printSubTitle mt0">1. YAŞLIYA AİT BİLGİLER</div>
				<div className="printArea">
					<PrintRow
						title="KABUL NO"
					/>
					<PrintRow
						title="YAŞLININ T.C. KİMLİK NO"
					/>
					<PrintRow
						title="YAŞLININ ADI SOYADI"
					/>
					<PrintRow
						title="YAŞLININ ANA-BABA ADI"
					/>
					<PrintRow
						title="DOĞUM YERİ / TARİHİ"
					/>
					<PrintRow
						title="CİNSİYETİ"
					/>
					<PrintRow
						title="MEDENİ DURUMU"
					/>
					<PrintRow
						title="MESLEĞİ"
					/>
					<PrintRow
						title="SOSYAL GÜVENLİK DURUMU"
					/>
					<PrintRow
						title="MAAŞ DURUMU"
					/>
					<PrintRow
						title="DİĞER GELİRLERİ"
					/>
					<PrintRow
						title="ALACAĞI HİZMET BİÇİMİ"
					/>
					<PrintRow
						title="ÜCRET DURUMU"
					/>
					<PrintRow
						title="ODA TİPİ"
					/>
					<PrintRow
						title="KURULUŞA KABUL TARİHİ"
					/>
					<PrintRow
						title="KURULUŞA KABUL NEDENİ"
					/>
					<PrintRow
						title="KURULUŞA KABUL ŞEKLİ"
					/>
					<PrintRow
						title="KİM TARAFINDAN GETİRİLDİĞİ"
					/>
					<PrintRow
						title="NEREDEN GELDİĞİ"
					/>
					<PrintRow
						title="KURULUŞA GELMEDEN ÖNCE NEREDE YAŞADIĞI"
					/>
				</div>
				<div className="printSubTitle">2. YAŞLININ SAĞLIK DURUMU</div>
				<div className="printArea">
					<PrintRow
						title="ENGEL DURUMU"
					/>
					<PrintRow
						title="VARSA SÜREGELEN HASTALIĞI / TANISI"
					/>
					<PrintRow
						title="TAKİP EDİLDİĞİ SAĞLIK KURULUŞU"
					/>
					<PrintRow
						title="GEÇİRDİĞİ HASTALIKLAR"
					/>
					<PrintRow
						title="KULLANDIĞI CİHAZLAR"
					/>
					<PrintRow
						title="ALERJİK DURUMU"
					/>
					<PrintRow
						title="SAĞLIK GÜVENCESİ"
					/>
					<PrintRow
						title="DİYET UYGULAYIP UYGULAMADIĞI"
					/>
				</div>

				<div className="printSubTitle">3. YAŞLININ GENEL ÖZELLİKLERİ</div>
				<div className="printArea">
					<PrintRow
						title="YAŞLIYA İLİŞKİN İLK İZLENİM"
					/>
					<PrintRow
						title="ALIŞKANLIKLARI"
					/>
					<PrintRow
						title="HOBİLERİ"
					/>
				</div>

				<div className="printSubTitle">5. YAŞLI EMANET VE EMANET KASA İŞLEMLERİ</div>
				<div className="printArea">
					<PrintRow
						title="YAŞLININ EMANET KASASINA VE/VEYA EMANET"
					/>
				</div>

			</div>
		);
	}

}

export default YasliKabul;

class PrintRow extends React.Component<any, any>{
	render(){
		return(
			<div className="printRow">
				<div className="printColumn">{ this.props.title }</div>
				<div className="printColumn">{ this.props.value }</div>
			</div>
		);
	}
}