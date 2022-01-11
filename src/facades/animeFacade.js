const URL = "https://www.test.juliusmadsen.dk/devops-starter/api/anime";

function handleHttpErrors(res)
{
    if (!res.ok)
    {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

let apiFacade = () =>
{

const fetchData = (endpoints, updateAction, SetErrorMessage) =>
{
    const option = makeOptions("GET", true);
    return fetch(URL + "api" + endpoints, options)
    .then(handleHttpErrors)
            .then((data) => updateAction(data))
            .catch(err =>
            {
                if (err.status)
                {
                    console.log(err)
                    err.fullError.then(e => SetErrorMessage(e.code + ": " + e.message))
                }
                else { SetErrorMessage("Network error"); }
            })
    }
    return {
        fetchData
    }
}