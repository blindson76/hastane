export default function() {
  const headers = [
    [
      { text: "SIRA NO", style: "tableHeader" },
      { text: "EŞYANIN CİNSİ", style: "tableHeader" },
      { text: "ADEDİ VEYA MİKTARI", style: "tableHeader" }
    ]
  ];
  Object.assign(this, {
    kurulusAdi: this.kurulusAdi || "#kurulusAdi",
    dogumYeri: this.dogumYeri || "#dogumYeri",
    dogumTarihi: this.dogumTarihi || "#dogumTarihi",
    header:
      this.header ||
      "TC\nYENİMAHALLE KAYMAKAMLIĞI\nDEMETEVLER FATMA ÜÇER HUZUREVİ\nMÜDÜRLÜĞÜ",
    title: this.title || "YÜKLENME SENEDİ",
    text: this.text || [
      `Kanun, Tüzük ve Yönetmeliklere göre ${
        this.kurulusAdi
      }'nde kalacak olan ${this.dogumYeri} ${this.dogumTarihi} doğumlu `,
      {
        text:
          `${
            this.adiSoyadi
          } içeriğini benim bilerek aynen kabul ettiğim taahhütname hükümleri içinde` +
          `${
            this.assignDate
          } tarihinden itibaren geçerli olan ve yönetmeliğin 62. maddesinde belirtilen hükümler çerçevesinde;\n`,
        bold: true
      },
      "- Aylık bakım ücreti üzerinden tahakkuk edecek borçları ödeyeceğimi, ödemediğim taktirde, " +
        "kanuni faizi ile birlikte tediyesini müşterek borçlu müteselsil kefil sıfatıyla taahhüt ve" +
        " tekeffül ettiğimi ve bu meblağı istenir istenmez protesto keşidesine ve hüküm istihsaline " +
        "gerek kalmaksızın nakden ve defaten ödeyeceğimi,\n",

      {
        text:
          "-İlaç ve tedavi masraflarını ödemeyi\n" +
          "-Kuruluş Müdürlüğünün gerek görmesi halinde yaşlının kurum dışında bakım ve tedavisini sağlamayı\n" +
          "- Ölümü halinde cenaze işlem ve masraflarını karşılamayı\n" +
          "- İhtilaf vukuunda Ankara Mahkemelerinin ve icra dairelerinin yetkili olacağını şimdiden kabul ettiğimi beyan ve ikrar ederim.\n",
        bold: true
      },
      {
        text: "(Aylık Bakım Ücreti="
      },
      {
        text: "663*12-7956 TL",
        bold: true
      }
    ]
  });
  return {
    content: [
      {
        text: this.header,
        style: "header"
      },
      {
        text: this.title,
        style: "header"
      },
      {
        table: {
          widths: ["auto", "auto", "auto"],
          heights: [, 30, , 50, 40],
          body: [
            [{ colSpan: 3, text: this.text }, {}, {}],
            [
              "",
              { text: "YÜKLENİCİ", bold: true },
              { text: "ŞAHİT", bold: true }
            ],
            [
              { text: "ADI SOYADI", bold: true },
              { text: this.adiSoyadi2, bold: true },
              {}
            ],
            [
              { text: "ADRESİ", bold: true },
              { text: this.adres, bold: false },
              ""
            ],
            [{ text: "İMZA", bold: true }, "", ""]
          ]
        }
      }
    ],
    defaultStyle: {
      fontSize: 12,
      bold: false
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
