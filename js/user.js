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

async function getUserId(id)
{

    const response = await fetch(domain + "api/User/" + id)   // URL orqali servirdan ma'lumot olinayapti
   if (response.status == 200){
        return response.json();
   }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

   if (response.status == 404) {
        alert("Page not found!");
        return null;                                  // serverga address xato berilganda null qaytadi
   }
}

async function updateUser(id, data)
{
    const response = await fetch(domain + "api/User/"+id, {           // fetch metodga 2 ta parametr berilayapti, birinchisi URL tipi string, ikkinchisi metod berilayapti tipi object.
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(data))
    });                                                              
    if (response.status == 200){
        return response.json();
    }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

    if (response.status == 404) {
        return null;                                  // serverga address xato berilganda null qaytadi
    }
}

async function deleteUser(id)
{
    const response = await fetch(domain + "api/User/"+id, {
        method: "DELETE"
    });                                                              // fetch metodga 2 ta parametr berilayapti, birinchisi URL tipi string, ikkinchisi metod berilayapti tipi object.
    if (response.status == 200){
        return response.json();
    }                                                                  // fetch bilan then bu servirga zapros berib servirdan kelgan ma'lumotni oladi

    if (response.status == 404) {
        return null;                                  // serverga address xato berilganda null qaytadi
    }
}

