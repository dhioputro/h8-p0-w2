// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

var nama = "";
var peran = "";

if( nama && peran === "") {
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
} else if( nama && peran === "Ksatria") {
    console.log(`Selamat datang di dunia Proxytia ${nama}.`) 
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if(nama  && peran === "Tabib") {
    console.log(`Selamat datang di dunia Proxytia, ${nama}.`);
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if( nama && peran === "Penyihir") {
    console.log(`Selamat datang di dunia Proxytia, ${nama}.`);
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else
    console.log("Nama harus diisi!")