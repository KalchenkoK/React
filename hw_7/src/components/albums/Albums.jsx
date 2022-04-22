import useAlbums from "../../hooks/useAlbums";
import Album from "../album/Album";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Albums() {
  const { albums } = useAlbums();

  return (
    <>
      <div className="linkBlock">
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <ul>
        {albums.map((el) => (
          <Album albums={el} key={el.id} />
        ))}
      </ul>
    </>
  );
}
