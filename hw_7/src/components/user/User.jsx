import "./user.css";
export default function User(props) {
  const users = props.users;
  return (
    <div className="table">
      <div>{users.name}</div>
      <div>{users.username}</div>
      <div>{users.email}</div>
    </div>
  );
}
