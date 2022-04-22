export default function Album(props) {
  const albums = props.albums;
  return <li style={{ marginBottom: "10px" }}>{albums.title}</li>;
}
