import { useDispatch, useSelector } from "react-redux";
import { handleFavourite } from "../store/userSlice/userSlice";
import styles from "./UserCard.module.sass";

function UserCard() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleFavouriteClick = () => {
    console.log(user);
    dispatch(handleFavourite());
  };

  return (
    <div className={styles.userCard}>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/hugh-jackman-gettyimages-1211676023.jpg"
        alt="userPhoto"
      />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <button onClick={handleFavouriteClick}>
        {user.isFavourite ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default UserCard;
