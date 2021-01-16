'use strict'

const botonNumber  = document.getElementsByName('number');
const botonOper = document.getElementsByName('oper');
const botonEqual = document.getElementsByName('equal')[0];
const botonDelete = document.getElementsByName('delete')[0];

var result = document.getElementById('input');

//------------------------------

var presentOper = '';

var lastOper = '';

var oper = undefined;

botonNumber.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNum(boton.innerText);
    })
});


botonOper.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOper(boton.innerText);        
    })
});


botonEqual.addEventListener('click', function(){
    showResult();
    actualizar();     
});

botonDelete.addEventListener('click', function(){
    deleteInput();
    actualizar();    
});

function selectOper(ope) {
    if(presentOper === ''){
        return;
    }
    else if (lastOper !== ''){
           showResult(); 
    }
    oper = ope.toString();
    lastOper = presentOper;
    presentOper = '';
};

function showResult() {
    var calculo;
    const last = parseFloat(lastOper);
    const present = parseFloat(presentOper);

    if (isNaN(last) || isNaN(present)) {
        return; 
    }
    switch (oper) {
        case '+':
            calculo = last + present;
            break;
        
        case '-':
            calculo = last - present;
            break;

        case 'x':
            calculo = last * present;
            break;

        case '/':
            calculo = last / present ;
            break;
    
        default:
            return;
            
    }

    presentOper = calculo;
    oper = undefined;
    lastOper = '';
}

function agregarNum(num){
    presentOper = presentOper.toString() + num.toString();
    actualizar();
};

function deleteInput() {
    presentOper = '';
    lastOper = '';
    oper = undefined;
};

function actualizar() {
    result.value = presentOper;
};

deleteInput();
