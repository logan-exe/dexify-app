import React from "react";
import "./Main.css";
import herobg from "./assets/herobg.png";
import logo from "./assets/logo.png";
import laptop from "./assets/laptop.png";
import fone from "./assets/fone.png";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/icons/FiberManualRecord";
import dot from "./assets/dot.png";
import line from "./assets/line.png";
import insta from "./assets/instaf.png";
import discord from "./assets/discordf.png";
import twitter from "./assets/twitterf.png";
import reddit from "./assets/redditf.png";
import tiktok from "./assets/tiktokf.png";
import telegram from "./assets/telegramf.png";
import instahome from "./assets/insta.png";
import reddithome from "./assets/reddit (2).png";
import telegramhome from "./assets/telegram (2).png";
import tiktokhome from "./assets/tiktok2.png";
import twitterhome from "./assets/twitter (2).png";
import discordhome from "./assets/discord (2).png";
import people from "./assets/people.png";
import badge from "./assets/badge.png";
import settings from "./assets/settings.png";
import thunder from "./assets/thunder.png";
import stack from "./assets/stack.png";
import fuel from "./assets/fuel.png";
import roadmap from "./assets/roadmap.png";
import footerbg from "./assets/footer-bg.png";

// function Example(props) {
//   var items = [
//     {
//       name: "Random Name #1",
//       description: "Probably the most random thing you have ever seen!",
//     },
//     {
//       name: "Random Name #2",
//       description: "Hello World!",
//     },
//   ];

//   return (
//     <Carousel>
//       {items.map((item, i) => (
//         <Item key={i} item={item} />
//       ))}
//     </Carousel>
//   );
// }

// function Item(props) {
//   console.log(props);
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>

//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   );
// }

function Main() {
  var items = [
    {
      name: "May/June 2021",
      description:
        "Users pay a base entry fee to enter a Dexfund which we split with the Dexfund Manager. Dexfund managers also gain % of the profits the Dexfund investors gain.",
    },
    {
      name: "June 2021",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "July- 2021",
      description:
        "Onboard more blockchains, increase exchange listings, improve UI from beta feedback, create Dexify’s own Defi indexfunds with own LP.",
    },
    {
      name: "2021",
      description:
        "V2 of the platform launch, cross chain mirroring live onboarding Tron,Polkastarter, Solana etc. Increase number of features. Scope to add more features to the platform such as NFT marketplace, staking and farming rewards, lottery and more. ",
    },
    {
      name: "2021",
      description:
        " Increase LP’s used to grow the volume inflow to the platform, increase market outreach to Africa,ASIA and USA.",
    },
  ];
  return (
    <div className="main-wrapper">
      <div className="hero-section">
        <center>
          <div className="nav-section">
            <div className="logo">
              <img
                src={logo}
                alt="no img"
                style={{ width: "100px", height: "80px" }}
              />
            </div>
            <div className="demo">UX-Demo</div>
          </div>
        </center>
        <div className="lap">
          <img
            src={laptop}
            alt="no img"
            style={{ width: "760px", height: "650px" }}
          />
        </div>
        <div className="headers">
          <div>
            <div
              style={{
                color: "#C8C8C8",
                fontSize: "78px",
                fontFamily: "Anton",
                lineHeight: "100px",
              }}
            >
              <span style={{ color: "#CB6CE6" }}>CrossChain</span>
              <span> Decentralised </span>
              <br />
              <span> Social Trading Platform</span>
            </div>
            <div
              style={{
                color: "#A7A7A7",
                fontSize: "24px",
                fontFamily: "PT Sans Narrow",
                marginTop: "20px",
              }}
            >
              {" "}
              Revolutionising asset management.
            </div>
          </div>
          <div className="white-paper">White paper</div>
        </div>
        <div className="phone-header">
          <center>
            <p>
              <span style={{ color: "#CB6CE6" }}>CrossChain</span>
              <span> Decentralised </span>
              <br />
              <span> Social Trading Platform</span>
            </p>
          </center>
        </div>
        <center>
          <div className="white-paper-phone">White paper</div>
        </center>
        <div style={{ width: "100%", height: "100%" }}>
          <div className="links">
            <a href="https://instagram.com/dexifyhq" target="blank">
              <img
                src={instahome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>

            <a href="https://www.reddit.com/r/DEXIFYHQ" target="blank">
              <img
                src={reddithome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://t.me/DEXIFYHQ" target="blank">
              <img
                src={telegramhome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://discord.gg/hvhEvNU3" target="blank">
              <img
                src={discordhome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://twitter.com/dexifyhq" target="blank">
              <img
                src={twitterhome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://vm.tiktok.com/ZMesbhcmS/" target="blank">
              <img
                src={tiktokhome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="feature-heading">
          {" "}
          <center>
            {" "}
            <span style={{ color: "#CB6CE6"}}>Dexify </span>features
          </center>
        </div>

        <div className="feature-content">
          <div className="feature-left">
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={fone}
                  alt="no"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head">Smart Mirror Contracts</div>
                <div className="feature-point-para">Automated Smart Mirror Contracts called Dexfund ran by Dexfund Managers </div>
              </div>
            </div>
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={people}
                  alt="no"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head">
                DXFY Token{" "}
                </div>
                <div className="feature-point-para">
                $DXFY Token the ecosystem of the project. Pay's fees, rewards Dexfund managers and gives access to better Dexfunds.{" "}
                </div>
              </div>
            </div>
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={people}
                  alt="no"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head">Dexfund Manager</div>
                <div className="feature-point-para">
Users pay a base entry fee to enter a Dexfund which we split with the Dexfund Manager. Dexfund managers also gain % of the profits the Dexfund investors gain.</div>
              </div>
            </div>
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={badge}
                  alt="no"
                  style={{ width: "40px", height: "50px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head">user experience</div>
                <div className="feature-point-para">
 Revolutionary intuitive trading interface to make Defi user experience much easier from start to finish. </div>
              </div>
            </div>
          </div>
          <div className="feature-right">
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={settings}
                  alt="no"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head">Asset management industry </div>
                <div className="feature-point-para">Revolutionising the asset management industry as all transactions on blockchain are now visible. Trustworthy, asset management with no barriers to entry. </div>
              </div>
            </div>
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={thunder}
                  alt="no"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head" >Risk Score</div>
                <div className="feature-point-para">Each Dexfund has a Risk Score, PnL, number of users and time of creation.</div>
              </div>
            </div>
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={fuel}
                  alt="no"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head">Save gas fees</div>
                <div className="feature-point-para">Reduced Gas fees due to pooling of investments, heklping the environment</div>
              </div>
            </div>
            <div className="each-feature">
              <div className="feature-img-div">
                <img
                  src={stack}
                  alt="no"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="feature-point">
                <div className="feature-point-head">Cross Chain platform</div>
                <div className="feature-point-para">Cross Chain platform meaning complete access to a huge variety of tokens and projects for optimal gains.</div>
              </div>
            </div>
          </div>
        </div>
      </div>  <center className="big-road" style={{ display:"flex", justifyContent:"center", width:"100vw",  marginBottom:"100px"}}>
          <div className="feature-heading" style={{ color:"white", zIndex:"100", position:"absolute", paddingTop:"0px"}}>
          <span style={{ color: "#CB6CE6" }}>   Road</span> Map
          </div>
        </center>
      <div className="roadmap">
      <center>
          <div className="feature-heading" style={{ marginBottom: "40px" }}>
          <span style={{ color: "#CB6CE6" }}>  Road</span> Map
          </div>
        </center>
        <img
          src={line}
          alt="no"
          style={{
            height: "2px",
            position: "absolute",
            marginTop: "15px",
            width: "100%",
          }}
        />

        <Carousel
          navButtonsAlwaysVisible={true}
          style={{ dispplay: "flex", justifyContent: "center" }}
        >
          {items.map((item, i) => (
            <center>
              <div key={i} style={{ width: "400px", height: "400px" }}>
                <img
                  src={dot}
                  alt="no "
                  style={{ width: "40px", height: "40px" }}
                />
                <div
                  style={{ color: "white", fontSize: "40px", width: "150px", fontFamily:"gemunu"}}
                >
                  {item.name}
                </div>
                <div style={{ color: "white", width: "200px" ,fontSize: "15px", fontFamily:"gemunulight", color:"grey"}}>
                  {item.description}
                </div>
              </div>
            </center>
          ))}
        </Carousel>
      </div>
      <div className="footer-section">
      <img
        className="road-map-image"
        src={roadmap}
        alt="no"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div className="community" style={{ marginTop: "80px" }}>
        <center>
          <div style={{ color: "white", fontSize: "40px", fontFamily: "gemunu"}}>
            Join our community to get
          </div>
          <div style={{ color: "#cb6ce6", fontSize: "40px", fontFamily: "gemunu"}}>
            {" "}
            Advance booking and discounts
          </div>
          <div className="subscribe">
            <input
              type="text"
              style={{
                width: "280px",
                height: "30px",
                padding: "8px",
                textDecoration: "none",
              }}
              placeholder="enter email address"
            />
            <div
              style={{
                height: "33px",
                background: "#cb6ce6",
                color: "white",
                padding: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="sub-but"
            >
              Subscribe now
            </div>
          </div>
        </center>
      </div>
      <div className="footer" style={{ color: "white", marginTop: "160px" }}>
        <center
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          <div style={{fontFamily: "gemunu"}}>
            The <span style={{ color: "#cb6ce6", fontFamily: "gemunu"}}>Dexify</span> Community
          </div>
        </center>
        <center
          style={{ marginTop: "40px", fontSize: "18px", padding: "20px" }}
        >
          {" "}
          <div style={{fontFamily: "gemunulight", color:"grey"}}>
            Learn more about Alphr, chat with our team, others in the community
            and have your say in the shaping of the Alphr platform.
          </div>
        </center>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <div className="social">
            <a href="https://instagram.com/dexifyhq" target="blank">
              <img
                src={insta}
                alt="no"
                style={{ width: "110px", height: "120px", padding: "8px" }}
              />
            </a>
            <a href="https://www.reddit.com/r/DEXIFYHQ" target="blank">
              <img
                src={reddit}
                alt="no"
                style={{ width: "110px", height: "120px", padding: "8px" }}
              />
            </a>
            <a href="https://twitter.com/dexifyhq" target="blank">
              <img
                src={twitter}
                alt="no"
                style={{ width: "110px", height: "120px", padding: "8px" }}
              />
            </a>
            <a href="https://vm.tiktok.com/ZMesbhcmS/" target="blank">
              <img
                src={tiktok}
                alt="no"
                style={{ width: "110px", height: "120px", padding: "8px" }}
              />
            </a>
            <a href="https://discord.gg/hvhEvNU3" target="blank">
              <img
                src={discord}
                alt="no"
                style={{ width: "110px", height: "120px", padding: "8px" }}
              />
            </a>

            <a href="https://t.me/DEXIFYHQ" target="blank">
              <img
                src={telegram}
                alt="no"
                style={{ width: "110px", height: "120px", padding: "8px" }}
              />
            </a>
          </div>
        </div>
      </div>
      </div>
      <center>
        <div style={{fontFamily: "gemunulight", color:"grey", paddingBottom:"50px"}}>
          &copy; Alphr finance. All rights reserved.
        </div>
      </center>
    </div>
  );
}

export default Main;
