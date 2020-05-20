import brands from "./brands";
import CAR_IMG from './carImgs';
import {CAR_LINKS} from './carLinks';
import SOLD from  './carSold';
import SALE from './carSale';
 /*
const ={
    brand:brands.,
    model:"",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.,
    onSale: SALE.,
    img:CAR_IMG.,
    fbLink: CAR_LINKS.
},*/

const ALFA_AAJ_4312 = {
    brand:brands.ALF,
    model:"146ti",
    price:7500,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.ALF_AAJ_4312,
    onSale: SALE.ALF_AAJ_4312,
    img: CAR_IMG.ALF_AAJ_4312,
    fbLink: CAR_LINKS.ALF_AAJ_4312
}
const RENAULT_19_ROJO = {
    brand:brands.REN,
    model:"19",
    price:0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:['std'],
    },
    sold: SOLD.REN_19_ROJO,
    onSale: SALE.RENAULT_19_ROJO,
    img:CAR_IMG.REN_19_ROJO,
    fbLink:CAR_LINKS.REN_19_ROJO
}
const CHEV_AAA_3804 = {
    brand:brands.CHE,
    model:"Monza",
    price:0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_AAA_3804,
    onSale: SALE.CHEV_AAA_3804,
    img:CAR_IMG.CHEV_AAA_3804,
    fbLink: CAR_LINKS.CHEV_AAA_3804
}
const LIFAN_SCO_1874={
    brand:brands.LIF,
    model:"620",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.LIFAN_SCO_1874,
    onSale: SALE.LIFAN_SCO_1874,
    img:CAR_IMG.LIFAN_SCO_1874,
    fbLink: CAR_LINKS.LIFAN_SCO_1874
}
const CHEV_AVEO_SBL_3277={
    brand:brands.CHE,
    model:"Aveo",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_AVEO_SBL_3277,
    onSale: SALE.CHEV_AVEO_SBL_3277,
    img:CAR_IMG.CHEV_AVEO_SBL_3277,
    fbLink: CAR_LINKS.CHEV_AVEO_SBL_3277
}
const CHEV_S10_SBV_4578={
    brand:brands.CHE,
    model:"S10",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_S10_SBV_4578,
    onSale: SALE.CHEV_S10_SBV_4578,
    img:CAR_IMG.CHEV_S10_SBV_4578,
    fbLink: CAR_LINKS.CHEV_S10_SBV_4578
}
const VW_GOL_OAB_5271={
    brand:brands.VWN,
    model:"Gol",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.VW_GOL_OAB_5271,
    onSale: SALE.VW_GOL_OAB_5271,
    img:CAR_IMG.VW_GOL_OAB_5271,
    fbLink: CAR_LINKS.VW_GOL_OAB_5271
}
const CHEV_CORSA_FRD_2331={
    brand:brands.CHE,
    model:"Corsa",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_CORSA_FRD_2331,
    onSale: SALE.CHEV_CORSA_FRD_2331,
    img:CAR_IMG.CHEV_CORSA_FRD_2331,
    fbLink: CAR_LINKS.CHEV_CORSA_FRD_2331
}
const CHEV_AVEO_LJA_3313={
    brand:brands.CHE,
    model:"Aveo",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_AVEO_LJA_3313,
    onSale: SALE.CHEV_AVEO_LJA_3313,
    img:CAR_IMG.CHEV_AVEO_LJA_3313,
    fbLink: CAR_LINKS.CHEV_AVEO_LJA_3313
}
const EFFA_PICK_UP_ERB_2800={
    brand:brands.EFF,
    model:"PickUp",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.EFFA_PICK_UP_ERB_2800,
    onSale: SALE.EFFA_PICK_UP_ERB_2800,
    img:CAR_IMG.EFFA_PICK_UP_ERB_2800,
    fbLink: CAR_LINKS.EFFA_PICK_UP_ERB_2800
}
const PEU_306_LFA_2958={
    brand:brands.PEU,
    model:"306",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.PEU_306_LFA_2958,
    onSale: SALE.PEU_306_LFA_2958,
    img:CAR_IMG.PEU_306_LFA_2958,
    fbLink: CAR_LINKS.PEU_306_LFA_2958
}
const CHEV_ASTRA_AAN_4346={
    brand:brands.CHE,
    model:"Astra",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_ASTRA_AAN_4346,
    onSale: SALE.CHEV_ASTRA_AAN_4346,
    img:CAR_IMG.CHEV_ASTRA_AAN_4346,
    fbLink: CAR_LINKS.CHEV_ASTRA_AAN_4346
}
const FIAT_PREMIO_AAF_7748={
    brand:brands.FIA,
    model:"Premio",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.FIAT_PREMIO_AAF_7748,
    onSale: SALE.FIAT_PREMIO_AAF_7748,
    img:CAR_IMG.FIAT_PREMIO_AAF_7748,
    fbLink: CAR_LINKS.FIAT_PREMIO_AAF_7748
}
const HYUN_ACCENT_LDB_5461={
    brand:brands.HYU,
    model:"Accent",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.HYUN_ACCENT_LDB_5461,
    onSale: SALE.HYUN_ACCENT_LDB_5461,
    img:CAR_IMG.HYUN_ACCENT_LDB_5461,
    fbLink: CAR_LINKS.HYUN_ACCENT_LDB_5461
}
const FIAT_STRADA_PAC_0458={
    brand:brands.FIA,
    model:"Strada",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.FIAT_STRADA_PAC_0458,
    onSale: SALE.FIAT_STRADA_PAC_0458,
    img:CAR_IMG.FIAT_STRADA_PAC_0458,
    fbLink: CAR_LINKS.FIAT_STRADA_PAC_0458
}
const FIAT_STRADA_AAR_2851={
    brand:brands.FIA,
    model:"Strada",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.FIAT_STRADA_AAR_2851,
    onSale: SALE.FIAT_STRADA_AAR_2851,
    img:CAR_IMG.FIAT_STRADA_AAR_2851,
    fbLink: CAR_LINKS.FIAT_STRADA_AAR_2851
}
const SMA_SCN_1401={
    brand:brands.SMA,
    model:"",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.SMA_SCN_1401,
    onSale: SALE.SMA_SCN_1401,
    img:CAR_IMG.SMA_SCN_1401,
    fbLink: CAR_LINKS.SMA_SCN_1401
}
const RENAULT_KANGOO_MAH_5847={
    brand:brands.REN,
    model:"Kangoo",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.RENAULT_KANGOO_MAH_5847,
    onSale: SALE.RENAULT_KANGOO_MAH_5847,
    img:CAR_IMG.RENAULT_KANGOO_MAH_5847,
    fbLink: CAR_LINKS.RENAULT_KANGOO_MAH_5847
}
const CHEV_KADETT_BLANCO={
    brand:brands.CHE,
    model:"Kadett",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_KADETT_BLANCO,
    onSale: SALE.CHEV_KADETT_BLANCO,
    img:CAR_IMG.CHEV_KADETT_BLANCO,
    fbLink: CAR_LINKS.CHEV_KADETT_BLANCO
}
const VW_SAV_JYO_2365={
    brand:brands.VWN,
    model:"Saveiro",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.VW_SAV_JYO_2365,
    onSale: SALE.VW_SAV_JYO_2365,
    img:CAR_IMG.VW_SAV_JYO_2365,
    fbLink: CAR_LINKS.VW_SAV_JYO_2365
}
const NISS_SENTRA_AAB_4317 ={
    brand:brands.NIS,
    model:"Sentra",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.NISS_SENTRA_AAB_4317,
    onSale: SALE.NISS_SENTRA_AAB_4317,
    img:CAR_IMG.NISS_SENTRA_AAB_4317,
    fbLink: CAR_LINKS.NISS_SENTRA_AAB_4317
}
const CHEV_CORSA_SBI_5961 ={
    brand:brands.CHE,
    model:"Corsa",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_CORSA_SBI_5961,
    onSale: SALE.CHEV_CORSA_SBI_5961,
    img:CAR_IMG.CHEV_CORSA_SBI_5961,
    fbLink: CAR_LINKS.CHEV_CORSA_SBI_5961
}
const CIT_SAXO_AAD_6896 ={
    brand:brands.CIT,
    model:"Saxo",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CIT_SAXO_AAD_6896,
    onSale: SALE.CIT_SAXO_AAD_6896,
    img:CAR_IMG.CIT_SAXO_AAD_6896,
    fbLink: CAR_LINKS.CIT_SAXO_AAD_6896
}
const OPEL_ASTRA_SCF_2173 ={
    brand:brands.OPE,
    model:"Astra",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.OPEL_ASTRA_SCF_2173,
    onSale: SALE.OPEL_ASTRA_SCF_2173,
    img:CAR_IMG.OPEL_ASTRA_SCF_2173,
    fbLink: CAR_LINKS.OPEL_ASTRA_SCF_2173
}    
const KIA_AVELLA_AAU_4880 ={
    brand:brands.KIA,
    model:"Avella",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.KIA_AVELLA_AAU_4880,
    onSale: SALE.KIA_AVELLA_AAU_4880,
    img:CAR_IMG.KIA_AVELLA_AAU_4880,
    fbLink: CAR_LINKS.KIA_AVELLA_AAU_4880
}
const FIAT_PANDA_ROJO ={
    brand:brands.FIA,
    model:"Panda",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.FIAT_PANDA_ROJO,
    onSale: SALE.FIAT_PANDA_ROJO,
    img:CAR_IMG.FIAT_PANDA_ROJO,
    fbLink: CAR_LINKS.FIAT_PANDA_ROJO
}
const CHEV_CORSA_SAS_1203 ={
    brand:brands.CHE,
    model:"Corsa",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_CORSA_SAS_1203,
    onSale: SALE.CHEV_CORSA_SAS_1203,
    img:CAR_IMG.CHEV_CORSA_SAS_1203,
    fbLink: CAR_LINKS.CHEV_CORSA_SAS_1203
}
const HYUN_ACCENT_AAC_8033 ={
    brand:brands.HYU,
    model:"Accent",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.HYUN_ACCENT_AAC_8033,
    onSale: SALE.HYUN_ACCENT_AAC_8033,
    img:CAR_IMG.HYUN_ACCENT_AAC_8033,
    fbLink: CAR_LINKS.HYUN_ACCENT_AAC_8033
}
const CHEV_SPARK_CAA_3533 ={
    brand:brands.CHE,
    model:"Spark",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_SPARK_CAA_3533,
    onSale: SALE.CHEV_SPARK_CAA_3533,
    img:CAR_IMG.CHEV_SPARK_CAA_3533,
    fbLink: CAR_LINKS.CHEV_SPARK_CAA_3533
}    
const HYUN_I10_SCQ_1937 ={
    brand:brands.HYU,
    model:"i10",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.HYUN_I10_SCQ_1937,
    onSale: SALE.HYUN_I10_SCQ_1937,
    img:CAR_IMG.HYUN_I10_SCQ_1937,
    fbLink: CAR_LINKS.HYUN_I10_SCQ_1937
}
const HONDA_RIDG_SBU_2123 ={
    brand:brands.HON,
    model:"Ridgeline",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.HONDA_RIDG_SBU_2123,
    onSale: SALE.HONDA_RIDG_SBU_2123,
    img:CAR_IMG.HONDA_RIDG_SBU_2123,
    fbLink: CAR_LINKS.HONDA_RIDG_SBU_2123
}
const CEHV_CORSA_SAF_8605 ={
    brand:brands.CHE,
    model:"Corsa",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CEHV_CORSA_SAF_8605,
    onSale: SALE.CEHV_CORSA_SAF_8605,
    img:CAR_IMG.CEHV_CORSA_SAF_8605,
    fbLink: CAR_LINKS.CEHV_CORSA_SAF_8605
}   
const KIN_400_ATS_516 ={
    brand:brands.KIN,
    model:"400cc",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.KIN_400_ATS_516,
    onSale: SALE.KIN_400_ATS_516,
    img:CAR_IMG.KIN_400_ATS_516,
    fbLink: CAR_LINKS.KIN_400_ATS_516
}
const PEU_306SW_SBC_1008 ={
    brand:brands.PEU,
    model:"306sw",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.PEU_306SW_SBC_1008,
    onSale: SALE.PEU_306SW_SBC_1008,
    img:CAR_IMG.PEU_306SW_SBC_1008,
    fbLink: CAR_LINKS.PEU_306SW_SBC_1008
}
const NISS_NP300_CS_DORADA ={
    brand:brands.NIS,
    model:"NP300",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.NISS_NP300_CS_DORADA,
    onSale: SALE.NISS_NP300_CS_DORADA,
    img:CAR_IMG.NISS_NP300_CS_DORADA,
    fbLink: CAR_LINKS.NISS_NP300_CS_DORADA
}
const BMW_330_BIBI ={
    brand:brands.BMW,
    model:"330",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.BMW_330_BIBI,
    onSale: SALE.BMW_330_BIBI,
    img:CAR_IMG.BMW_330_BIBI,
    fbLink: CAR_LINKS.BMW_330_BIBI
}
const NISS_XTRAIL_KMC_1803 ={
    brand:brands.NIS,
    model:"Xtrail",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.NISS_XTRAIL_KMC_1803,
    onSale: SALE.NISS_XTRAIL_KMC_1803,
    img:CAR_IMG.NISS_XTRAIL_KMC_1803,
    fbLink: CAR_LINKS.NISS_XTRAIL_KMC_1803
}
const SUZ_CEL_SCI_1309 ={
    brand:brands.SUZ,
    model:"Celerio",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.SUZ_CEL_SCI_1309,
    onSale: SALE.SUZ_CEL_SCI_1309,
    img:CAR_IMG.SUZ_CEL_SCI_1309,
    fbLink: CAR_LINKS.SUZ_CEL_SCI_1309
}
const PEU_306SW_VERDE ={
    brand:brands.PEU,
    model:"306sw",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.PEU_306SW_VERDE,
    onSale: SALE.PEU_306SW_VERDE,
    img:CAR_IMG.PEU_306SW_VERDE,
    fbLink: CAR_LINKS.PEU_306SW_VERDE
}
const FIAT_1_FIRE_OAA_5617 ={
    brand:brands.FIA,
    model:"Uno",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.FIAT_1_FIRE_OAA_5617,
    onSale: SALE.FIAT_1_FIRE_OAA_5617,
    img:CAR_IMG.FIAT_1_FIRE_OAA_5617,
    fbLink: CAR_LINKS.FIAT_1_FIRE_OAA_5617
}
const NISS_NP300_OAC_9185 ={
    brand:brands.NIS,
    model:"NP300",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.NISS_NP300_OAC_9185,
    onSale: SALE.NISS_NP300_OAC_9185,
    img:CAR_IMG.NISS_NP300_OAC_9185,
    fbLink: CAR_LINKS.NISS_NP300_OAC_9185
}
const FORD_KA_NAQ_8784 ={
    brand:brands.FOR,
    model:"KA",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.FORD_KA_NAQ_8784,
    onSale: SALE.FORD_KA_NAQ_8784,
    img:CAR_IMG.FORD_KA_NAQ_8784,
    fbLink: CAR_LINKS.FORD_KA_NAQ_8784
}
const MAZ_TRIB_OAB_7483 ={
    brand:brands.MAZ,
    model:"Tribute",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.MAZ_TRIB_OAB_7483,
    onSale: SALE.MAZ_TRIB_OAB_7483,
    img:CAR_IMG.MAZ_TRIB_OAB_7483,
    fbLink: CAR_LINKS.MAZ_TRIB_OAB_7483
}
const BMW_318_NUEVO_BLANCO ={
    brand:brands.BMW,
    model:"318",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.BMW_318_NUEVO_BLANCO,
    onSale: SALE.BMW_318_NUEVO_BLANCO,
    img:CAR_IMG.BMW_318_NUEVO_BLANCO,
    fbLink: CAR_LINKS.BMW_318_NUEVO_BLANCO
}
const CIT_AX_B_711038 ={
    brand:brands.CIT,
    model:"AX",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CIT_AX_B_711038,
    onSale: SALE.CIT_AX_B_711038,
    img:CAR_IMG.CIT_AX_B_711038,
    fbLink: CAR_LINKS.CIT_AX_B_711038
}
const NISS_NP300_AAJ_9146 ={
    brand:brands.NIS,
    model:"NP300",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.NISS_NP300_AAJ_9146,
    onSale: SALE.NISS_NP300_AAJ_9146,
    img:CAR_IMG.NISS_NP300_AAJ_9146,
    fbLink: CAR_LINKS.NISS_NP300_AAJ_9146
}
const CIT_SAXO_AAE_5250 ={
    brand:brands.CIT,
    model:"Saxo",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CIT_SAXO_AAE_5250,
    onSale: SALE.CIT_SAXO_AAE_5250,
    img:CAR_IMG.CIT_SAXO_AAE_5250,
    fbLink: CAR_LINKS.CIT_SAXO_AAE_5250
}
const MIT_LANCER_B_560665 ={
    brand:brands.MIT,
    model:"Lancer",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.MIT_LANCER_B_560665,
    onSale: SALE.MIT_LANCER_B_560665,
    img:CAR_IMG.MIT_LANCER_B_560665,
    fbLink: CAR_LINKS.MIT_LANCER_B_560665
}
const SUB_IMP_SCO_7095 ={
    brand:brands.SUB,
    model:"Impreza",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.SUB_IMP_SCO_7095,
    onSale: SALE.SUB_IMP_SCO_7095,
    img:CAR_IMG.SUB_IMP_SCO_7095,
    fbLink: CAR_LINKS.SUB_IMP_SCO_7095
}
const CHEV_SAIL_AAO_8574 ={
    brand:brands.CHE,
    model:"Sail",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CHEV_SAIL_AAO_8574,
    onSale: SALE.CHEV_SAIL_AAO_8574,
    img:CAR_IMG.CHEV_SAIL_AAO_8574,
    fbLink: CAR_LINKS.CHEV_SAIL_AAO_8574
}
const VW_SAV_BLANCA ={
    brand:brands.VWN,
    model:"Saveiro",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.VW_SAV_BLANCA,
    onSale: SALE.VW_SAV_BLANCA,
    img:CAR_IMG.VW_SAV_BLANCA,
    fbLink: CAR_LINKS.VW_SAV_BLANCA
}    
const HYUN_HB20_BLANCO ={
    brand:brands.HYU,
    model:"HB20",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.HYUN_HB20_BLANCO,
    onSale: SALE.HYUN_HB20_BLANCO,
    img:CAR_IMG.HYUN_HB20_BLANCO,
    fbLink: CAR_LINKS.HYUN_HB20_BLANCO
}
const NISS_NOTE_AAO_9723 ={
    brand:brands.NIS,
    model:"Note",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.NISS_NOTE_AAO_9723,
    onSale: SALE.NISS_NOTE_AAO_9723,
    img:CAR_IMG.NISS_NOTE_AAO_9723,
    fbLink: CAR_LINKS.NISS_NOTE_AAO_9723
}
const NISS_NP300_QAB_7517 ={
    brand:brands.NIS,
    model:"NP300",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.NISS_NP300_QAB_7517,
    onSale: SALE.NISS_NP300_QAB_7517,
    img:CAR_IMG.NISS_NP300_QAB_7517,
    fbLink: CAR_LINKS.NISS_NP300_QAB_7517
}   
const BMW_530D_MAE_9090 ={
    brand:brands.BMW,
    model:"530d",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.BMW_530D_MAE_9090,
    onSale: SALE.BMW_530D_MAE_9090,
    img:CAR_IMG.BMW_530D_MAE_9090,
    fbLink: CAR_LINKS.BMW_530D_MAE_9090
}
const GEE_EMG_OAC_2903 ={
    brand:brands.GEE,
    model:"Emgrand",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.GEE_EMG_OAC_2903,
    onSale: SALE.GEE_EMG_OAC_2903,
    img:CAR_IMG.GEE_EMG_OAC_2903,
    fbLink: CAR_LINKS.GEE_EMG_OAC_2903
}
const VW_SAV_SBY_3393 ={
    brand:brands.VWN,
    model:"Saveiro",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.VW_SAV_SBY_3393,
    onSale: SALE.VW_SAV_SBY_3393,
    img:CAR_IMG.VW_SAV_SBY_3393,
    fbLink: CAR_LINKS.VW_SAV_SBY_3393
}
const BMW_114I_GRIS ={
    brand:brands.BMW,
    model:"114i",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.BMW_114I_GRIS,
    onSale: SALE.BMW_114I_GRIS,
    img:CAR_IMG.BMW_114I_GRIS,
    fbLink: CAR_LINKS.BMW_114I_GRIS
}
const CIT_ZX_SBR_8411 ={
    brand:brands.CIT,
    model:"ZX 16v",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.CIT_ZX_SBR_8411,
    onSale: SALE.CIT_ZX_SBR_8411,
    img:CAR_IMG.CIT_ZX_SBR_8411,
    fbLink: CAR_LINKS.CIT_ZX_SBR_8411
}    
const HYUN_SCOUPE_OAA_7878 ={
    brand:brands.HYU,
    model:"Scoupe",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.HYUN_SCOUPE_OAA_7878,
    onSale: SALE.HYUN_SCOUPE_OAA_7878,
    img:CAR_IMG.HYUN_SCOUPE_OAA_7878,
    fbLink: CAR_LINKS.HYUN_SCOUPE_OAA_7878
}
const BMW_530I_B_590139 ={
    brand:brands.BMW,
    model:"",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.BMW_530I_B_590139,
    onSale: SALE.BMW_530I_B_590139,
    img:CAR_IMG.BMW_530I_B_590139,
    fbLink: CAR_LINKS.BMW_530I_B_590139
}
const PEU_3008_AAH_1373 ={
    brand:brands.PEU,
    model:"3008",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.PEU_3008_AAH_1373,
    onSale: SALE.PEU_3008_AAH_1373,
    img:CAR_IMG.PEU_3008_AAH_1373,
    fbLink: CAR_LINKS.PEU_3008_AAH_1373
}
const FORD_TAU_AAD_5419 ={
    brand:brands.FOR,
    model:"Taunus",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.FORD_TAU_AAD_5419,
    onSale: SALE.FORD_TAU_AAD_5419,
    img:CAR_IMG.FORD_TAU_AAD_5419,
    fbLink: CAR_LINKS.FORD_TAU_AAD_5419
}
const VW_VENTO_GLI_SBV4796 ={
    brand:brands.VWN,
    model:"Vento GLI",
    price: 0,
    data: {
        km:"",
        year:"",
        fuel: "Nafta",
        equip:[],
    },
    sold: SOLD.VW_VENTO_GLI_SBV4796,
    onSale: SALE.VW_VENTO_GLI_SBV4796,
    img:CAR_IMG.VW_VENTO_GLI_SBV4796,
    fbLink: CAR_LINKS.VW_VENTO_GLI_SBV4796
}



const vehicles = [
    CHEV_AAA_3804,
    RENAULT_19_ROJO,
    ALFA_AAJ_4312,
    LIFAN_SCO_1874,
    CHEV_AVEO_SBL_3277,
    CHEV_S10_SBV_4578,
    VW_GOL_OAB_5271,
    CHEV_CORSA_FRD_2331,
    CHEV_AVEO_LJA_3313,
    EFFA_PICK_UP_ERB_2800,
    PEU_306_LFA_2958,
    CHEV_ASTRA_AAN_4346,
    FIAT_PREMIO_AAF_7748,
    HYUN_ACCENT_LDB_5461,
    FIAT_STRADA_PAC_0458,
    FIAT_STRADA_AAR_2851,
    SMA_SCN_1401,
    RENAULT_KANGOO_MAH_5847,
    CHEV_KADETT_BLANCO,
    VW_SAV_JYO_2365,
    NISS_SENTRA_AAB_4317 ,
    CHEV_CORSA_SBI_5961 ,
    CIT_SAXO_AAD_6896 ,
    OPEL_ASTRA_SCF_2173 ,    
    KIA_AVELLA_AAU_4880 ,
    FIAT_PANDA_ROJO ,
    CHEV_CORSA_SAS_1203 ,
    HYUN_ACCENT_AAC_8033 ,
    CHEV_SPARK_CAA_3533 ,    
    HYUN_I10_SCQ_1937 ,
    HONDA_RIDG_SBU_2123 ,
    CEHV_CORSA_SAF_8605 ,   
    KIN_400_ATS_516 ,
    PEU_306SW_SBC_1008 ,
    NISS_NP300_CS_DORADA ,
    BMW_330_BIBI ,
    NISS_XTRAIL_KMC_1803 ,
    SUZ_CEL_SCI_1309 ,
    PEU_306SW_VERDE ,
    FIAT_1_FIRE_OAA_5617 ,
    NISS_NP300_OAC_9185 ,
    FORD_KA_NAQ_8784 ,
    MAZ_TRIB_OAB_7483 ,
    BMW_318_NUEVO_BLANCO ,
    CIT_AX_B_711038 ,
    NISS_NP300_AAJ_9146 ,
    CIT_SAXO_AAE_5250 ,
    MIT_LANCER_B_560665 ,
    SUB_IMP_SCO_7095 ,
    CHEV_SAIL_AAO_8574 ,
    VW_SAV_BLANCA ,    
    HYUN_HB20_BLANCO ,
    NISS_NOTE_AAO_9723 ,
    NISS_NP300_QAB_7517 ,   
     BMW_530D_MAE_9090 ,
    GEE_EMG_OAC_2903 ,
    VW_SAV_SBY_3393 ,
    BMW_114I_GRIS ,
    CIT_ZX_SBR_8411 ,    
    HYUN_SCOUPE_OAA_7878 ,
    BMW_530I_B_590139 ,
    PEU_3008_AAH_1373 ,
    FORD_TAU_AAD_5419 ,
    VW_VENTO_GLI_SBV4796 ,
];
export default vehicles;

