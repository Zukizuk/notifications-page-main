import { useState } from "react";
import "./App.scss";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Mark from "./assets/images/avatar-mark-webber.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Chess from "./assets/images/image-chess.webp";

function App() {
  const [unread, setUnread] = useState(true);

  function handleRead() {
    if (unread) {
      setUnread(false);
    }
    return;
  }

  return (
    <>
      <header className="header">
        <div>
          <h1 hidden>Notifications</h1>
          <h3 className="heading">Notifications</h3>
          <span>{unread ? "3" : "0"}</span>
        </div>
        <a href="#" onClick={handleRead}>
          Mark all as unread
        </a>
      </header>
      <main className="main">
        <div
          className={
            unread
              ? "notifications__container unread"
              : "notifications__container"
          }
        >
          <div className="profile__img">
            <img src={Mark} />
          </div>
          <div className="text">
            <p
              className={
                unread ? "notification__info unread" : "notification__info"
              }
            >
              <a href="#" className="profile__name">
                Mark Webber
              </a>
              reacted to your recent post
              <a href="#" className="post__group">
                My first tournament today!
              </a>
            </p>
            <span className="notification__time">1m ago</span>
          </div>
        </div>
        <div
          className={
            unread
              ? "notifications__container unread"
              : "notifications__container"
          }
        >
          <div className="profile__img">
            <img src={Angela} />
          </div>
          <div className="text">
            <p
              className={
                unread ? "notification__info unread" : "notification__info"
              }
            >
              <a href="#" className="profile__name">
                Angela Gray
              </a>
              followed you
            </p>
            <span className="notification__time">5m ago</span>
          </div>
        </div>
        <div
          className={
            unread
              ? "notifications__container unread"
              : "notifications__container"
          }
        >
          <div className="profile__img">
            <img src={Jacob} alt="" />
          </div>
          <div className="text">
            <p
              className={
                unread ? "notification__info unread" : "notification__info"
              }
            >
              <a href="#" className="profile__name">
                Jacob Thompson
              </a>
              has joined your group
              <a href="#" className="post__group">
                Chess Club
              </a>
            </p>
            <span className="notification__time">1 day ago</span>
          </div>
        </div>
        <div className="notifications__container with__pm">
          <div className="profile__img">
            <img src={Rizky} alt="" />
          </div>
          <div className="text">
            <p className="notification__info">
              <a href="#" className="profile__name">
                Rizky Hasanuddin
              </a>
              sent you a private message
            </p>
            <span className="notification__time">5 days ago</span>
          </div>
          <div className="pm">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </div>
        </div>
        <div className="notifications__container with__img">
          <div className="profile__img">
            <img src={Kimberly} alt="" />
          </div>
          <div className="text">
            <p className="notification__info">
              <a href="#" className="profile__name">
                Kimberly Smith
              </a>
              commented on your picture
            </p>
            <span className="notification__time">1 week ago</span>
          </div>
          <div className="img">
            <img src={Chess} alt="" />
          </div>
        </div>
        <div className="notifications__container">
          <div className="profile__img">
            <img src={Nathan} alt="" />
          </div>
          <div className="text">
            <p className="notification__info">
              <a href="#" className="profile__name">
                Nathan Peterson
              </a>
              reacted to your recent post
              <a href="#" className="post__group">
                5 end-game strategies to increase your win rate
              </a>
            </p>
            <span className="notification__time">2 weeks ago</span>
          </div>
        </div>
        <div className="notifications__container">
          <div className="profile__img">
            <img src={Anna} alt="" />
          </div>
          <div className="text">
            <p className="notification__info">
              <a href="#" className="profile__name">
                Anna Kim
              </a>
              left the group
              <a href="#" className="post__group">
                Chess Club
              </a>
            </p>
            <span className="notification__time">2 weeks ago</span>
          </div>
        </div>
      </main>
      <footer className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io/"
          target="_blank"
          aria-describedby="Frontend Mentor Website"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        Coded by
        <a
          href="https://github.com/Zukizuk"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="Marzuk Entsie's Github profile"
        >
          Zuki
        </a>
      </footer>
    </>
  );
}

export default App;
