let liste=[]

let total=0
let completed=0

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

listeButon.onclick=()=>{
    if(!listeInput.value){
        alert("lütfen bir not giriniz");
    }else if(liste.includes(listeInput.value)){
        return;
    }else {
        liste.push(listeInput.value);
        total+=1;
        
        listeUl.innerHTML+= `
        <li class="esra">
        <i class="fa fa-check fa-lg"></i>
        <p>${liste[liste.length-1]}</p>
        <i class="fa fa-trash fa-lg"></i>
        </li>`;
        listeInput.value="";
        listeInput.focus();
        toplam.textContent=total;
    }
   
    createSilButon()
    
    createCheckButon()
}

const createSilButon=()=>{
document.querySelectorAll(".fa-trash").forEach((a)=>a.onclick=()=>{
    a.parentElement.remove()
    
    total-=1
    toplam.textContent=total

    //?diziden sil
    liste=liste.filter(
        (yapilacak)=>yapilacak!=a.parentElement.querySelector("p").textContent)
    console.log(liste);
    if(a.parentElement.classList.contains("checked")){
        completed-=1
        document.querySelector("#tamamlanan").textContent=completed
    }
})}



const createCheckButon=()=>{
    document.querySelectorAll(".fa-check").forEach((a)=>a.onclick=()=>{
        if(a.parentElement.classList.contains("checked")){        
        a.parentElement.classList.remove("checked")
        completed-=1
        }else {a.parentElement.classList.add("checked")
        completed+=1}
        document.querySelector("#tamamlanan").textContent=completed
    })
    
}

