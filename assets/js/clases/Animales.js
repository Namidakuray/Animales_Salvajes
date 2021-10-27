class Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        let _nombre=nombre;
        let _edad=edad;
        let _img=img;
        let _comentarios=comentarios;
        let _sonido=sonido;
        
        this.getNombre=()=>_nombre;
        this.getEdad=()=>_edad;
        this.getImg=()=>_img;
        this.getComentarios=()=>_comentarios;
        this.setComentarios=(newComentarios)=>(_comentarios=newComentarios);
        this.getSonido=()=>_sonido;
    }

    get nombre(){
        return this.getNombre();
    }
    get edad(){
        return this.getEdad();
    }
    get img(){
        return this.getImg();
    }
    get comentarios(){
        return this.getComentarios();
    }
    set comentarios(newComentarios){
        return this.setComentarios(newComentarios);
    }
    get sonido(){
        return this.getSonido();
    }
}


export default Animal;