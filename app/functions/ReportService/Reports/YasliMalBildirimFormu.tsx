import * as logo from 'Assets/img/logo.png'
export default function() {
    Object.assign(this,{
        header:this.header || '#header',
        title: this.title || "YAŞLI MAL BİLDİRİM FORMU",
        adiSoyadi:this.adiSoyadi || '#adiSoyadi',
        dogumYeriTarihi:this.dogumYeriTarihi || '#dogumYeriTarihi',
        sonAdres:this.sonAdres || '#sonAdres',
        sosyalGuvenlikKurulusu:this.sosyalGuvenlikKurulusu || '#sosyalGuvenlikKurulusu',
        vasisler:this.vasisler || [],
        tasinmazMallar:this.tasinmazMallar || [
            
        ],
        tasinirMallar:this.tasinirMallar || [],
        digerGelirler:this.digerGelirler || ["dklfjlsdfk","lşdksfsldf"],
        tarih:this.tarih || '#tarih'
    })

    let vasisler=this.vasisler.map(v=>[
        {
            text:''
        },
        {
            text:v.adiSoyadi,
            bold:false
        },
        {
            text:v.yakinlikDerecesi,
            bold:false,
            colSpan:2
        },
        '',
        {
            text:v.adresi,
            bold:false
        }
        ])
    if(vasisler.length<1){
        vasisler=[['','','','']]
    }
    let tasinmazlar=this.tasinmazMallar.map((k,i)=>[
        {
            text:'',
            bold:true
        },
        {
            text:k.turu,
            bold:false
        },
        {
            text:k.degeri,
            bold:false,
            colSpan:2
        },
        '',
        {
            text:k.adres,
            bold:false
        }
    ])
    if(tasinmazlar.length<1){
        tasinmazlar=[
            ['',{text:'',colSpan:4},'','','']
        ]
    }
    
    let tasinirlar=this.tasinirMallar.map((k,i)=>[
        {
            text:''
        },
        {
            text:k.turu,
            bold:false
        },
        {
            text:k.sayisi,
            bold:false
        },
        {
            text:k.tutari,
            bold:false
        },
        {
            text:k.adres,
            bold:false
        }
    ])
    if(tasinirlar.length<1){
        tasinirlar=[
            ['','','','','']
        ]
    }
    let digerGelirler=this.digerGelirler.map((k,i)=>[
        {
            text:i==0?'DİĞER GELİRLERİ':'',
            bold:i==0?true:false,
            rowSpan:this.digerGelirler.length
        },
        {
            text:[
                {
                    text:i.toString()+' ',
                    bold:true
                },
                k
            ],
            colSpan:4
        },
        '',
        '',
        ''
    ])
    if(digerGelirler.length<1){
        digerGelirler=[[
            {
                text:'DİĞER GELİRLER',
                bold:true
            },
            {
                text:'',
                colSpan:4
            },
            '',
            '',
            ''
        ]]
    }
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
                    widths:['auto','auto','auto','auto','*'],
                    body:[
                        [
                            'ADI SOYADI',
                            {text:this.adiSoyadi,bold:false,colSpan:2},
                            '',
                            'DOĞUM YERİ ve TARİHİ',
                            {text:this.dogumYeriTarihi,bold:false}
                        ],
                        [
                            'SON OTURDUĞU YERİN ADRESİ',
                            {
                                text:this.sonAdres,
                                colSpan:2
                            },
                            '',
                            {colSpan:2,text:''},
                            ""
                        ],
                        [
                            'AYLIĞI ALMAKTA OLDUĞU SOSYAL GÜVENİK KURULUŞU',
                            {text:this.sosyalGuvenlikKurulusu,bold:false},
                            {
                                text:'',
                                colSpan:2
                            },
                            '',
                            ''
                        ],
                        [
                            {text:'VASİSLERİ',rowSpan:vasisler.length+1},
                            'ADI SOYADI',
                            {
                                text:'YAKINLIK DERECESİ',
                                colSpan:2
                            },
                            '',
                            'ADRESİ'
                        ],
                        ...vasisler,
                        [
                            {
                                text:'TAŞINMAZ MALLAR',
                                bold:true
                            },
                            {
                                text:'TÜRÜ',
                                bold:true
                            },
                            {
                                text:'DEĞERİ',
                                bold:true
                            },
                            {
                                text:'',
                                bold:true
                            },
                            {
                                text:'BULUNDUĞU ADRES\n(Ada-Pafta-Parsel)',
                                bold:true
                            }
                        ],
                        ...tasinmazlar,
                        [
                            {
                                text:'TAŞINIR MALLAR',
                                bold:true,
                                rowSpan:tasinirlar.length+1
                            },
                            {
                                text:'TÜRÜ',
                                bold:true
                            },
                            {
                                text:'SAYISI',
                                bold:true
                            },
                            {
                                text:'TUTARI',
                                bold:true
                            },
                            {
                                text:'BULUNDUĞU ADRESİ',
                                bold:true
                            }
                        ],
                        ...tasinirlar,
                        ...digerGelirler
                    ]
                },
                bold:true
            },
            {
                text:'Yukaraıda beyan ettiğim hususların gerçeklere uygun olduğunu, '
                    +'aksinin saptanması durumunda var olan ilgili mevzuat hükümleri '
                    +'gereğince hakkımda gerekli idari ve yasal işlemlerin yapılmasını '
                    +'ve idarenin buna hak kazanmış olacağını kabul ve taahhüt ederim.',
                bold:true,
                margin:[0,20,0,0]
                
            },
            {
                columns:[
                    '',
                    '',
                    {
                        text:this.tarih+'\n'+this.adiSoyadi,
                        bold:true,
                        alignment:'center'
                    }
                ],
                margin:[0,20,0,0]
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
  