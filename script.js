const elForm = document.getElementById("form");
const elInput = document.getElementById("input");
const elSelect = document.getElementById("select");
const elTitle = document.getElementById("title");


const Dollar = 10696.27;
const Euro = 0.8896;
const Ruble = 70.5187;
const Dirham = 2912.17; 
const Lira = 6.8533;

let elInputValue = Number(elInput.value)

elForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(!isNaN(elInputValue)){
        if(elSelect.value === "Dollar"){
            elTitle.textContent = (elInput.value / Dollar).toFixed(2)+ 'Dollar';
        }else if(elSelect.value === "Euro"){
            elTitle.textContent = (elInput.value / Euro).toFixed(2)+ 'Euro';
        }else if(elSelect.value === "Ruble"){
            elTitle.textContent = (elInput.value / Ruble).toFixed(2)+ 'Ruble';
        }else if(elSelect.value === "Dirham"){
            elTitle.textContent = (elInput.value / Dirham).toFixed(2)+ 'Dirham';
        }else if(elSelect.value === "Lira"){
            elTitle.textContent = (elInput.value / Lira).toFixed(2)+ 'Lira';
        }
    }else{
        elTitle.textContent = "Error";
    }
})