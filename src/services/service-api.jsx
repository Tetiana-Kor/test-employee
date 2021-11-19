import axios from 'axios';

const BASE_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users'

async function fetchUsers() {
    const response = await axios.get(BASE_URL)
    return response
}

export default fetchUsers