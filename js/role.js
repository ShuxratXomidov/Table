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

