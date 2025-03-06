// const domain = "https://localhost:7236/";
const domain = "http://localhost:5210/";
const front_domain = "http://localhost:5500/";
const navbarMenyu = [
    {title: "Users Page", page: "user.html"},
    {title: "Products Page", page: "product.html"},
    {title: "Orders Page", page: "order.html"},
    {title: "Roles Page", page: "role.html"}
]

function createNavbar()
{
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg navbar-light bg-light";

    const div = document.createElement("div");
    div.className = "container-fluid";

    const link = document.createElement("a");
    link.className = "navbar-brand";
    link.href = "index.html";
    link.innerText = "Main Page";

    div.prepend(link);

    const btn = document.createElement("button");
    btn.className = "navbar-toggler";
    btn.type = "button";
    btn.dataset.bsToggle = "collapse";
    btn.dataset.bsTarget = "#navbarSupportedContent";
    btn.ariaExpanded = false;
    btn.ariaLabel = "Toggle navigation";
    btn.ariaControls = "navbarSupportedContent";

    const span = document.createElement("span");
    span.className = "navbar-toggler-icon";

    btn.appendChild(span);

    const div2 = document.createElement("div");
    div2.className = "collapse navbar-collapse";
    div2.id = "navbarSupportedContent";

    const ul = document.createElement("ul");
    ul.className = "navbar-nav me-auto mb-2 mb-lg-0";

    for (let index = 0; index < navbarMenyu.length; index++)
    {
        const li = document.createElement("li");
        li.className = "nav-item";
        const a = document.createElement("a");  
        a.ariaCurrent = "page";
        a.href = navbarMenyu[index].page;
        a.innerText = navbarMenyu[index].title;

        if(window.location.pathname == "/"+ navbarMenyu[index].page)
        {
            a.classList.add("nav-link", "active");
        }else
        {
           a.className = "nav-link";
        }

        li.appendChild(a);
        ul.appendChild(li);
    }

    div2.appendChild(ul);

    div.appendChild(btn);
    div.appendChild(div2);

    navbar.appendChild(div);

    let body = document.querySelector("body");
    body.prepend(navbar);
}


// async function getUsers()
// {

//     const response = await fetch(domain + "api/User")   // URL orqali servirdan ma'lumot olinayapti
//    if (response.status == 200){
//         return response.json();
//    }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

//    if (response.status == 404) {
//         return null;                                  // serverga address xato berilganda null qaytadi
//    }
// }

// async function addUser(user) 
// {
//     const response = await fetch(domain + "api/User", {
//         method: "Post",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "accept: */*"
//         },
//         body: JSON.stringify(Object.fromEntries(user))
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

// async function updateUser(id, data)
// {
//     const response = await fetch(domain + "api/User/"+id, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(Object.fromEntries(data))
//     });                                                              // fetch metodga 2 ta parametr berilayapti, birinchisi URL tipi string, ikkinchisi metod berilayapti tipi object.
//     if (response.status == 200){
//         return response.json();
//     }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

//     if (response.status == 404) {
//         return null;                                  // serverga address xato berilganda null qaytadi
//     }
// }

// async function deleteUser(id)
// {
//     const response = await fetch(domain + "api/User/"+id, {
//         method: "DELETE"
//     });                                                              // fetch metodga 2 ta parametr berilayapti, birinchisi URL tipi string, ikkinchisi metod berilayapti tipi object.
//     if (response.status == 200){
//         return response.json();
//     }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

//     if (response.status == 404) {
//         return null;                                  // serverga address xato berilganda null qaytadi
//     }
// }

// async function getUserId(id)
// {

//     const response = await fetch(domain + "api/User/" + id)   // URL orqali servirdan ma'lumot olinayapti
//    if (response.status == 200){
//         return response.json();
//    }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

//    if (response.status == 404) {
//         alert("Page not found!");
//         return null;                                  // serverga address xato berilganda null qaytadi
//    }
// }

// async function getProducts() 
// {
//     const response = await fetch(domain + "api/Product")   

//         if (response.status == 200) {
//             return response.json();
//         }
//         if ( response.status == 404) {
//             return null;
//         }
// }

// async function addProduct(product)
// {
//     const response = await fetch(domain + "api/Product", {
//         method: "Post",
//         body: product
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

// async function getRoles()
// {
//     const response = await fetch(domain + "api/Role")
    
//         if (response.status == 200) {
//             return response.json();
//         }
//         if (response.status == 404) {
//             return null;
//         } 
// }

// async function addRole(role)
// {
//     const response = await fetch(domain + "api/Role", {
//         method: "Post",
//         headers: {
//             "Accept": "accept: */*"
//         },
//         body: JSON.stringify(Object.fromEntries(role))
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


// async function getOrders()
// {

//     const response = await fetch(domain + "api/Order")   // URL orqali servirdan ma'lumot olinayapti
//    if (response.status == 200){
//         return response.json();
//    }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

//    if (response.status == 404){
//         return null;                                  // serverga address xato berilganda null qaytadi
//    }
// }
