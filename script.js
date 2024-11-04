let toastBox = document.getElementById('toastBox');
let successMsg  = '<i class="fa-solid fa-circle-check"></i> Succcessfully submitted';
let errorMsg  = '<i class="fa-solid fa-circle-exclamation"></i> Please fix the error';
let invalidMsg  = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, please try again';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
toastBox.appendChild(toast);
if(msg.includes('error')) {
    toast.classList.add("error");
}
if(msg.includes('Invalid')) {
    toast.classList.add("invalid");
}
setTimeout(() => {
    toast.remove();
}, 5000);
}




// if(msg === successMsg) {
//     toast.classList.add("tick");
// }
// else if(msg === errorMsg) {
//     toast.classList.add("error");
// }
// else if(msg === invalidMsg) {
//     toast.classList.add("invalid");
// }