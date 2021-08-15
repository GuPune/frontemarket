export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        console.log('check token1',user.token)
        // for Node.js Express back-end
        return {
            "Content-type": "application/json",
            'Authorization': 'Bearer ' + user.token,
        };
    } else {
        return {};
    }
}

