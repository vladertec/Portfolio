import LocationIcon from "@/public/svg/LocationIcon"
import MailIcon from "@/public/svg/MailIcon"
import PhoneIcon from "@/public/svg/PhoneIcon"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__text-container intro-wrapper">
        <h2 className="intro-wrapper__title">HELLO</h2>
        <p className="intro-wrapper__name">I'm Vladyslav, Web Developer</p>
        <p className="intro-wrapper__information">
          I craft elegant solutions to complex problems, and I gives me
          pleasure. I'm living in Berlin with my loving wife and cute daughter.
        </p>
      </div>

      <div className="intro__info-container info-wrapper">
        <div className="info-wrapper__block">
          <PhoneIcon className="info-wrapper__icon" />
          <p className="info-wrapper__text">+46 70-063 81 43</p>
        </div>
        <div className="info-wrapper__block">
          <LocationIcon className="info-wrapper__icon" />
          <p className="info-wrapper__text">Stockholm, Sweden</p>
        </div>
        <div className="info-wrapper__block">
          <MailIcon className="info-wrapper__icon" />
          <p className="info-wrapper__text">sarnavsk2001@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Intro
