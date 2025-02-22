const domain = "https://localhost:7236/";


const div = document.getElementById("navbar");

const navItems = [
    {name: "Main Page", link: "index.html", class: "nav-link"},
    {name: "Users Page", link: "user.html", class: "nav-link"},
    {name: "Products Page", link: "product.html", class: "nav-link"},
    {name: "Orders Page", link: "order.html", class: "nav-link"},
    {name: "Roles Page", link: "role.html", class: "nav-link"}
]

function createNavbar(items){
    const ul = document.createElement("ul");
    ul.className = "navbar-nav me-auto mb-2 mb-lg-0"

    items.forEach(item => {
        const li = document.createElement("li");
        li.className = "nav-item";
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;
        a.className = item.class;

        li.appendChild(a);

        ul.appendChild(li);
    });

    div.appendChild(ul);
}

async function getUsers()
{

    const response = await fetch(domain + "api/User")   // URL orqali servirdan ma'lumot olinayapti
   if (response.status == 200){
        return response.json();
   }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

   if (response.status == 404) {
        return null;                                  // serverga address xato berilganda null qaytadi
   }
}

async function addUser(user) 
{
    const response = await fetch(domain + "api/User", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "accept: */*"
        },
        body: JSON.stringify(Object.fromEntries(user))
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


async function getProducts() 
{
    const response = await fetch(domain + "api/Product")   

        if (response.status == 200) {
            return response.json();
        }
        if ( response.status == 404) {
            return null;
        }
}

async function addProduct(product)
{
    const response = await fetch(domain + "api/Product", {
        method: "Post",
        body: product
    })
    
    if (response.status == 200)
    {
        return response.json();
    }

    if (response.status == 404)
    {
        return null;
    }
}

async function getRoles()
{
    const response = await fetch(domain + "api/Role")
    
        if (response.status == 200) {
            return response.json();
        }
        if (response.status == 404) {
            return null;
        } 
}

async function addRole(role)
{
    const response = await fetch(domain + "api/Role", {
        method: "Post",
        headers: {
            "Accept": "accept: */*"
        },
        body: JSON.stringify(Object.fromEntries(role))
    })
    
    if (response.status == 200)
    {
        return response.json();
    }

    if (response.status == 404)
    {
        return null;
    }
}


async function getOrders()
{

    const response = await fetch(domain + "api/Order")   // URL orqali servirdan ma'lumot olinayapti
   if (response.status == 200){
        return response.json();
   }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

   if (response.status == 404){
        return null;                                  // serverga address xato berilganda null qaytadi
   }
}

// async function addOrder(order) 
// {
//     const response = await fetch("https://localhost:7236/api/Order", {
//         method: "Post",
//         body: {
//             'userId': data.get("userId"),
//             'productIds': [data.get("productIds")]
//         },
//         headers: {
//             'Content-Type': 'application/json'  
//         }
//     })

//     if (response.status == 200)
//     {
//         return response.json();
//     }
    
//     if (response.status == 404)
//     {
//         return null;
//     }
// }




// async function getProducts2() 
// {
//     const response = await fetch(domain + "api/Product") 
//     if (response.status == 200) 
//     {
//         return response.json();
//     } 
    
//     if (response.status ==404)
//     {
//         return null;
//     }
// }


// async function addOrder(data) 
// {
//     const response = await fetch(domain + "api/Order", {
//         method: "Post",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "accept: */*"
//         },
//         body: JSON.stringify(Object.fromEntries(data))
//     });

//     if (response.ok)
//     {
//         return response.json();
//     }
//     else
//     {
//         alert(response.status);
//         return null;
//     }
// }