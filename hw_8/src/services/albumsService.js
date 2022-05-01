// import api from "../api/api";
import { ALBUMS_URI } from "../constans/index";
import {placeHolderCreate} from "../api/api"

export default function getAlbums() {
  return placeHolderCreate.get(ALBUMS_URI).then((resp) => resp.data);
}
