import animalData from "./Consulta.js";

let animalChange = document.querySelector('#animal');
let preview = document.querySelector('#preview');
let setClass = document.createAttribute('class');
setClass.value='d-flex';
preview.setAttributeNode(setClass);


animalChange.addEventListener('change',async()=>{
    try {
        const {animales} = await animalData.getData();
        const tipoAnimal = animalChange.value;
        const imgSelec = animales.find((i)=>i.name==tipoAnimal).imagen;
        preview.innerHTML=`<img style="max-height:100%;" src="/assets/imgs/${imgSelec}" class="img-fluid mx-auto" alt="img_${tipoAnimal}">`    
    } catch (error) {
        console.log(error);
    }

})
