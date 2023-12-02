const altura = document.querySelector('#txaltura')
const peso = document.querySelector('#txpeso')
const res = document.querySelector('#resposta')
const res2 = document.querySelector('#res2')
const btn_modal = document.querySelector('#btn_modal')
const alt_print = document.querySelector('.alt_print')
const pes_print = document.querySelector('.pes_print')
const main = document.querySelector('main')
const section = document.querySelector('section')

const modal = document.querySelector('#modal_img')

const btn = document.querySelector('#btn_enviar')
const btn_voltar = document.querySelector('#voltar')


btn.addEventListener('click',()=>{

    if(altura.value.length == 0 || peso.value.length == 0){
        window.alert('preencha os dados')
    } else {

    main.classList.toggle('desapear')
    section.classList.toggle('desapear')

    const imc = peso.value / Math.pow(altura.value,2)

    res.innerHTML = `IMC: ${imc.toFixed(2)} <br>`

    alt_print.innerHTML = `Altura: ${altura.value} ` 
    pes_print.innerHTML = `Peso: ${peso.value}`

    if(imc < 18.5){
        res2.innerHTML = `Menor que 18.5 | Abaixo do peso`
    } else if(imc < 24.9){
        res2.innerHTML = `Entre 18.5 a 24.9 | Peso Normal`
    } else if(imc <29.9){
        res2.innerHTML = `Entre 25 a 29.9 | Obesidade Grau 1`
    } else if(imc <39.9){
        res2.innerHTML = `Entre 30 a 34.9| Obesidade grau 2`
    } else{
         res2.innerHTML =  `Maior que 40 | Obesidade grau 3`
    }
}

})


btn_modal.addEventListener('click',()=>{
    modal.classList.toggle('desapear')

    if(modal.classList == 'desapear'){
    btn_modal.innerHTML = 'Indices de massas <i class="fa-solid fa-arrow-pointer"></i>'
    } else{
        btn_modal.innerHTML = 'Indices de massas   <i class="fa-solid fa-x"></i>'
    }
    
})

btn_voltar.addEventListener('click',()=>{
    main.classList.toggle('desapear')
    section.classList.toggle('desapear')
    imc = 0
})


