import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <h1 className="titleHover">Skills</h1>

      <div className="container">
        <div className="card2">
          <div
            className="head"
            style={{ width: "90%", margin: "auto", marginBottom: "35px" }}
          >
            All tags
          </div>
          <div className="card__tags">
            <ul className="tag">
              <li className="tag__name">Javascript</li>
              <li className="tag__name">Anaconda</li>
              <li className="tag__name">Python</li>
              <li className="tag__name">Css</li>
              <li className="tag__name">Html</li>
              <li className="tag__name">React</li>
              <li className="tag__name">Django</li>
              <li className="tag__name">UI/UX</li>
              <li className="tag__name">Figma</li>
              <li className="tag__name">MySQL</li>
              <li className="tag__name">W3school</li>
              <li className="tag__name">Git Hub</li>
              <li className="tag__name">Blobmaker</li>
              <li className="tag__name">Bootstrap</li>
              <li className="tag__name">Tailwind</li>
              <li className="tag__name">Glassmorphism</li>
              <li className="tag__name">Vanilla Tilt</li>
              <li className="tag__name">Chat GPT</li>
              <li className="tag__name">Blackbox Ai Code</li>
              <li className="tag__name">Box Shadow</li>
              <li className="tag__name">AOS</li>
              <li className="tag__name">LeetCode</li>
              <li className="tag__name">CodePen</li>
              <li className="tag__name">Vim</li>
              <li className="tag__name">Glassmorphism</li>
              <li className="tag__name">wordpress</li>
              <li className="tag__name">uiverse</li>
              <li className="tag__name">wikipedia</li>
              <li className="tag__name">10web</li>
              <li className="tag__name">Pinterest</li>
              <li className="tag__name">java</li>
              <li className="tag__name">backend</li>
              <li className="tag__name">vscode</li>
              <li className="tag__name">stack overflow</li>
              <li className="tag__name">playcode</li>
              <li className="tag__name">bocicon</li>
              <li className="tag__name">node.js</li>
              <li className="tag__name">xampp</li>
              <li className="tag__name">atom</li>
              <li className="tag__name">Sublime Text</li>
              <li className="tag__name">Notepad++</li>
              <li className="tag__name">angular</li>
              <li className="tag__name">next.js</li>
              <li className="tag__name">pnglogo</li>
              <li className="tag__name">pngtree</li>
              <li className="tag__name">colorzilla</li>
            </ul>
          </div>
        </div>

        <div className="card card__tags">
          <div
            className="head"
            style={{
              width: "90%",
              marginBottom: "30px",
              margin: "auto",
            }}
          >
            My Skills
          </div>
          <div className="body">
            <div className="skill">
              <div className="skill-name">HTML</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "40%" }}></div>
              </div>
              <div className="skill-percent-number">40%</div>
            </div>
            <div className="skill">
              <div className="skill-name">CSS</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "40%" }}></div>
              </div>
              <div className="skill-percent-number">40%</div>
            </div>
            <div className="skill">
              <div className="skill-name">JavaScript</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "35%" }}></div>
              </div>
              <div className="skill-percent-number">35%</div>
            </div>
            <div className="skill">
              <div className="skill-name">React</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "25%" }}></div>
              </div>
              <div className="skill-percent-number">25%</div>
            </div>
            <div className="skill">
              <div className="skill-name">python</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "44%" }}></div>
              </div>
              <div className="skill-percent-number">44%</div>
            </div>
            <div className="skill">
              <div className="skill-name">Figma</div>
              <div className="skill-level">
                <div className="skill-percent" style={{ width: "40%" }}></div>
              </div>
              <div className="skill-percent-number">40%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
