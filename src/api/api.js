import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function sendMail(form) {
    return axios.post(`${BASE_URL}/mail/send`, {
        subject: "test",
        message: "Hier is een lichaam"
    }).then(response => response.data);
}

