import api from "./api";

class LoginService {
  async login({ email, password }) {
    const body = { email, password };
    try {
      const response = await api.post("/auth/login", body);
      return response.data;
    } catch (error) {
      console.log("login", error.response);
      return false;
    }
  }
}
export default new LoginService();
