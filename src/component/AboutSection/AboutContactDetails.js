import { contactInfo } from "../../data/aboutSection";
import { React } from "react";
import { Link } from "react-router-dom"
import { Image } from "react-bootstrap";

const AboutContactDetails = () => {
  return (
    <section className="contact-body">
      <div className="contact-wrapper">
        {contactInfo.map(({ image, label, link, value }, index) => (
          <div key={index} className="contact-card">
            <Link href={link}>
              <Image src={image} alt={label} loading="lazy" decoding="async" />
            </Link>

            {/* <div className="contact-label">{label}</div> */}
            <div className="contact-value">
              <span >{value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutContactDetails;
