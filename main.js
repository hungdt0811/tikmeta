// add backgroud
let imgInputs = document.querySelectorAll('.ticket-area input[type="file"]');
imgInputs.forEach(input => {
    input.addEventListener('change',(event) => {
        const file = event.target.files[0];

        let uploadImg = document.querySelector(`.ticket-area .active img[data-input="${event.target.id}"]`);

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    })
})

let sizeInputs = document.querySelectorAll('.ticket-area .slider');
let avatarImg = document.querySelector('.avatar-input');
let translateX = 0;
let translateY = 0;
let zoom = 1;

sizeInputs.forEach(input => {
    input.addEventListener("input", (e) =>{
        switch(e.target.id) {
            case "horizonal-input":
                translateX = Number(e.target.value);
                break;
            case "vertical-input":
                translateY = Number(e.target.value);
                    break;
            case "zoom-input":
                zoom = Number(e.target.value);
                break;
        }
        avatarImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoom})`;
    })
})

// Choose template type
let typeTemplates = document.getElementsByName('template');
let imgTemplates = document.querySelectorAll('.img-custom');
let typeChoose;

typeTemplates.forEach((input, i) => {
    input.addEventListener('change', (e) => {
        typeChoose = e.target.value;
        imgTemplates.forEach((tem, j) => {
            if(i === j) {
                tem.classList.add('active');
            }
            else {
                tem.classList.remove('active');
            }
        })
        
    })
})

// change customer name
let inputCustomerName = document.getElementsByName('customer-input');
inputCustomerName[0].addEventListener('input', (e) => {
    let customerName = document.querySelector('.ticket-area .active .customer-name p');
    customerName.innerText = e.target.value;
})

// change font
let fontInput = document.getElementsByName('font-input');

fontInput[0].addEventListener('change', (e) => {
    let customerName = document.querySelector('.ticket-area .active .customer-name p');
    customerName.style.fontFamily = `${e.target.value}`;
})

// change size
let sizeInput = document.getElementsByName('size-input');
sizeInput[0].addEventListener('input', (e) => {
    let customerName = document.querySelector('.ticket-area .active .customer-name p');
    document.querySelector('label[for="size-input"] span').innerText = e.target.value + 'px';
    customerName.style.fontSize = `${e.target.value}px`;
})

// change color
let colorInput = document.getElementsByName('color-input');
colorInput[0].addEventListener('input', (e) => {
    let customerName = document.querySelector('.ticket-area .active .customer-name p');
    customerName.style.color = `${e.target.value}`;
})

