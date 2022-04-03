const Maskapai = [
     {
         maskapai_id: "GA",
         maskapai_nama: "GUGU Air",
         maskapai_logo: require('../assets/gaga.jpg'),
     },
     {
         maskapai_id: "DA",
         maskapai_nama: "Deez Air",
         maskapai_logo: require('../assets/Deez.jpg'),
     },
     {
         maskapai_id: "NA",
         maskapai_nama: "Not Air",
         maskapai_logo: require('../assets/Not.png'),
     },
     {
         maskapai_id: "AA",
         maskapai_nama: "Air Air",
         maskapai_logo: require('../assets/Air.jpg'),
     },
     {
         maskapai_id: "CA",
         maskapai_nama: "Clean Air",
         maskapai_logo: require('../assets/Clean.jpg'),
     },
     {
         maskapai_id: "PA",
         maskapai_nama: "Pollution Air",
         maskapai_logo: require('../assets/Pollution.jpg'),
     }
 ]
 
 const Bandara = [
     {
         bandara_id: "KR",
         bandara_nama: "Korengan Airport",
     },
     {
         bandara_id: "JG",
         bandara_nama: "Jago Airport",
     },
     {
         bandara_id: "PL",
         bandara_nama: "Pala Airport",
     },
     {
         bandara_id: "KK",
         bandara_nama: "Kaki Airport",
     }
 ]
 
 const Jadwal =[
     {
        jadwal_id: "001",
        bandara_kode_keberangkatan:"KK",
        bandara_kode_tujuan:"PL",
        maskapai_id:"CA",
 
     },
     {
         jadwal_id: "002",
         bandara_kode_keberangkatan:"KR",
         bandara_kode_tujuan:"JG",
         maskapai_id:"GA",
 
     },
     {
         jadwal_id: "003",
         bandara_kode_keberangkatan:"KR",
         bandara_kode_tujuan:"PL",
         maskapai_id:"DA",
 
     },
     {
         jadwal_id: "004",
         bandara_kode_keberangkatan:"PL",
         bandara_kode_tujuan:"KK",
         maskapai_id:"AA",
 
     },
     {
         jadwal_id: "005",
         bandara_kode_keberangkatan:"PL",
         bandara_kode_tujuan:"JG",
         maskapai_id:"PA",
 
     },
 ]
 
 export {Maskapai,Bandara,Jadwal}