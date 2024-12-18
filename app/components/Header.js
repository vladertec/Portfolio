import GitHubIcon from "@/public/svg/GitHubIcon"
import InstagramIcon from "@/public/svg/InstagramIcon"
import LinkedInIcon from "@/public/svg/LinkedInIcon"
import TelegramIcon from "@/public/svg/TelegramIcon"
import Link from "next/link";

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
          href="https://t.me/vladertec"
        >
          <TelegramIcon className="icons-wrapper__icon" />
        </a>
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/vladertec/"
        >
          <LinkedInIcon className="icons-wrapper__icon" />
        </a>
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/vladertec/"
        >
          <InstagramIcon className="icons-wrapper__icon" />
        </a>
        <a
          className="icons-wrapper__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/vladertec"
        >
          <GitHubIcon className="icons-wrapper__icon" />
        </a>
      </div>
      <div className="header__btn-container btn-wrapper">
        <Link href="/contact">
          <button className="btn-wrapper__btn">TEXT ME</button>
        </Link>
      </div>
    </header>
  )
}

export default Header
