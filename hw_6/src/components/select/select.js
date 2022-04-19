export default function Select(props) {
  const { changeSelect } = props;
  return (
    <select onChange={(e) => changeSelect(e)}>
      <option value="Light">Light</option>
      <option value="Dark">Dark</option>
    </select>
  );
}
