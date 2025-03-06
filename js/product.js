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