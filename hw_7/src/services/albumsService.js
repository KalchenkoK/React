import api from "../api/api";
import { API_URL_ALBUMS } from "../constans/index";

export default function getAlbums() {
  return api.get(API_URL_ALBUMS).then((resp) => resp.data);
}
