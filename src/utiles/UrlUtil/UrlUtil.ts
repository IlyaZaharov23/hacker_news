import { generatePath } from "react-router-dom";

export class UrlUtil {
  static generatePathWithId(route: string, id: number) {
    if (id < 0) {
      throw new Error("ID cannot be negative.");
    }
    if (id === 0) {
      throw new Error("ID cannot be 0.");
    }
    return generatePath(route, { id });
  }
  static cutIdFromUrl() {
    const currentUrl = new URL(window.location.href);
    const nextUrl = currentUrl.pathname.split("/").slice(0, 3).join("/");
    window.history.replaceState({}, "", nextUrl.toString());
  }
  static getIdFromUrl(params: string | undefined) {
    return Number(params);
  }
  static getTestUrl(route: string, id: number) {
    return `/${route.split("/")[1]}/${id}`;
  }
}
