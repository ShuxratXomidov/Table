

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
