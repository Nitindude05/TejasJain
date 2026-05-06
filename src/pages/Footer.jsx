import { socialImgs } from "../constant/constant";

const Footer = () => {
  const leftSocials = socialImgs.filter(s =>
  s.name === "insta" || s.name === "youtube"
);

const centerSocials = socialImgs.filter(s =>
  s.name !== "insta" && s.name !== "youtube"
);
  return (
    <footer className="footer">
      {/* <div className="footer-container"> */}
        
        {/* <div className="flex flex-col justify-center">
          <p>My Creative Handles</p>
        </div> */}
        
        

        <div className="flex w-full items-center justify-start">
  <div className="flex align-item">
    <div className="flex flex-col justify-center">
          <p>My Creative Handles   <br /></p>
        </div>
  <div className="socials">
    {leftSocials.map((socialImg, index) => (
      <a
        key={index}
        href={socialImg.url}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <img src={socialImg.imgPath} alt={socialImg.name} />
      </a>
    ))}
  </div>
  </div>
 

  {/* CENTER (rest) */}
  <div className="socials ml-70">
    {centerSocials.map((socialImg, index) => (
      <a
        key={index}
        href={socialImg.url}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <img src={socialImg.imgPath} alt={socialImg.name} />
      </a>
    ))}
  </div>

</div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
           Reach me at <a href="mailto:workwithtejas9@gmail.com">workwithtejas9@gmail.com</a>
          </p>
          <p className="text-center md:text-end">
            <a href="tel:+917024419962">+91 70244 19962</a>
          </p>
        </div>
        

      {/* </div> */}

    </footer>
    
  );
};

export default Footer;