const bIndonesia = 80
const mtk = 80
const bInggris = 85
const ipa = 90

if (mtk === '' || bInggris === '' || ipa === '' || bIndonesia === ''){
    console.log("Nilai harus diisi semua")
}else {
    const rata = (bIndonesia+bInggris+mtk+ipa)/4
    console.log("Rata-rata = "+rata)
    if (rata >= 90 ){
        console.log("Grade A")
    }else if(rata >= 80){
        console.log("Grade B")
    }else if(rata >= 70){
        console.log("Grade C")
    }
    else if(rata >= 60){
        console.log("Grade D")
    }else{
        console.log("Grade E")
    }
}
