import { useParams, useLocation } from "react-router";

const Profile = () => {
  // Use the useParams hook to get the username from the URL
  // username has to be applied as a named parameter in the route
  const { username } = useParams();
  const { state } = useLocation();

  return (
    <div>
      <h1>{username} Profile</h1>
      <p> Registered on:{state.registrationDate} </p>
    </div>
  );
};

export default Profile;
