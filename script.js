


const checkk = () => {
    let getEl = [...document.querySelectorAll("input")];
    // console.log(getEl);
    let howManyInputs = 0;

    getEl.forEach(e => {
        if (e.checked) {
            e.checked = false;
        }
        else if (e.checked === false) {
            e.checked = true;
        }
        if (e.value === '') {
            e.value = "przykładowy text";
        }
        howManyInputs++;
    });
    console.log(howManyInputs);
};




const check = () => {
    let getEl = [...document.querySelectorAll("input")];
    // console.log(getEl);
    let howManyInputs = 0;

    getEl.forEach(e => {
        console.log(e);
        if (e.checked) {
            e.checked = false;
        }
        if (e.checked === false) {
            e.checked = true;
        }
        if (e.value === '') {
            e.value = "przykładowy text";
        }
        howManyInputs++;
    });
    console.log(howManyInputs);
};



const btn = document.querySelector('#selectAllInputs');
btn.addEventListener('click', checkk);



const checkkk = () => {
    let getEl = [...document.querySelectorAll("input")];
    let howManyInputs = 0;

    getEl.forEach(e => {
        if (e.checked) {
            e.checked = false;
        }
        else if (e.checked === false) {
            e.checked = true;
        }
        if (e.value === '') {
            e.value = "33-222";
        }
        howManyInputs++;
    });
    console.log(howManyInputs);
};