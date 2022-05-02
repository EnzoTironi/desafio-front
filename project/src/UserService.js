import api from "./api";

class UserService {
  async user({ name, email, phone, color, nationality }) {
    const body = { name, email, phone, color, nationality };
    try {
      const response = await api.get(`/user/getuser/${email}`, body);
      return response.data;
    } catch (error) {
      console.log("user", error.response.data);
      return false;
    }
  }

  async updateUser({ name, email, phone, color, nationality }) {
    const body = { name, email, phone, color, nationality };
    try {
      const response = await api.put(`/user/`, body);
      return response.data;
    } catch (error) {
      console.log("user", error.response.data);
      return false;
    }
  }
}
export default new UserService();
