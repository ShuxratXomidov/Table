async function getUsers()
{

    const response = await fetch("https://localhost:7236/api/User")   // URL orqali servirdan ma'lumot olinayapti
   if (response.status == 200){
        return response.json();
   }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

   if (response.status == 404) {
        return null;                                  // serverga address xato berilganda null qaytadi
   }
}

async function getRoles()
{
    const response = await fetch("https://localhost:7236/api/Role")
    
        if (response.status == 200) {
            return response.json();
        }
        if (response.status == 404) {
            return null;
        } 
}

// async function getProducts() 
// {
//     const response = await fetch("https://localhost:7236/api/Product")   

//         if (response.status == 200) {
//             return response.json();
//         }
//         if ( response.status == 404) {
//             return null;
//         }
// }

function getProducts(){
    const request = new XMLHttpRequest();

    request.onload = function() 
    {
        let data = JSON.parse(request.responseText);

        for (let i = 0; i< data.length; i++) 
        {
            let product = data[i];
            let newRow = document.createElement("tr");
            newRow.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.size}</td>
            <td>
                <a href="${"https://localhost:7236/" + product.photo}">${product.photo}</a>
            </td>
            <td>${product.quantity}</td>
            `;

            let tbodyElement = document.getElementById("products");
            tbodyElement.appendChild(newRow);   
        }

    }

    request.open("Get", "https://localhost:7236/api/Product");
    request.send();
}

async function getOrders()
{

    const response = await fetch("https://localhost:7236/api/Order")   // URL orqali servirdan ma'lumot olinayapti
   if (response.status == 200){
        return response.json();
   }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

   if (response.status == 404){
        return null;                                  // serverga address xato berilganda null qaytadi
   }
}

async function getProducts2() 
{
    const response = await fetch("https://localhost:7236/api/Product") 
    if (response.status == 200) 
    {
        return response.json();
    } 
    
    if (response.status ==404)
    {
        return null;
    }
}


async function addOrder(data) 
{
    const response = await fetch("https://localhost:7236/api/Order", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "accept: */*"
        },
        body: JSON.stringify(Object.fromEntries(data))
    });

    if (response.ok)
    {
        return response.json();
    }
    else
    {
        alert(response.status);
        return null;
    }
}