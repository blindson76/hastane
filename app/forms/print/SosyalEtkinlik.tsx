import * as React from 'react';

class SosyalEtkinlik extends React.Component<any, any>{

	render(){
		return(
			<div className="print">

				<div className="printLogo"></div>
				<div className="printTitle">T.C.<br />.............. KAYMAKAMLIĞI<br />............................... HUZUREVİ MÜDÜRLÜĞÜ<br /><br />SOSYAL ETKİNLİK RAPORU</div>

				<div className="printArea">
					<div className="printRow">
						<div className="printColumn">Etkinliğin Türü</div>
						<div className="printColumn"></div>
					</div>
					<div className="printRow">
						<div className="printColumn">Etkinliğin Tarihi</div>
						<div className="printColumn"></div>
					</div>
					<div className="printRow">
						<div className="printColumn">Etkinliğin Süresi</div>
						<div className="printColumn"></div>
					</div>
					<div className="printRow">
						<div className="printColumn">Etkinliğe Katılanlar</div>
						<div className="printColumn"></div>
					</div>
					<div className="printRow printRowBigHeight">
						<div className="printColumn">Etkinliğin Amacı</div>
						<div className="printColumn"></div>
					</div>
					<div className="printRow printRowBigHeight">
						<div className="printColumn">Etkinliğin Süreci</div>
						<div className="printColumn"></div>
					</div>
					<div className="printRow printRowBigHeight">
						<div className="printColumn">Değerlendirme</div>
						<div className="printColumn"></div>
					</div>
				</div>

				<div className="printAuthor">
					<b>FORMU DÜZENLEYEN</b>
					<span>AHMET ERKIYMAZ</span>
				</div>

				<div className="printFooter">Bu print 18.07.2019 09:40 tarihinde yönetim paneli üzerinden hazırlanmıştır.</div>

			</div>
		);
	}

}

export default SosyalEtkinlik;