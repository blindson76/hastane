export default function() {
  Object.assign(this, {
    header:this.header || '#header',
    title: this.title || "#title",
    kabulNo:this.kabulNo || '#kabulNo',
    adiSoyadi:this.adiSoadi || '#adiSoyadi',
    dogumYeriTarihi:this.dogumYeriTarihi ||'#dogumYeriTarihi',
    kabulTarihi: this.kabulTarihi || '#kabulTarihi',
    ayrilisTarihi:this.ayrilisTarihi || '#ayrilisTarihi',
    ayrilmaAdresi:this.ayrilmaAdresi || '#ayrilmaAdresi',
    aciklama:this.aciklama || '#aciklama',
    duzenlemeTarihi:this.duzenlemeTarihi || '#duzenlemeTarihi'

  });
  return {
    content: [
      {
        text: this.header,
        style: "header"
      },
      { text: this.title, style: "header" },
      {
        table: {
          widths: ["auto", "*"],
          body: [
            [{ text: "KABUL NO", bold: true }, { text: this.kabulNo }],
            [
              { text: "YAŞLININ ADI SOYADI", bold: true },
              { text: this.adiSoyadi }
            ],
            [
              { text: "DOĞUM YERİ-DOĞUM TARİHİ", bold: true },
              { text: this.dogumYeriTarihi }
            ],
            [{ text: "KABUL TARİHİ", bold: true }, { text: this.kabulTarihi }],
            [
              {
                text: "AYRILIŞ TARİHİ\n(Kendi isteği, vefat, nakil)",
                bold: true
              },
              { text: this.ayrilisTarihi }
            ],
            [
              {
                text: "KENDİ İSTEĞİ YA DA NAİK\n YOLUYLA, AYRILMIŞSA ADRESİ",
                bold: true
              },
              { text: this.ayrilmaAdresi }
            ]
          ]
        },
        margin:[0,0,0,30]
      },
      {
        text:
          "Yaşlının kuruluştan ayrılışı kendi isteği, terk ya da kendi isteği dışında bir başka Kuruluşa nakil ise\nAÇIKLAMA:",
        bold: true
      },
      {
        text: this.aciklama,
        margin:[10,0,0,50]
      },
      {
          text:'Formu Düzenleyen\nADI SOYADI',
          margin:[0,0,0,30]
      },
      {
          text:this.duzenlemeTarihi
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
