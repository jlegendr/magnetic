import Img from "../../components/Img";
import CTA from "../../components/CTA";

function Banner(props) {
  const { supTitle, title, text, image, pageLink, ctaTitle } = props;

  return (
    <div className="Banner">
      <Img className="Banner__image" image={image} />
      <div className="Banner__imageMask">
        <div className="Banner__info">
          {title && <div className="title">{title}</div>}
          {text && (
            <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
          )}
          {ctaTitle && <CTA pageLink={pageLink} ctaTitle={ctaTitle} />}
        </div>
      </div>
    </div>
  );
}

export default Banner;
