import * as logo from 'Assets/img/logo.png'
export default function(){
    return {
      content: [{
        image: logo,
        width: 100
      }, {
        text: 'TC\n'+this.kaymakamlik+' KAYMAKAMLIĞI\n '+this.huzurevi+' HUZUREVİ MÜDÜRLÜĞÜ',
        fontSize: 15,
        margin: [0, 0, 0, 0],
        alignment: "center",
        bold: true
      }, {
        text: 'YAŞLI PSİKO-SOSYAL DURUM SAPTAMA FORMU',
        bold: true,
        margin: [0, 50, 0, 0],
        alignment: "center"
      }, {
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 0,
          widths: [190, '*'],
          body: [
            [{
              text: 'YAŞLININ ADI SOYADI',
              bold: true
            }, {text:this.adiSoyadi,bold:false}],
            [{
              text: 'DOĞUM YERİ DOĞUM TARİHİ',
              bold: true
            }, {text:this.dogumYeriTarihi,bold:false}],
            [{
              text: 'KURULUŞA KABUL TARİHİ',
              bold: true
            }, {text:this.kabulTarihi,bold:false}],
            [{
              text: 'GÖRÜŞME TARİHİ',
              bold: true
            }, {text:this.gorusmeTarihi,bold:false}],
          ]
        },
        margin: [0, 30, 0, 0]
      }, {
        text: [{
          text: '1 YAŞLININ FİZİKSEL DURUMU : ',
          bold: true
        }, {
          text: '(Giyimi, fiziksel bir engelinin bulunup bulunmadığı)',
          bold: false
        }],
        margin: [0, 20, 0, 0]
      }, {
        text: this.fizikselDurum,
        bold:false
      }, {
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 0,
          widths: ['auto', '*'],
          heights: [0, 50, 50],
          body: [
            [{
              text: '2',
              bold: true
            }, {
              text: [{
                text: 'YAŞLININ SOSYAL DURUMU :',
                bold: true
              }, {
                text: '(Ailesi, arkadaşları ile ilişkileri, boş zaman faaliyetleri, beklentileri, çevreyle etkileşimi, öz bakım becerisi)',
                bold: false
              }],
              margin: [0, 0, 0, 0]
            }],
            [{
              text: '',
              bold: true
            }, {text:this.sosyalDurum,bold:false}],
            [{
              text: '3',
              bold: true
            }, {
              text: [{
                text: 'YAŞLININ PSİKOLOJİK DURUMU : ',
                bold: true
              }, {
                text: '(Demans, kişilik özellikleri, sorun olabilecek davranışları, belleği, zaman mekan oryantasyonu, duygu durumu)',
                bold: false
              }],
              margin: [0, 0, 0, 0]
            }],
            [{
              text: '',
              bold: true
            }, {text:this.psikolojikDurum,bold:false}]
          ]
        },
        margin: [0, 30, 0, 0]
      }, {
        table: {
          widths: ["auto", "*"],
          body: [
            ["4", {
              border: [false, false, false, false],
              text: 'GÖZLEMİ YAPAN MESLEK ELEMANININ GÖRÜŞ VE ÖNERİLERİ:'
            }]
          ]
        },
        margin: [0, 40, 0, 0]
      }, {
        text: 'GÖRÜŞMEYİ YAPAN',
        alignment: 'right',
        margin: [0, 30, 30, 0]
      }, {
        text: 'Bu form; Mart ve Ekim aylarında Sosyal Çalışmacı veya Psikolog tarafından kuruluşa kabulü yapılan yaşlı ile yapılacak görüşme ve yaşlıya ilişkin gözlemler sonucu doldurulacaktır.',
        bold: false,
        margin: [0, 15, 0, 0]
      }],
      defaultStyle: {
        fontSize: 9,
        bold: true
      }
    }
}