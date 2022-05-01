import useAlbums from "../../hooks/useAlbums";
import Album from "../album/Album";
import { Link } from "react-router-dom";
import "../../App.css";
import { Box } from "@mui/system";
export default function Albums() {
  const { albums } = useAlbums();

  return (
    <>
      <Box className="linkBlock">
        <Link to={"/dashboard"}>Dashboard</Link>
      </Box>
      <ul>
        {albums.map((el) => (
          <Album albums={el} key={el.id} />
        ))}
      </ul>
    </>
  );
}
