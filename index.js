let stringData = ["abc", "acb", "ab", "a"];
function countComplementaryPairs(stringData) {
    // Normalisasi String ke Dalam Bentuk Terurut
    const sorted = []
    for (let i = 0; i < stringData.length; i++){
        sorted.push(stringData[i].split('').sort().join(''))
    } 
    // Urutkan Semua String Terurut Tadi
    sorted.sort()
    // Mencari Pasangan Komplementer
    let count = 0;
    const seen = {}
    // Perulangan Ganda untuk Membandingkan Semua Pasangan
    for (let i = 0; i< sorted.length; i++){
        for(let j = 0; j< sorted.length; j++){
            // Lewati Jika Indeks Sama atau Sudah Pernah Dicek
            if(i == j) continue
            if(seen[sorted[i]] == sorted[j] || seen[sorted[j]] == sorted[i]) 
            continue
            // Cek Apakah Dua String Hanya Beda 1 Huruf atau Tidak
            if(sorted[i].length < sorted[j].length){
                if(sorted[j].replace(sorted[i],'').length <= 1){
                    seen[sorted[i]] = sorted[j]
                    count++
                }
            }else{
                if(sorted[i].replace(sorted[j],'').length <= 1){
                    seen[sorted[i]] = sorted[j]
                    count++
                }
            }
        }
    }
    // Kembalikan Total Pasangan   
    return count
}


// console.log("Result:", countComplementaryPairs(stringData))
