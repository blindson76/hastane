import * as logo from 'Assets/img/logo.png'

export default function() {
    Object.assign(this,{
        header:this.header || '#header',
        title: this.title || "İLK GİEİŞ FOEMU",
        adi:this.adi || '#adi',
        soyadi:this.soyadi || '#soyadi',
        tcNo:this.tcNo || '#tcNo',
        kabulNo:this.kabulNo || '#kabulNo',
        anneBabaAdi:this.anneBabaAdi || '#anneBabaAdi',
        cinsiyeti:this.cinsiyeti || '#cinsiyeti',
        dogumYeri:this.dogumYeri || '#dogumYeri',
        dogumTarihi:this.dogumTarihi || '#dogumTarihi',
        kurulusaKabulTarihi:this.kurulusaKabulTarihi || '#kurulusaKabulTarihi',
        SGDurumveSGNo:this.SGDurumveSGNo || '#SGDurumveSGNo',
        maasDurumu:this.maasDurumu || '#maasDurumu',
        meslegi:this.meslegi || '#meslegi',
        medeniDurumu:this.medeniDurumu || '#medeniDurumu',
        ogrenimDurumu:this.ogrenimDurumu || '#ogrenimDurumu',
        geldigiYer:this.geldigiYer || '#geldigiYer',
        aldigiHizmetBicimi:this.aldigiHizmetBicimi || '#aldigiHizmetBicimi',
        kaldigiOdaTipi:this.kaldigiOdaTipi || '#kaldigiOdaTipi',
        ucretDurumu:this.ucretDurumu || '#ucretDurumu'
    })

    return {
        content:[
            {
                image: logo,
                width: 100
            },
            {
              text: this.header,
              style: "header"
            },
            {
                text: this.title,
                style: "header"
            },
            {
                table:{
                    widths:['auto','*'],
                    body:[
                        [
                            {text:'ADI',bold:true},
                            {text:this.adi,bold:false}
                        ],[
                            {text:'SOYADI',bold:true},
                            {text:this.soyadi,bold:false}
                        ],[
                            {text:'KABUL NO\n(Protokol-Kütük)',bold:true},
                            {text:this.kabulNo,bold:false}
                        ],[
                            {text:'ANNE-BABA ADI',bold:true},
                            {text:this.anneBabaAdi,bold:false}
                        ],[
                            {text:'CİNSİYETİ',bold:true},
                            {text:this.cinsiyeti,bold:false}
                        ],[
                            {text:'DOĞUM YERİ',bold:true},
                            {text:this.dogumYeri,bold:false}
                        ],[
                            {text:'DOĞUM TARİHİ',bold:true},
                            {text:this.dogumTarihi,bold:false}
                        ],[
                            {text:'KURULUŞA KABUL\nTARİHİ',bold:true},
                            {text:this.kurulusaKabulTarihi,bold:false}
                        ],[
                            {text:'SOSYAL GÜVENLİK\nDURUMU VE SOSYAL\nGÜVENLİK NO',bold:true},
                            {text:this.SGDurumveSGNo,bold:false}
                        ],[
                            {text:'MAAŞ DURUMU\n(Kendisi/Eşinden/Babasından)',bold:true},
                            {text:this.maasDurumu,bold:false}
                        ],[
                            {text:'MESLEĞİ',bold:true},
                            {text:this.meslegi,bold:false}
                        ],[
                            {text:'MEDENİ DURUMU',bold:true},
                            {text:this.medeniDurumu,bold:false}
                        ],[
                            {text:'ÖĞRENİM DURUMU',bold:true},
                            {text:this.ogrenimDurumu,bold:false}
                        ],[
                            {text:'GELDİĞİ YER',bold:true},
                            {text:this.geldigiYer,bold:false}
                        ],[
                            {text:'ALDIĞI HİZMET BİÇİMİ\n(Huzurevi-Özel Bakım)',bold:true},
                            {text:this.aldigiHizmetBicimi,bold:false}
                        ],[
                            {text:'KALDIĞI ODA TİPİ\n(Süit,VIP)',bold:true},
                            {text:this.kaldigiOdaTipi,bold:false}
                        ],[
                            {text:'ÜCRET DURUMU\n(Ücretli-Ücretsiz)',bold:true},
                            {text:this.ucretDurumu,bold:false}
                        ]
                    ]
                }
            }
        ],
        defaultStyle: {
            fontSize: 10
          },
          styles: {
            header: {
              bold: true,
              alignment: "center",
              margin: [0, 0, 0, 20]
            },
            tableHeader: {
              bold: true
            }
          }
        
    };
  }
  