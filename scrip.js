var projetos = document.getElementById('projetos')
var formacao = document.getElementById('formacao')
var contatos = document.getElementById('contatos')



projetos.addEventListener('mouseenter', ()=>{
    projetos.style.color = "#9400D3"
})

projetos.addEventListener('mouseout', ()=>{
    projetos.style.color = "black"
})

formacao.addEventListener('mouseenter', ()=>{
    formacao.style.color = "#9400D3"
})

formacao.addEventListener('mouseout', ()=>{
    formacao.style.color = "black"
})

contatos.addEventListener('mouseenter', ()=>{
    contatos.style.color = "#9400D3"
})

contatos.addEventListener('mouseout', ()=>{
    contatos.style.color = "black"
})


function ampliarImagem() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (larguraTela > 768) {
    var imagem = document.getElementById('first-img2');
    imagem.style.width = '400px';
}
}

function restaurarTamanhoOriginal() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (larguraTela > 768){
        var imagem = document.getElementById('first-img2');
        imagem.style.width = '320px';
    }
}

function ampliarImagem2() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (larguraTela > 768){
        var imagem2 = document.getElementById('second-img2');
        imagem2.style.width = '400px';
    }
}

function restaurarTamanhoOriginal2() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (larguraTela > 768){
        var imagem2 = document.getElementById('second-img2');
        imagem2.style.width = '320px';
    }
}

function ampliarImagem3() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (larguraTela > 768){
        var imagem2 = document.getElementById('third-img2');
        imagem2.style.width = '400px';
    }
}

function restaurarTamanhoOriginal3() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (larguraTela > 768){
        var imagem2 = document.getElementById('third-img2');
        imagem2.style.width = '320px';
    }
}

var tittle = document.getElementById('Tittle-SecondProject')
var tittle = document.getElementById('Tittle-SecondProject')

tittle.addEventListener('mouseenter', AlteraTítulo)
tittle.addEventListener('mouseout', VoltaTítulo)

function AlteraTítulo(){
    tittle.style.cursor = 'pointer'
    tittle.innerHTML = 'Aaaaaaarrrrr!!!!☠️'
    tittle.style.color = 'red'
}

function VoltaTítulo(){
    tittle.innerHTML = 'A Vila Do Pirata'
    tittle.style.color = 'black'
}

// Scroll Reveal 

window.revelar = ScrollReveal({reset:true})

// Header Container 

revelar.reveal('.reveal-header', 
{
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.first-reveal', 
{
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.first-img-reveal', 
{
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'top'
})

revelar.reveal('.second-reveal', 
{
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.second-img-reveal', 
{
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'top'
})

revelar.reveal('.third-reveal', 
    {
        duration: 2000,
        distance: '90px',
        delay: 500
    })
    
    revelar.reveal('.third-img-reveal', 
    {
        duration: 2000,
        distance: '90px',
        delay: 500,
        origin: 'top'
    })

revelar.reveal('.services-reveal', 
{
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.contact-reveal', 
{
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'top'
})