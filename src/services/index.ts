import axios from "axios";

export class ApiWrapper {
  static getHeaders() {
    let token = window.localStorage.getItem("authToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    return { headers };
  }

  static setToken(token: string) {
    window.localStorage.setItem("authToken", token);
  }

  static getToken() {
    return window.localStorage.getItem("authToken");
  }

  static removeToken() {
    window.localStorage.removeItem("authToken");
  }
  static get(url: string) {
    return axios.get(url, this.getHeaders());
  }

  static post(url: string, data: any) {
    return axios.post(url, data, this.getHeaders());
  }

  static put(url: string, data: any) {
    return axios.put(url, data, this.getHeaders());
  }

  static delete(url: string) {
    return axios.delete(url, this.getHeaders());
  }
}
