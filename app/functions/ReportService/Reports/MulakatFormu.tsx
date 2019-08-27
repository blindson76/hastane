export default function() {
  Object.assign(this, {
    header:this.header || '#header',
    title: this.title || "MÜLAKAT FORMU",
    adiSoyadi:this.adiSoadi || '#adiSoyadi',
    tcNo:this.tcNo || '#tcNo',
    dogumYeriTarihi:this.dogumYeriTarihi ||'#dogumYeriTarihi',
    c1AdiSoyadi:this.c1AdiSoyadi || '#c1AdiSoyadi',
    c1Yasi:this.c1Yasi || '#c1Yasi',
    c1Meslegi:this.c1Meslegi || '#c1Meslegi',
    c1MedeniDurum:this.c1MedeniDurum || '#c1MedeniDurum',
    c1Adresi:this.c1Adresi || '#c1Adresi',
    c1Telefon:this.c1Telefon || '#c1Telefon',

    c2AdiSoyadi:this.c2AdiSoyadi || '#c2AdiSoyadi',
    c2Yasi:this.c2Yasi || '#c2Yasi',
    c2Meslegi:this.c2Meslegi || '#c2Meslegi',
    c2MedeniDurum:this.c2MedeniDurum || '#c2MedeniDurum',
    c2Adresi:this.c2Adresi || '#c2Adresi',
    c2Telefon:this.c2Telefon || '#c2Telefon',

    c3AdiSoyadi:this.c3AdiSoyadi || '#c3AdiSoyadi',
    c3Yasi:this.c3Yasi || '#c3Yasi',
    c3Meslegi:this.c3Meslegi || '#c3Meslegi',
    c3MedeniDurum:this.c3MedeniDurum || '#c3MedeniDurum',
    c3Adresi:this.c3Adresi || '#c3Adresi',
    c3Telefon:this.c3Telefon || '#c3Telefon',

    y1AdiSoyadi:this.y1AdiSoyadi || '#y1AdiSoyadi',
    y1YakinlikDerecesi:this.y1YakinlikDerecesi || '#y1YakinlikDerecesi',
    y1Adresi:this.y1Adresi || '#y1Adresi',
    y1Telefon:this.y1Telefon || '#y1Telefon',

    y2AdiSoyadi:this.y2AdiSoyadi || '#y2AdiSoyadi',
    y2YakinlikDerecesi:this.y2YakinlikDerecesi || '#y2YakinlikDerecesi',
    y2Adresi:this.y2Adresi || '#y2Adresi',
    y2Telefon:this.y2Telefon || '#y2Telefon',

    y3AdiSoyadi:this.y3AdiSoyadi || '#y3AdiSoyadi',
    y3YakinlikDerecesi:this.y3YakinlikDerecesi || '#y3YakinlikDerecesi',
    y3Adresi:this.y3Adresi || '#y3Adresi',
    y3Telefon:this.y3Telefon || '#y3Telefon',
    
    kabulNo:this.kabulNo || '#kabulNo',
    kabulTarihi: this.kabulTarihi || '#kabulTarihi',
    ayrilisTarihi:this.ayrilisTarihi || '#ayrilisTarihi',
    ayrilmaAdresi:this.ayrilmaAdresi || '#ayrilmaAdresi',
    aciklama:this.aciklama || '#aciklama',
    duzenlemeTarihi:this.duzenlemeTarihi || '#duzenlemeTarihi',

    hastalikTuru:this.hastalikTuru || '#hastalikTuru',
    hastalikSuresi:this.hastalikSuresi || '#hastalikSuresi',
    halenTedaviGormeDurumu:this.halenTedaviGormeDurumu || '#halenTedaviGormeDurumu',

    ozurTuru:this.ozurTuru || '#ozurTuru',
    ozurSuresi:this.ozurSuresi || '#ozurSuresi',
    halenTedaviGoruyorIseTuru:this.halenTedaviGoruyorIseTuru || '#halenTedaviGoruyorIseTuru',
    halenTedaviTuru:this.halenTedaviTuru || '#halenTedaviTuru',
    ozrunGunlukYasamiEtkilemeDurumu:this.ozrunGunlukYasamiEtkilemeDurumu || '#ozrunGunlukYasamiEtkilemeDurumu',
    diyetTuru:this.diyetTuru || '#diyetTuru',
    huzurevinihangiKanaldanOgrendigi:this.huzurevinihangiKanaldanOgrendigi || '#huzurevinihangiKanaldanOgrendigi',
    huzurevindenBeklentileri:this.huzurevindenBeklentileri || '#huzurevindenBeklentileri',
    formuDuzenleyen:this.formuDuzenleyen || '#formuDuzenleyen',
    fdUnvan:this.fdUnvan || '#fdUnvan'
  });
  return {
    content: [
      {
        text: this.header,
        style: "header"
      },
      { text: this.title, style: "header" },
      {text:'A- MÜRACAATÇININ',bold:true},
      {
        table:{
          widths:['auto','*'],
          body:[
            [
              {text:'ADI SOYADI- TC NO',bold:true},
              {text:this.adiSoyadi +' ' + this.tcNo,bold:false},
            ],
            [
              {text:'DOĞUM YERİ VE YILI',bold:true},
              {text:this.dogumYeriTarihi},
            ]
          ]
        }
      },
      {text:'B- VARSA\n1- ÇOCUKLARI',bold:true,margin:[0,15,0,0]},
      {
        table:{
          widths:['auto','*','*','*'],
          body:[
            [
              {text:'',bold:true},
              {text:'1. ÇOCUK',bold:true},
              {text:'2. ÇOCUK',bold:true},
              {text:'3. ÇOCUK',bold:true},
            ],
            [
              {text:'ADI SOYADI',bold:true},
              {text:this.c1AdiSoyadi,bold:false},
              {text:this.c2AdiSoyadi,bold:false},
              {text:this.c3AdiSoyadi,bold:false}
            ],
            [
              {text:'YAŞI',bold:true},
              {text:this.c1Yasi,bold:false},
              {text:this.c2Yasi,bold:false},
              {text:this.c3Yasi,bold:false}
            ],
            [
              {text:'MESLEĞİ',bold:true},
              {text:this.c1Meslegi,bold:false},
              {text:this.c2Meslegi,bold:false},
              {text:this.c3Meslegi,bold:false}
            ],
            [
              {text:'MEDENİ DURUMU',bold:true},
              {text:this.c1MedeniDurum,bold:false},
              {text:this.c2MedeniDurum,bold:false},
              {text:this.c3MedeniDurum,bold:false}
            ],
            [
              {text:'ADRESİ',bold:true},
              {text:this.c1Adresi,bold:false},
              {text:this.c2Adresi,bold:false},
              {text:this.c3Adresi,bold:false}
            ],
            [
              {text:'TELEFON NO',bold:true},
              {text:this.c1Telefon,bold:false},
              {text:this.c2Telefon,bold:false},
              {text:this.c3Telefon,bold:false}
            ]
          ]
        }
      },
      {text:'2- DİĞER YAKINLARI',bold:true,margin:[0,15,0,0]},
      {
        table:{
          widths:['auto','*','*','*'],
          body:[
            [
              {text:'',bold:true},
              {text:'1. Yakını',bold:true},
              {text:'2. Yakını',bold:true},
              {text:'3. Yakını',bold:true},
            ],
            [
              {text:'ADI SOYADI',bold:true},
              {text:this.y1AdiSoyadi,bold:false},
              {text:this.y2AdiSoyadi,bold:false},
              {text:this.y3AdiSoyadi,bold:false}
            ],
            [
              {text:'YAKINLIK DERECESİ',bold:true},
              {text:this.y1YakinlikDerecesi,bold:false},
              {text:this.y2YakinlikDerecesi,bold:false},
              {text:this.y3YakinlikDerecesi,bold:false}
            ],
            [
              {text:'ADRESİ',bold:true},
              {text:this.y1Adresi,bold:false},
              {text:this.y2Adresi,bold:false},
              {text:this.y3Adresi,bold:false}
            ],
            [
              {text:'TELEFON NO',bold:true},
              {text:this.y1Telefon,bold:false},
              {text:this.y2Telefon,bold:false},
              {text:this.y3Telefon,bold:false}
            ]
          ]
        }
      },
      {
        margin:[0,20,0,0],
        table:{
          border:[false,false,false,false],
          body:[
            ['1. Geçirmiş olduğu önemli hastalık ve ameliyatlar',''],
            ['a) Hastalık Türü',':'+this.hastalikTuru],
            ['b) Hastalık Süresi',':'+this.hastalikSuresi],
            ['Haalen Tedavi Görme Durumu',':'+this.halenTedaviGormeDurumu],
            ['',''],
            ['2. Özür Durumu',''],
            ['a) Özür Türü',':'+this.ozurTuru],
            ['b) Özür Süresi',':'+this.ozurSuresi],
            ['c) Halen Tedavi Görüyor ise Türü',':'+this.halenTedaviGoruyorIseTuru],
            ['d) Özrünün günlük yaşamı etkileme durumu',':'+this.ozrunGunlukYasamiEtkilemeDurumu],
            ['3. Diyet uyguluyorsa türü',':'+this.diyetTuru],
            ['C) Huzurevini hangi kanaldan öğrendiği',':'+this.huzurevinihangiKanaldanOgrendigi],
            ['D) Huzurevinden beklentileri',':'+this.huzurevindenBeklentileri],
          ]
        },
        layout: {
          defaultBorder: false,
        }
      },
      {
        columns:[
          '',
          '',
          '',
          'FORMU DÜZENLEYEN\n'+
            'ADI SOYADI: '+this.formuDuzenleyen+'\n'+
            'ÜNVAN: '+this.fdUnvan+'\n'+
            'İMZA'
        ],
        margin:[0,15,0,0],
        fontSize:10
      }
      
    ],
    defaultStyle: {
      fontSize: 12
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
