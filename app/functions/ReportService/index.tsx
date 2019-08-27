import * as Printjs from 'print-js';

import reportPSDurumSaptama from './Reports/PSDurumSaptama';
import reportVefatEdenEsyaSaptama from './Reports/VefatEdenEsyaSaptama';
import reportYuklenmeSenedi from './Reports/YuklenmeSenedi';
import reportYasliKayitKapamaFormu from'./Reports/YasliKayitKapamaFormu';
import reportYasliMalBildirimFormu from './Reports/YasliMalBildirimFormu';
import reportMulakatFormu from './Reports/MulakatFormu';
import reportOnGorusmeFormu from './Reports/OnGorusmeFormu';
import reportIlkGirisFormu from './Reports/IlkGirisFormu';

import * as pdfMake from 'pdfmake';
import * as Fonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs=Fonts.pdfMake.vfs;


export enum Reports {
    PSDurumSaptama,
    VefatEdenEsyaSaptama,
    YuklenmeSenedi,
    YasliKayitKapamaFormu,
    YasliMalBildirimFormu,
    MulakatFormu,
    OnGorusmeFormu,
    IlkGirisFormu
}
export function createReport(reportType:Reports,data:Object){
    return new Promise((rs,rj)=>{
        let schema={};
       try {
            switch(reportType){
                case Reports.PSDurumSaptama:
                    schema=reportPSDurumSaptama.apply(data);
                    break;
                case Reports.VefatEdenEsyaSaptama:
                    schema=reportVefatEdenEsyaSaptama.apply(data);
                    break;
                case Reports.YuklenmeSenedi:
                    schema=reportYuklenmeSenedi.apply(data);
                    break;
                case Reports.YasliKayitKapamaFormu:
                    schema=reportYasliKayitKapamaFormu.apply(data);
                    break;
                case Reports.YasliMalBildirimFormu:
                    schema=reportYasliMalBildirimFormu.apply(data);
                    break;
                case Reports.MulakatFormu:
                    schema=reportMulakatFormu.apply(data);
                    break;
                case Reports.OnGorusmeFormu:
                    schema=reportOnGorusmeFormu.apply(data);
                    break;
                case Reports.IlkGirisFormu:
                    schema=reportIlkGirisFormu.apply(data);
                    break;
            }
            let pdf=pdfMake.createPdf(schema);
            pdf.getBase64(base64=>{
                Printjs({printable: base64, type: 'pdf', base64: true})
                rs();
            })
       }
       catch(e){
           rj(e);
       }
    });
}