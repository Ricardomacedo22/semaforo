const img = document.getElementById ( 'img' );
const img1 = document.getElementById ( 'img1' );
const botoes = document.getElementById ( 'botoes');
let colorfunction = 0;
let intervalstopid = null;
let colorfunction1 = 0;
let intervalstop1id = null;


const luz = ( event ) => {
       stopchange();
       turnOn[event.target.id] ();
       console.log (event.target.id)
    }

const nextfunction = () => colorfunction = colorfunction < 2 ? ++colorfunction : 0;

const changecolor = () => {
    const colors = ['verde', 'amarelo', 'vermelho'];
    const color = colors [ colorfunction ];
    turnOn[color]();
    nextfunction();
}

const stopchange = () => {
    clearInterval (intervalstopid);
}


botoes.addEventListener ("click", luz);

       
const turnOn = {
    'vermelho': () => img.src = "./img/vermelho_s_fundo.png" ,
    'amarelo': () => img.src = "./img/amarelo_s_fundo.png" ,
    'verde': () => img.src = "./img/verde_s_fundo.png" ,
    'neutro': () => img.src ="./img/desligado_s_fundo.png",
    'automático': () => intervalstopid = setInterval (changecolor, 1000) ,
}


const luz1 = ( event ) => {
    stopchange1();
    turnOn1[event.target.id] ();
    console.log (event.target.id)
 }

const nextfunction1 = () => colorfunction1 = colorfunction1 < 2 ? ++colorfunction1 : 0;

const changecolor1 = () => {
 const colors1 = ['verde', 'amarelo', 'vermelho'];
 const color1 = colors1 [ colorfunction1 ];
 turnOn1[color1]();
 nextfunction1();
}

const stopchange1 = () => {
 clearInterval (intervalstop1id);
}


botoes.addEventListener ("click", luz1);

const turnOn1 = {
    'vermelho': () => img1.src = "./img/vermelho_s_fundo.png" ,
    'amarelo': () => img1.src = "./img/amarelo_s_fundo.png" ,
    'verde': () => img1.src = "./img/verde_s_fundo.png" ,
    'neutro': () => img1.src ="./img/desligado_s_fundo.png",
    'automático': () => intervalstop1id = setInterval (changecolor1, 1000) ,

}



    
/*
const natal = ['verde', 'amarelo', 'vermelho']

natal.addEventListener ("click", light)

const light = () =>{

}
*/



