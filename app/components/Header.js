import GitHubIcon from "@/public/svg/GitHubIcon"
import InstagramIcon from "@/public/svg/InstagramIcon"
import LinkedInIcon from "@/public/svg/LinkedInIcon"
import TelegramIcon from "@/public/svg/TelegramIcon"

const Header = () => {
  return (
    <header className="header">
      <div className="header__photo-container photo-wrapper">
        <img
          className="photo-wrapper__img"
          src="/img/personal_photo.jpg"
          alt="Personal Photo"
        />
      </div>
      <div className="header__icons-container icons-wrapper">
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <TelegramIcon className="icons-wrapper__icon" />
        </a>
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <LinkedInIcon className="icons-wrapper__icon" />
        </a>
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <InstagramIcon className="icons-wrapper__icon" />
        </a>
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <GitHubIcon className="icons-wrapper__icon" />
        </a>
      </div>
      <div className="header__btn-container btn-wrapper">
        <button className="btn-wrapper__btn">Write me</button>
      </div>
    </header>
  )
}

export default Header
