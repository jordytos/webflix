import { Link, useMatch, useParams } from "react-router-dom";

function User() {
  const params = useParams();

  const match = useMatch("/users/2");
  console.log("match", match);

  return (
    <div>
      <h3>
        <span role="img" aria-label="person">
          🤵
        </span>
        {params.id}
      </h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default User;
