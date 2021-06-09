import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getClientBoard() {
    return axios.get(API_URL + 'client', { headers: authHeader() });
  }

  getFournisseurBoard() {
    return axios.get(API_URL + 'fournisseur', { headers: authHeader() });
  }
}

export default new UserService();
