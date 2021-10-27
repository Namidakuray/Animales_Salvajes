import animalData from "./Consulta.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Razas.js";

let preview = document.querySelector('#preview');

/* Limpiador del background del preview, reemplazado por el IIFE */
let cleanBg=()=>{
    preview.removeChild(preview.childNodes[0]);
}

/* Funcion para agregar evento de clic en los btn de cada card para reproducir sonido por medio del metodo de clase segun el animal instanciado */
let sonidoChange=()=>{
    let btn=document.querySelectorAll('#Animales button');
    btn.forEach(i=>{
        i.addEventListener('click', (e)=>{
            listaAnimal.forEach(arr=>{
                let string= arr.nombre
                let arrString=string.split('_');
                let targetAnimal= arrString[0];
                let indexAnimal= arrString[1];
                if(string==i.id){   
                    switch(targetAnimal){
                        case 'Leon':
                            arr.rugir();
                            break;
                        case 'Lobo':
                            arr.aullar();
                            break;
                        case 'Oso':
                            arr.gruñir();
                            break;
                        case 'Serpiente':
                            arr.sisear();
                            break;
                        case 'Aguila':
                            arr.chillar();
                            break;
                    }
                    console.log(`El animal del tipo ${targetAnimal}, se encuentra en la ubicación #${indexAnimal} del arreglo listAnimal y tiene de nombre ${string}, el cual a utilizado su método de clase`);
                }
            });
            console.log("Usted clickeó en el button de Id: " + i.id)
        });
    });
};

/* Funcion para agregar evento de clic en las img cada card para activar el modal, presentando una card segun el animal instanciado seleccionado */
let modalChange=()=>{
    let modal=document.querySelector('.modal-body')
    let img=document.querySelectorAll('#Animales img');
    img.forEach(i=>{
        i.addEventListener('click', ()=>{
            let targetName= i.alt;
            let arrTN= targetName.split('_');
            let indexAnimal= arrTN[1];
            let targetAnimal= listaAnimal[indexAnimal]
            $('#exampleModal').modal('toggle')
            modal.innerHTML=`
            <div id="animal_modal" class="card mx-auto" style="width: 18rem;">
                <img src="/assets/imgs/${targetAnimal.img}" class="card-img-top" alt="${targetName}">
                <div class="card-body">
                <p class="card-text">${targetAnimal.edad}</p>
                <h5 class="card-title">Comentarios</h5>
                <p class="card-text">${targetAnimal.comentarios}</p>
                </div>
            </div>
            `
        })
    })
}

let listaAnimal=[];       /* Coleccion de animales */
let indexAnimal=0;          /* Contador */

let newTarget = document.querySelector('#btnRegistrar');

/* Se genera un evento al boton registro el cual instancia los nuevos animales, se agregan a la colección y se pinta la colección en la tabla  */
newTarget.addEventListener('click',async ()=>{
const nombre=document.getElementById('animal');
const edad=document.getElementById('edad');
const comentarios=document.getElementById('comentarios');

/* se captura la respuesta por medio del await aplicando destructuring {...} */
const {animales}= await animalData.getData();
const img=await animales.find((i)=>i.name==nombre.value).imagen;
const sonido=await animales.find((i)=>i.name==nombre.value).sonido;    

/* Proceso por el cual se instancian los nuevos animales según su tipo correspondiente a cada clase */
let nuevoAnimal;  /* Se inicia la variable a re-escribir */
let nombreAnimal=`${nombre.value}_${indexAnimal}`;
indexAnimal++;
switch(nombre.value){
    case 'Leon':
        nuevoAnimal=new Leon(
            nombreAnimal,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        break;
    case 'Lobo':
        nuevoAnimal=new Lobo(
            nombreAnimal,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        break;
    case 'Oso':
        nuevoAnimal=new Oso(
            nombreAnimal,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        break;
    case 'Serpiente':
        nuevoAnimal=new Serpiente(
            nombreAnimal,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        break;
    case 'Aguila':
        nuevoAnimal=new Aguila(
            nombreAnimal,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        break;
}    

  /* Se balida la informacion antes de guardar la nueva instancia en la colección */
if(nombre.value&&edad.value&&comentarios.value){
    listaAnimal.push(nuevoAnimal);
    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value="";
    (()=>{preview.removeChild(preview.childNodes[0]);})();   /* IIFE */
    /* cleanBg(); */
    reloadTable();
    sonidoChange();
    modalChange();
}else{
    alert("La información debe estar completa para registrar animal.")
}    
})

/* Proceso por el cual se pinta una card para cada instancia guardada en la colección */
const reloadTable=()=>{
    let animalesTemplate=document.getElementById('Animales')
    animalesTemplate.innerHTML='';
    listaAnimal.forEach((element,index)=>{
        animalesTemplate.innerHTML +=`
        <div class="card col-10 col-sm-3 m-3">
            <img style="width:320px; height:176px" class="img-fluid mx-auto" src="/assets/imgs/${element.img}" alt="${element.nombre}_${index}">
            <div>
                <button id="${element.nombre}" type="button" style="width:100%; height:20px" class="btn btn-dark"><img class="mx-auto" style="width:100%; height:10px; margin-top:-22px; pointer-events:none"  src="./assets/imgs/audio.svg"></img></button>
            </div>
        </div>
        `
    })
}

