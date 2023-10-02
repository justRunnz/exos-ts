import axios from "axios";

export function getUserSummary(id: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios
                .get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        }, 1000);
    });
}

// a supprimer plus tard
async function ceciEstUnFauxTest(n: number) {
    const result = await getUserSummary(n);
    console.log(result);
    return result;
}

ceciEstUnFauxTest(1);
