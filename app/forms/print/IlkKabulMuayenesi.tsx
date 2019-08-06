import * as React from 'react';

class IlkKabulMuayenesi extends React.Component<any, any>{

	render(){
		return(
			<div className="print IlkKabulMuayenesi">

				<div className="printLogo"></div>
				<div className="printTitle">T.C.<br />AİLE VE SOSYAL POLİTİKALAR İL MÜDÜRLÜĞÜ<br /><br />İLK KABUL MUAYENESİ</div>

				<div className="printSubTitle">Kimlik Bilgileri <div>Tarih: .../.../......</div></div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Adı Soyadı</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Kuruluşa Geldiği Yer</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Sosyal Güvencesi</div>
						<div className="printHorizontalColumn"></div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">T.C. Kimlik No</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Anne - Baba Adı</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Boyu / Kilosu</div>
						<div className="printHorizontalColumn"></div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Doğum Tarihi / Yeri</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Kan Grubu</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Alerjisi</div>
						<div className="printHorizontalColumn"></div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Cinsiyeti</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Eğitim Durumu</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Kalacağı Kat / Oda No</div>
						<div className="printHorizontalColumn"></div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Kuruluşa Kabul Tarihi</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Mesleği</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Diğer</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Birime Giriş Şekli</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Yürüyerek</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Tekerlekli Sandalye</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Destekle</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Diğer</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Düşme Riski Değerlendirmesi</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow dusmeRiskiSatiri">
						<div className="printHorizontalColumn">Var</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Yok</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">* İtaki Düşme Riski Ölçeği ile Değerlendirme yapılır.</div>
					</div>
				</div>

				<div className="printSubTitle">Konuşma Durumu</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Konuşabiliyor</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Konuşamıyor</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Diğer</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">İşitme Durumu</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Duyabiliyor</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Duyamıyor</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">İşitme Cihazı Kullanıyor mu?</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Diğer</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Görme Durumu</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Görebiliyor</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Göremiyor</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Gözlük Kullanıyor</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Şaşılık Var mı?</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Diğer</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Hastalıklar</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Epilepsi</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">HT</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Psikiyatrik ve Ruhsal Hastalık</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Baş Dönmesi</div>
						<div className="printHorizontalColumn"></div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">DM</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">KOAH</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Kalp Yetersizliği</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Sarılık</div>
						<div className="printHorizontalColumn"></div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Siyanoz</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Kusma</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Beslenme Güçlüğü</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Kaza ve Ameliyat</div>
						<div className="printHorizontalColumn"></div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Parazit</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Diğer</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Ailesel Hastalıklar</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Var (Belirtiniz)</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Yok</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Sürekli Kullandığı</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Diş Protezi</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Kalp Pili</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Diğer</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Zararlı Alışkanlıklar</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Var (Belirtiniz)</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Yok</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">Bağımlılık Durumu</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Var (Belirtiniz)</div>
						<div className="printHorizontalColumn"></div>
						<div className="printHorizontalColumn">Yok</div>
						<div className="printHorizontalColumn"></div>
					</div>
				</div>

				<div className="printSubTitle">İlaç Kullanımı</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow ilacKullanimiSatiri">
						<div className="printHorizontalColumn">Antiepileptik İlaç Kullanımı: (Depakin, Epdantoin, Luminal vs:) ...............................................................</div>
					</div>
					<div className="printHorizontalRow ilacKullanimiSatiri">
						<div className="printHorizontalColumn">Psikiyatrik İlaç Kullanımı: (Xanax, Diazem, Diazepam, Aniketon vs:) ...............................................................</div>
					</div>
				</div>

				<div className="printSubTitle">Mental Durumu</div>
				<div className="printHorizontal">
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Mental Reterdasyon</div>
						<div className="printHorizontalColumn">Var ( )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Varsa Derecesi ( )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yok ( )</div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Konfüzyon</div>
						<div className="printHorizontalColumn">Var ( )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yok ( )</div>
					</div>
					<div className="printHorizontalRow">
						<div className="printHorizontalColumn">Oryantasyon Düzeyi</div>
						<div className="printHorizontalColumn">Var ( )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yok ( )</div>
					</div>
				</div>

				<div className="printFooter">Bu print 18.07.2019 09:40 tarihinde yönetim paneli üzerinden hazırlanmıştır.</div>

			</div>
		);
	}

}

export default IlkKabulMuayenesi;