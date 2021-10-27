import Animal from "./Animales.js";

class Leon extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
        this.rugir=()=>{
            let _sonido=this.getSonido();
            let audio=document.querySelector('audio');
            audio.src=`./assets/sounds/${_sonido}`;
            audio.play();
        }
    }
}

class Lobo extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
        this.aullar=()=>{
            let _sonido=this.getSonido();
            let audio=document.querySelector('audio');
            audio.src=`./assets/sounds/${_sonido}`;
            audio.play();
        }
    }
}

class Oso extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
        this.gruñir=()=>{
            let _sonido=this.getSonido();
            let audio=document.querySelector('audio');
            audio.src=`./assets/sounds/${_sonido}`;
            audio.play();
        }
    }
}

class Serpiente extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
        this.sisear=()=>{
            let _sonido=this.getSonido();
            let audio=document.querySelector('audio');
            audio.src=`./assets/sounds/${_sonido}`;
            audio.play();
        }
    }
}

class Aguila extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
        this.chillar=()=>{
            let _sonido=this.getSonido();
            let audio=document.querySelector('audio');
            audio.src=`./assets/sounds/${_sonido}`;
            audio.play();
        }
    }
    
}
export { Leon, Lobo, Oso, Serpiente, Aguila };