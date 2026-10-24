const botaoCopiar = document.getElementById('cop_col');

botaoCopiar.addEventListener('click', function(){

//botões para residência
    const telefone = document.getElementById('telefone').value;
    const genero = document.getElementById('genero').value;
    const nome = document.getElementById('nome').value;
    const leitura = document.getElementById('leitura').value;
    const proje = document.getElementById('proje').value;
    const moradores = document.getElementById('moradores').value;
    const pets = document.getElementById('pets').value;
    const tempo = document.getElementById('tempo').value;
    const tempos = document.getElementById('tempos').value;
    const litro = document.getElementById('litro').value;
    const litros = document.getElementById('litros').value;
    const banheiros = document.getElementById('banheiros').value;
    const data = document.getElementById('data').value;

//Para comercio
    const ativi = document.getElementById('ativi').value;
    const funcio = document.getElementById('funcio').value;

//opções de sim e não
    const verifiSim = document.getElementById('verifi_s').checked;
    const respostaVerifi = verifiSim ? 'Sim' : 'Não';

    const vazaSim = document.getElementById('vaza_s').checked;
    const respostaVaza = vazaSim ? 'Sim' : 'Não';

    const regSim = document.getElementById('reg_s').checked;
    const respostaReg = regSim ? 'Sim' : 'Não';

    const rotiSim = document.getElementById('roti_s').checked;
    const respostaRoti = rotiSim ? 'Sim' : 'Não';

    const petSim = document.getElementById('pet_s').checked;
    const respostaPet = petSim ? 'Sim' : 'Não';

    const caixaSim = document.getElementById('caixa_s').checked;
    const respostaCaixa = caixaSim ? 'Sim' : 'Não';

    const pisSim = document.getElementById('pis_s').checked;
    const respostaPis = pisSim ? 'Sim' : 'Não';

    const trocaSim = document.getElementById('troca_s').checked;
    const respostaTroca = trocaSim ? 'Sim' : 'Não';


    console.log("Telefone: ", telefone);
    console.log("Genero: ", genero);
    console.log("Nome: ", nome);
    console.log("Leitura: ", leitura);
    console.log("A data: ", data);
    console.log("Projeção: ", proje);
    console.log("Realizou as verificações nas instalações internas? ", respostaVerifi);
    console.log("Encontrou algum vazamento? ", respostaVaza);
    console.log("Mantém o registro fechado? ", respostaReg);
    console.log("Rotina normal? ", respostaRoti);
    console.log("Quantos moradores? ", moradores);
    console.log("Animais de estimação? ", respostaPet);
    console.log("Quantos? ", pets);
    console.log("Tempo? ", tempo);
    console.log("Reside a quanto tempo? ", tempos);
    console.log("Tem caixa? ", respostaCaixa);
    console.log("Quantas? ", litro);
    console.log("Litros? ", litros);
    console.log("Banheiro? ", banheiros);
    console.log("Piscina? ", respostaPis);
    console.log("Atividade? ", ativi);
    console.log("Funcionarios? ", funcio);

});

//parte do comercio vs residencia
const selectRoc = document.getElementById('RoC');
const blocoComercio = document.getElementById('bloco_comer');
const blocoResidencia = document.getElementById('bloco_resi');
const inputAtivi = document.getElementById('ativi');
const inputFuncio = document.getElementById('funcio');
const inputMoradores = document.getElementById('moradores');

selectRoc.addEventListener('change', function(){
    if (selectRoc.value === 'Comer'){
        blocoComercio.classList.remove('escondido');
        blocoResidencia.classList.add('escondido');

        inputAtivi.required = true;
        inputFuncio.required = true;
        inputMoradores.required = false;
    }else{
        blocoComercio.classList.add('escondido');
        blocoResidencia.classList.remove('escondido');

        inputAtivi.required = false;
        inputFuncio.required = false;
        inputMoradores.required = true;
    }
});

//os condicionais
const radioPetS = document.getElementById('pet_s');
const radioPetN = document.getElementById('pet_n');
const blocoPet = document.getElementById('condpet');
const inputPets = document.getElementById('pets');

function atualizaExibicaoPets(){
    if(radioPetS.checked){
        blocoPet.classList.remove('escondido');
        inputPets.required = true;
    }else{
        blocoPet.classList.add('escondido');
        inputPets.required = false;
        inputPets.value = ' ';
    }
}

radioPetS.addEventListener('change', atualizaExibicaoPets);
radioPetN.addEventListener('change', atualizaExibicaoPets);

const radioCaixaS = document.getElementById('caixa_s');
const radioCaixaN = document.getElementById('caixa_n');
const blocoCaixa = document.getElementById('condcaixa');
const inputCaixa = document.getElementById('litro');
const inputCaixas = document.getElementById('litros');

function atualizaExibicaoCaixa(){
    if(radioCaixaS.checked){
        blocoCaixa.classList.remove('escondido');
        inputCaixa.required = true;
        inputCaixas.required = true;
    }else{
        blocoCaixa.classList.add('escondido');
        inputCaixa.required = false;
        inputCaixas.required = false;
        inputCaixa.value = ' ';
        inputCaixas.value = ' ';
    }
}

radioCaixaS.addEventListener('change', atualizaExibicaoCaixa);
radioCaixaN.addEventListener('change', atualizaExibicaoCaixa);

//O reset
const formNotas = document.querySelector('form');

formNotas.addEventListener('reset', function(){

    setTimeout(function(){
        blocoComercio.classList.add('escondido');
        blocoResidencia.classList.add('escondido');
        bloco_exame.classList.add('escondido');

        if(typeof blocoPet !== 'undefined'){
            blocoPet.classList.add('escondido');
        }
        if(typeof blocoCaixa !== 'undefined'){
            blocoCaixa.classList.add('escondido');
        }

        inputAtivi.required = false;
        inputFuncio.required = false;
        inputMoradores.required = false;
    }, 0);
});

botaoCopiar.addEventListener('click', function(){
    //botões para residência
    const contato = document.getElementById('contato').value;
    const telefone = document.getElementById('telefone').value;
    const genero = document.getElementById('genero').value;
    const nome = document.getElementById('nome').value;
    const leitura = document.getElementById('leitura').value;
    const proje = document.getElementById('proje').value;
    const moradores = document.getElementById('moradores').value;
    const pets = document.getElementById('pets').value;
    const tempo = document.getElementById('tempo').value;
    const tempos = document.getElementById('tempos').value;
    const litro = document.getElementById('litro').value;
    const litros = document.getElementById('litros').value;
    const banheiros = document.getElementById('banheiros').value;
    const data = document.getElementById('data').value;
    const os = document.getElementById('num_os').value;
    const Alega = document.getElementById('alega').value;

//Para comercio
    const ativi = document.getElementById('ativi').value;
    const funcio = document.getElementById('funcio').value;

//opções de sim e não
    const verifiSim = document.getElementById('verifi_s').checked;
    const respostaVerifi = verifiSim ? 'Sim' : 'Não';

    const vazaSim = document.getElementById('vaza_s').checked;
    const respostaVaza = vazaSim ? 'Sim' : 'Não';

    const regSim = document.getElementById('reg_s').checked;
    const respostaReg = regSim ? 'Sim' : 'Não';

    const rotiSim = document.getElementById('roti_s').checked;
    const respostaRoti = rotiSim ? 'Sim' : 'Não';

    const petSim = document.getElementById('pet_s').checked;
    const respostaPet = petSim ? 'Sim' : 'Não';

    const caixaSim = document.getElementById('caixa_s').checked;
    const respostaCaixa = caixaSim ? 'Sim' : 'Não';

    const pisSim = document.getElementById('pis_s').checked;
    const respostaPis = pisSim ? 'Sim' : 'Não';

    const trocaSim = document.getElementById('troca_s').checked;
    const respostaTroca = trocaSim ? 'Sim' : 'Não';
    
let imovelTexto = "";
if(selectRoc.value === 'Resi'){
    imovelTexto =  `Se residência, quantas pessoas? ${moradores}`;
} else if (selectRoc.value === 'Comer'){
    imovelTexto = `Se comércio ou indústria, qual atividade? ${ativi}
Quantos funcionários? ${funcio}`;
}

let textoPet = `Animais de estimação? ${respostaPet}`;
if (respostaPet === 'Sim'){
    textoPet += ` Quantos? ${pets}`;
}

let textoCaixa = `Tem caixa de água? ${respostaCaixa}`;
if (respostaCaixa === 'Sim'){
    textoCaixa += ` Quantas: ${litro} Litros: ${litros}`;
}

let textoFinal ="";

if(selector.value === 'Revi'){

textoFinal = `${contato}: ${telefone} /${genero} ${nome} leitura do cliente ${leitura}m³ em ${data}. Projeção ${proje}. Alega que ${Alega}

Realizou as verificações nas instalações internas? ${respostaVerifi}
Localizou Vazamento? ${respostaVaza}
Mantém Registro fechado? ${respostaReg}
Rotina normal? ${respostaRoti}
${imovelTexto}
${textoPet}
Reside há quanto tempo? ${tempos} ${tempo}(s)
${textoCaixa}
Quantos banheiros? ${banheiros}
Tem piscina? ${respostaPis}`;
} else if(selector.value === 'Exame'){
textoFinal = `${contato}: ${telefone} /${genero} ${nome} leitura do cliente ${leitura}m³ em ${data}. Projeção ${proje}. Alega que ${Alega}

Número de OS (Revisão e/ou Refaturamento) vinculada: ${os}
Houve troca do hidrômetro nos últimos 2 meses? ${respostaTroca}
Realizou as verificações nas instalações internas? ${respostaVerifi}
Localizou Vazamento? ${respostaVaza}
Mantém Registro fechado? ${respostaReg}
Rotina normal? ${respostaRoti}
${imovelTexto}
${textoPet}
Reside há quanto tempo? ${tempos} ${tempo}(s)
${textoCaixa}
Quantos banheiros? ${banheiros}
Tem piscina? ${respostaPis}`;
}

const copiaNota = document.getElementById('notaPronta');
if (copiaNota){
    copiaNota.value = textoFinal;
}

navigator.clipboard.writeText(textoFinal).then(function(){
    alert('Nota gerada e copiada automaticamente com sucesso para a área de trasnferência!');
}).catch(function(err){
    console.error('Erro ao tentar copiar: ', err);
});

console.log("Texto final: ", textoFinal);
});

const selector = document.getElementById('selector');
const bloco_exame = document.getElementById('bloco_exame');
const inputOs = document.getElementById('num_os');
const inputTroca = document.getElementById('troca');
const aviso = document.getElementById('aviso');
const formulario = document.getElementById('formulario');

selector.addEventListener('change', function(){
    if(selector.value === 'Revi'){
        bloco_exame.classList.add('escondido');
        inputOs.value = ' ';
        inputTroca.value = ' ';
    }else{
        bloco_exame.classList.remove('escondido');
    }
});

selector.addEventListener('change', function(){
    if(selector.value === 'Revi'){
        formulario.classList.remove('escondido');
        aviso.classList.add('escondido');
    }else{
        formulario.classList.remove('escondido');
        aviso.classList.add('escondido');
    }
});

const burguiMenu = document.getElementById('btn_burgui');
const burguiFechar = document.getElementById('burgui_fecha');
const burguiLateral = document.getElementById('burgui_lateral');

burguiMenu.addEventListener('click', function(){
    burguiLateral.classList.remove('fechado');
});

burguiFechar.addEventListener('click', function(){
    burguiLateral.classList.add('fechado');
});

window.addEventListener('click', function(evento){
    if(!burguiLateral.contains(evento.target) && evento.target !== burguiMenu){
        burguiLateral.classList.add('fechado');
    }
});

const alegaQue = document.getElementById('alega');
const preAlega = document.getElementById('pre_alega');

preAlega.addEventListener('change', function(){
    if(preAlega.value === 'fez_teste'){
        alegaQue.value = `Fez as verificações e os testes e não foi encontrado vazamento, deseja a revisão, pois fatura está alta.`;
    } else if(preAlega.value === 'chamou'){
        alegaQue.value = `Chamou um técnico para sua residência e com ele não foi identificado nenhum tipo de vazamento, então deseja a revisão, pois fatura está alta.`;
    } else if(preAlega.value === 'fora'){
        alegaQue.value = `Esteve fora durante o tempo dessa fatura, além de realizar as verificações e os testes e nenhum vazamento foi constado, logo a fatura não faz sentido ter esse valor.`;
    }
});