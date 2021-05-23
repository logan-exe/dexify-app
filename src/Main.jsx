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
import insta from "./assets/insta.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";
import reddit from "./assets/reddit.png";
import tiktok from "./assets/tiktok.png";
import telegram from "./assets/telegram.png";
import instahome from "./assets/instagram.png";
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

            <a href="https://instagram.com/dexifyhq" target="blank">
              <img
                src={reddithome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://instagram.com/dexifyhq" target="blank">
              <img
                src={telegramhome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://instagram.com/dexifyhq" target="blank">
              <img
                src={discordhome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://instagram.com/dexifyhq" target="blank">
              <img
                src={twitterhome}
                alt="no"
                style={{ width: "40px", height: "40px", padding: "8px" }}
              />
            </a>
            <a href="https://instagram.com/dexifyhq" target="blank">
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
            <span style={{ color: "#CB6CE6" }}>Dexify </span>features
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
                <div className="feature-point-head">this is heading</div>
                <div className="feature-point-para">this is heading </div>
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
                  Asset management industry{" "}
                </div>
                <div className="feature-point-para">
                  Revolutionising the asset management industry as all
                  transactions on blockchain are now visible. Trustworthy, asset
                  management with no barriers to entry.{" "}
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
                <div className="feature-point-head">this is heading</div>
                <div className="feature-point-para">this is heading</div>
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
                <div className="feature-point-head">this is heading</div>
                <div className="feature-point-para">this is paragraph</div>
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
                <div className="feature-point-head">this is heading</div>
                <div className="feature-point-para">this is paragraph</div>
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
                <div className="feature-point-head">this is heading</div>
                <div className="feature-point-para">this is paragraph</div>
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
                <div className="feature-point-head">this is heading</div>
                <div className="feature-point-para">this is paragraph</div>
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
                <div className="feature-point-head">this is heading</div>
                <div className="feature-point-para">this is paragraph</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap">
        <center>
          <div className="feature-heading" style={{ marginBottom: "40px" }}>
            Road Map
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
                  style={{ color: "white", fontSize: "40px", width: "150px" }}
                >
                  {item.name}
                </div>
                <div style={{ color: "white", width: "200px" }}>
                  {item.description}
                </div>
              </div>
            </center>
          ))}
        </Carousel>
      </div>
      <img
        className="road-map-image"
        src={roadmap}
        alt="no"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div className="community" style={{ marginTop: "80px" }}>
        <center>
          <div style={{ color: "white", fontSize: "40px" }}>
            Join our community to get
          </div>
          <div style={{ color: "#cb6ce6", fontSize: "40px" }}>
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
      <div className="footer" style={{ color: "white", marginTop: "60px" }}>
        <center
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          <div>
            The <span style={{ color: "#cb6ce6" }}>Dexify</span> Community
          </div>
        </center>
        <center
          style={{ marginTop: "40px", fontSize: "18px", padding: "20px" }}
        >
          {" "}
          <div>
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
                style={{ width: "80px", height: "80px", padding: "8px" }}
              />
            </a>
            <a href="https://www.reddit.com/r/DEXIFYHQ" target="blank">
              <img
                src={reddit}
                alt="no"
                style={{ width: "80px", height: "80px", padding: "8px" }}
              />
            </a>
            <a href="https://twitter.com/dexifyhq" target="blank">
              <img
                src={twitter}
                alt="no"
                style={{ width: "80px", height: "80px", padding: "8px" }}
              />
            </a>
            <a href="https://vm.tiktok.com/ZMesbhcmS/" target="blank">
              <img
                src={tiktok}
                alt="no"
                style={{ width: "80px", height: "80px", padding: "8px" }}
              />
            </a>
            <a href="https://discord.gg/hvhEvNU3" target="blank">
              <img
                src={discord}
                alt="no"
                style={{ width: "80px", height: "80px", padding: "8px" }}
              />
            </a>

            <a href="https://t.me/DEXIFYHQ" target="blank">
              <img
                src={telegram}
                alt="no"
                style={{ width: "80px", height: "80px", padding: "8px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <center>
        <div style={{ color: "white" }}>
          &copy; Alphr finance. All rights reserved.
        </div>
      </center>
    </div>
  );
}

export default Main;
