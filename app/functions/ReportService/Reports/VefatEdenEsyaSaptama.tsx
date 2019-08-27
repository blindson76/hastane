export default function(){
    const headers=[[{text:'SIRA NO',style:'tableHeader'},{text:'EŞYANIN CİNSİ',style:'tableHeader'},{text:'ADEDİ VEYA MİKTARI',style:'tableHeader'}]];
    Object.assign(this,{
        entries:this.entries || [],
        header:this.header || 'TÜRKİYE YARDIM SEVERLER DERNEĞİ\nANKARA',
        title: this.title || 'VEFAT EDEN YAŞLIYA İLİŞKİN EŞYA SAPTAMA FORMU',
        date:this.date || '10/11/1938',
        time:this.time || '09:05',
        adiSoyadi: this.adiSyoadi || 'Kemal Etikan',
        approveDate:this.approveDate || '01/01/1990'
     })
    return {
        content: [
            {
                text: this.header,
                style:'header'
          },
            {text:this.title,style:'header'},
            {
                table:{
                    widths:['auto','*','auto'],
                    headerRows:1,
                    body:headers.concat(this.entries)
                },
                bold:false,
                margin:[0,0,0,10]
            },
            {
                text:`${this.date} tarihinde, saat ${this.time} de kuruluşta vefat eden ${this.adiSoyadi}'nın saptanan eşyalarına ilişkin tutanaktır.`,
                margin:[0,0,0,20]
                
            },
            {
                columns:[{
                    text:'SORUMLU\nAdı Soyadı\nİmza'
                },{
                    text:'SORUMLU\nAdı Soyadı\nİmza'
                },{
                    text:'SORUMLU\nAdı Soyadı\nİmza'
                }],
                alignment:'center',
                margin:[0,0,0,50]
            },{
                text:'ONAYLANIR',
                alignment:'center'
            },{
                text:this.approveDate,
                alignment:'center',
                margin:[0,0,0,20]
            },{
                text:'KURULUŞ MÜDÜRÜ',
                alignment:'center'
            }
        ],
        defaultStyle: {
            fontSize: 9,
            bold: true
        },
        styles:{
            header:{
                bold:true,
                alignment:'center',
                margin:[0,0,0,20]
            },
            tableHeader:{
                bold:true
            }
        }
    }
}