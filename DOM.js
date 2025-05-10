let elemen = document.getElementById("Judul")
console.log(elemen.innerText)

function ubahjudul(){
    let elemen = document.getElementById ("judul-1")
    elemen.innerText = "judul telah berubah!"
}

function ubahWarna(){
    let elemen = document.getElementsByClassName ("teks")
    for (let i = 0;i < elemen.length;i++){
        elemen[i].style.color= "red"
    }
}

function hitungitem(){
    let semuaitem = document.getElementsByTagName ("li")
    alert("Jumlah item"+semuaitem.length)
}

function ganti(){
    let elemen = document.querySelector (".highlight")
    elemen.innerText = "ini teks baru"
}

function ubahSemua(){
    let elemen = document.querySelectorAll (".kotak")
    elemen.forEach((elemen) => {
        elemen.style.backgroundColor = "lightblue"
    })
}

function ubahIsi() {
    let elemen = document.getElementById ("box")
    elemen.innerHTML = "<em>teks diganti dengan teks miring</em>"
}

function ubahGaya(){
    let elemen = document.getElementById ("pesan")
    elemen.style.color = "blue"
    elemen.style.fontSize = "20px"
    elemen.style.fontWeight = "bold"
}

function tambah(){
    let p = document.createElement ("p")
    p.innerText = "ini paragraf yang akan di hapus"
    p.id = "hapusSaya"
    document.getElementById ("container").appendChild(p)
}

function hapus(){
    let container = document.getElementById ("container")
    let target = document.getElementById("hapusSaya")
    if (target){
        container.removeChild(target)
    }else {
        alert("pargraf belum ada atau sudah di hapus.")
    }
}
