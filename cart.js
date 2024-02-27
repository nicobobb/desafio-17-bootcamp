const orderList = JSON.parse(localStorage.getItem("menusAddCart") || "[]");
const orderProductList = document.getElementById("orderProductList");
const cartNumber = document.getElementById("cartNumber");
const noProductAlert = document.getElementById("noProductAlert");
const orderTotalPrice = document.getElementById("orderTotalPrice");
const sendOrder = document.getElementById("sendOrder");
const errorName = document.getElementById("errorName");
const errorAddress = document.getElementById("errorAddress");
const errorPhone = document.getElementById("errorPhone");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const orderInfo = document.getElementById("orderInfo");
const confOrder = document.getElementById("confOrder");

if (orderList.length != 0) {
    noProductAlert.style.display = "none";
}

const orderNumber = () => {
    return Math.floor(Math.random() * 10) + Date.now();
};

const orderItemList = (name, price) => {
    return `
    <div class="order__productItem">
        <h3 class="order__productTitle">${name}</h3>
        <p class="order__productPrice">$${price}</p>
    </div>
    `;
};

let allOrderHtml = "";

orderList.forEach((e) => {
    allOrderHtml += orderItemList(e.name, e.price);
});

orderProductList.innerHTML = allOrderHtml;

cartNumber.innerText = orderList.length;

const totalPrice = orderList.reduce((total, pos) => total + pos.price, 0);

const plusPrice = (price) => {
    return `
    <div class="totalPrice__container">
        <h3 class="totalPrice__h3">Total</h3>
        <p class="totalPrice__p">$${price}</p>
    </div>
    `;
};

orderTotalPrice.innerHTML = plusPrice(totalPrice);

sendOrder.addEventListener("submit", (e) => {
    e.preventDefault();
    let validated = true;
    const name = nameInput.value;
    const address = addressInput.value;
    const phone = phoneInput.value;

    if (!validationName(name)) {
        errorName.textContent = "Nombre incorrecto.";
        errorName.style.opacity = "1";
        errorName.style.color = "#f58080";
        validated = false;
    } else {
        errorName.textContent = "";
        errorName.style.opacity = "0";
    }

    if (!validationAddress(address)) {
        errorAddress.textContent = "Dirección incorrecta.";
        errorAddress.style.opacity = "1";
        errorAddress.style.color = "#f58080";
        validated = false;
    } else {
        errorAddress.textContent = "";
        errorAddress.style.opacity = "0";
    }

    if (!validationPhone(phone)) {
        errorPhone.textContent = "Teléfono incorrecto.";
        errorPhone.style.opacity = "1";
        errorPhone.style.color = "#f58080";
        validated = false;
    } else {
        errorPhone.textContent = "";
        errorPhone.style.opacity = "0";
    }

    if (validated) {
        console.log("se envio su pedido");
        orderProductList.innerHTML = "";
        orderTotalPrice.innerHTML = "";
        localStorage.clear("menusAddCart");
        cartNumber.innerText = 0;
        sendOrder.reset();
        orderInfo.textContent = `Tu pedido se envió correctamente con el número #${orderNumber()} `;
        confOrder.style.display = "block";
        confOrder.innerHTML = allOrderHtml + plusPrice(totalPrice);
    }
});
