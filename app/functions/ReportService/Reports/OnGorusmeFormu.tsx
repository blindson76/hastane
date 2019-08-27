export default function() {
    Object.assign(this,{
        header:this.header || '#header',
        title: this.title || "ÖN GÖRÜŞME FORMU",
        gorusulenKisiAdiSoyadi:this.gorusulenKisiAdiSoyadi || '#gorusulenKisiAdiSoyadi',
        gorusmeTarihi: this.gorusmeTarihi || '#gorusmeTarihi',
        adres:this.adres || '#adres',
        telefon:this.telefon || '#telefon',
        yakinlikDerecesi:this.yakinlikDerecesi || '#yakinlikDerecesi',
        yaslininAdiSoyadi:this.yaslininAdiSoyadi || '#yaslininAdiSoyadi',
        dogumYeriTarihi:this.dogumYeriTarihi || '#dogumYeriTarihi',
        cinsiyet:this.cinsiyet || '#cinsiyet',
        medeniDurumu:this.medeniDurumu || '#medeniDurumu',
        meslegi:this.meslegi || '#meslegi',
        sosyalGuvenlikDurumu:this.sosyalGuvenlikDurumu || '#sosyalGuvenlikDurumu',
        maasDurumu:this.maasDurumu || '#maasDurumu',
        alacagiHizmetTuru:this.alacagiHizmetTuru || '#alacagiHizmetTuru',
        odaTipi:this.odaTipi || '#odaTipi',

        engenlDurumu:this.engenlDurumu || '#engenlDurumu',
        suregelenHastalik:this.suregelenHastalik || '#suregelenHastalik',
        takipEdildigiSK:this.takipEdildigiSK || '#takipEdildigiSK',
        gecirdigiHastaliklar:this.gecirdigiHastaliklar || '#gecirdigiHastaliklar',

        yakinlari:this.yakinlari || []
    })

    let yakinlar=this.yakinlari.map(k=>{
        [            
            {text:k.adiSoyadi,bold:true},
            {text:k.yakinligi,bold:true},
            {text:k.meslegi,bold:true},
            {text:k.adresi,bold:true},
            {text:k.telefonu,bold:true},
        ]
    })
    return {
        content:[
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
                            {text:'GÖRÜŞÜLEN KİŞİ ADI SOYADI',bold:true},
                            {text:this.gorusulenKisiAdiSoyadi,bold:false}
                        ],
                        [
                            {text:'GÖRÜŞME TARİHİ',bold:true},
                            {text:this.gorusmeTarihi,bold:false}
                        ],
                        [
                            {text:'ADRES',bold:true},
                            {text:this.adres,bold:false}
                        ],
                        [
                            {text:'TELEFON',bold:true},
                            {text:this.telefon,bold:false}
                        ],
                        [
                            {text:'YAKINLIK DERECESİ',bold:true},
                            {text:this.yakinlikDerecesi,bold:false}
                        ],
                        [
                            {text:'YAŞLININ ADI SOYADI',bold:true},
                            {text:this.yaslininAdiSoyadi,bold:false}
                        ],
                        [
                            {text:'DOĞUM YERİ/TARİHİ',bold:true},
                            {text:this.dogumYeriTarihi,bold:false}
                        ],
                        [
                            {text:'CİNSİYETİ',bold:true},
                            {text:this.cinsiyet,bold:false}
                        ],
                        [
                            {text:'MEDENİ DURUMU',bold:true},
                            {text:this.medeniDurumu,bold:false}
                        ],
                        [
                            {text:'MESLEĞİ',bold:true},
                            {text:this.meslegi,bold:false}
                        ],
                        [
                            {text:'SOSYAL GÜVENLİK DURUMU',bold:true},
                            {text:this.sosyalGuvenlikDurumu,bold:false}
                        ],
                        [
                            {text:'MAAŞ DURUMU (Kira, nafaka vb)',bold:true},
                            {text:this.maasDurumu,bold:false}
                        ],
                        [
                            {text:'ALACAĞI HİZMET BİÇİMİ (Huzurevi, Rehabilitasyon)',bold:true},
                            {text:this.alacagiHizmetTuru,bold:false}
                        ],
                        [
                            {text:'ODA TİPİ (Tek kişilik, Çift kişilik, Suit oda)',bold:true},
                            {text:this.odaTipi,bold:false}
                        ]
                    ]
                }
            },
            {
                text:'2- YAŞLININ SAĞLIK DURUMU',
                bold:true,
                margin:[0,20,0,0]
            },
            {
                table:{
                    widths:['auto','*'],
                    body:[
                        [
                            {text:'ENGEL DURUMU',bold:true},
                            {text:this.engelDurumu,bold:false}
                        ],
                        [
                            {text:'VARSA SÜREGELEN HASTALIĞI/ TANISI',bold:true},
                            {text:this.suregelenHastalik,bold:false}
                        ],
                        [
                            {text:'TAKİP EDİLDİĞİ SAĞLIK KURULUŞU',bold:true},
                            {text:this.takipEdildigiSK,bold:false}
                        ],
                        [
                            {text:'GEÇİRDİĞİ HASTALIKLAR',bold:true},
                            {text:this.gecirdigiHastaliklar,bold:false}
                        ]
                    ]
                }
            },
            {
                text:'3- YAŞLININ YAKINLARINA İLİŞKİN BİLGİLER',
                bold:true,
                margin:[0,20,0,0]
            },
            {
                table:{
                    widths:['auto','auto','auto','*','auto'],
                    body:[
                        [
                            {text:'ADI SOYADI',bold:true},
                            {text:'YAKINLIĞI',bold:true},
                            {text:'MESLEĞİ',bold:true},
                            {text:'ADRESİ',bold:true},
                            {text:'TELEFONU',bold:true},
                        ],
                        ...yakinlar
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
  