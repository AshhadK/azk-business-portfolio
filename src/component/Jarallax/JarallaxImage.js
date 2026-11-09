import { Image } from "react-bootstrap";

/**
 * @param {React.ComponentProps<typeof Image>} props
 */

const JarallaxImage = ({ className = "", alt = "", ...props }) => {
  return <Image className={`jarallax-img ${className}`} alt={alt} decoding="async" {...props} />;
};

export default JarallaxImage;
