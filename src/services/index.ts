import axios from "axios";

export class ApiWrapper {
  static getHeaders() {
    const headers = {
      "Content-Type": "application/json",
    };
    return { headers };
  }
  static get(url: string) {
    return axios.get(url, this.getHeaders());
  }
}
