const request = new XMLHttpRequest();
request.open("GET", "http://localhost:5000/api/user");
request.setRequestHeader("Access-Control-Allow-Credentials", "true");
request.setRequestHeader("Content-Type", "application/json");
request.onload = processData;
request.send();

function processData() {
    const response = JSON.parse(request.response);
}

function sendData() {
    const requestToSendData = new XMLHttpRequest();
    requestToSendData.open("POST", "http://localhost:5000/api/products", true);
    requestToSendData.setRequestHeader("Access-Control-Allow-Credentials", "true");
    requestToSendData.setRequestHeader("Content-Type", "application/json");
    requestToSendData.onload = processRequestToSendDataResponse;

    const data = {
        'product_name':document.getElementById("products"),
        "product_description":document.getElementById("productsdesc")
    }
    requestToSendData.send(JSON.stringify(data));

    function processRequestToSendDataResponse() {
        const response = JSON.parse(request.response);
        console.log(response);
        
    }
}

function edit(){
    document.getElementById("productdesc").disabled=false;
    document.getElementById("products").disabled=false;
}

const picture = document.getElementById()