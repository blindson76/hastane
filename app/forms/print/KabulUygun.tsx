import * as React from 'react';

class KabulUygun extends React.Component<any, any>{

	render(){
		return(
			<div className="print">

				<div className="printLogo"></div>
				<div className="printTitle">T.C.<br />.............. KAYMAKAMLIĞI<br />............................... HUZUREVİ MÜDÜRLÜĞÜ</div>

				<div className="printKabulUygunBaslik">
					<b>SAYIN:</b>
					<em>
						<span>Uğur Dalkıran</span>
						<span>Kötekli Mahallesi. 236. Sokak. Gül Apartmanı. No: 32 / 9 - Menteşe / Muğla</span>
					</em>
				</div>

				<div className="printKabulUygunMetin">
					<p>İlgi: ..../..../........ tarihli başvurunuz.</p>
					<p>Kuruluşumuza kabulünüz uygun görülmüş olup, kabul işlemlerinize ilişkin görüşmek üzere en geç ..../..../........ tarihine kadar kuruluş sosya servisiyle iletişime (telefonla) geçmeniz gerekmektedir.</p>
					<p>Gereğini rica ederim.</p>
				</div>

				<div className="printRight">
					<em>......................................</em>
					<b>KURULUŞ MÜDÜRÜ</b>
				</div>

			</div>
		);
	}

}

export default KabulUygun;