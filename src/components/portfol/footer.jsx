import React from "react";
import "/src/components/portfol/Contact.css";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import "/src/components/portfol/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="fff" style={{ fontWeight: "bold" }}>
          <li>A.Enkhtvwshin</li>
          <li>Asvmi Mameko</li>
          <li>99349982</li>
          <li>2023/12/8</li>
        </ul>
        <div
          style={{ lineHeight: "40px", marginTop: "10px", fontWeight: "bold" }}
        >
          <div>
            <FaReact />
            React
          </div>

          <div>
            <FaHtml5 /> Html
          </div>
          <div>
            <BiSolidFileCss />
            Css
          </div>
        </div>

        <div
          style={{ lineHeight: "40px", marginTop: "30px", fontWeight: "bold" }}
        >
          <div>Vite.js</div>
          <div>Youtube</div>
          <div>Uiverse</div>
          <div>Gradent</div>
        </div>
      </div>
      <div style={{height:"45px", padding:"10px" ,textAlign:"center", color:"#fff"}}>copyrigth @asvmimameko</div>
    </>
  );
};

export default Footer;
