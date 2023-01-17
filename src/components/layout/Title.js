import { useState } from "react";
import { Link } from "react-router-dom";
import { Constants } from "../Constants";

export default () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const allConstants = Constants();
  const allLinks = allConstants.allLinks;

  return (
    <div className="title">
      <span>
        {allLinks.map((link, index) => {
          const linkStyle =
            index === activeLinkIndex ? "link-item active-link" : "link-item";
          return (
            <Link
              key={index}
              to={link.to}
              className={linkStyle}
              onClick={() => setActiveLinkIndex(index)}
            >
              {link.name}
            </Link>
          );
        })}
      </span>
    </div>
  );
};
