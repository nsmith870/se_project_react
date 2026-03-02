import "./SideBar.css";
import avatarDefault from "../../assets/wtwr-avatarImage.svg";

export default function SideBar() {
  const username = "Terrance Tegegne";
  const avatar = avatarDefault;

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">{username}</p>

        <img className="sidebar__avatar" src={avatar} alt="user avatar" />
      </div>
    </aside>
  );
}
