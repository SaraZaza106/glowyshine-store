let user = localStorage.getItem("user");

if(!user){
window.location="login.html";
}

let cartKey = "cart_"+user;
let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

function save(){
localStorage.setItem(cartKey,JSON.stringify(cart));
updateCount();
}

function addToCart(name,price){
let item = cart.find(i=>i.name===name);

if(item){ item.qty++; }
else{ cart.push({name,price,qty:1}); }

save();
alert("Added 🛒");
}

function updateCount(){
let el = document.getElementById("count");
if(el){
el.innerText = cart.reduce((a,b)=>a+b.qty,0);
}
}

updateCount();