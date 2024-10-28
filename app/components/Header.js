import InstagramIcon from "@/public/svg/InstagramIcon"
import LinkedInIcon from "@/public/svg/LinkedInIcon"

const Header = () => {
  return (
    <header className="header">
      <div className="header__photo-container photo-wrapper">
        <img
          className="photo-wrapper__img"
          src="/img/personal_photo.png"
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
          <LinkedInIcon className="icons-wrapper__icon" />
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
          <LinkedInIcon className="icons-wrapper__icon" />
        </a>
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <LinkedInIcon className="icons-wrapper__icon" />
        </a>
      </div>
      <div className="header__btn-container btn-wrapper">
        <button className="btn-wrapper__btn">Write me</button>
      </div>
    </header>
  )
}

export default Header
