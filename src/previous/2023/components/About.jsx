import { Typography, Box, Button } from "@mui/material";
import "../style/about.scss";
import "../style/global.scss";
import aboutData from "../store/dec2023/about.json";
import homeData from "../store/dec2023/home.json";

const About = ({ theme }) => {
  return (
    <>
      <div className="about">
        <Box
          className="sectionMaxWidth"
          sx={{
            width: {
              xs: "95%",
              mmb: "90%",
            },
          }}
        >
          <Box className="aboutHeadingBox">
            <Typography
              className="text-uppercase text-center aboutHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              About
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBlock: "3rem",
              margin: "auto",
            }}
          >
            <Typography
              className="text-capitalize text-center aboutHeadingText"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  mmb: theme.fontSize.aboutHeadingText,
                },
              }}
            >
              A One Day Event Focusing On The{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    mmb: theme.fontSize.aboutHeadingText,
                  },
                  display: "inline",
                  color: theme.colors.text.lightGreen,
                }}
              >
              </Typography>{" "}
              Microsoft 365
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                md: "90%",
              },
              margin: "auto",
              paddingBottom: "2.5rem",
            }}
          >
            <Typography
              className="text-center aboutSubheadingText"
              sx={{
                fontSize: {
                  xs: "2rem",
                  mmb: theme.fontSize.aboutSubheadingText,
                },
              }}
            >
              {/* M365 SATURDAY BANGALORE 2024 is a one day event organized by the {" "} */}
              <a
                href={aboutData.communityLink}
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      mmb: theme.fontSize.aboutSubheadingText,
                    },
                    display: "inline",
                    color: theme.colors.text.lightGreen,
                    textDecoration: "underline",
                  }}
                >
                  {/* Microsoft 365 Saturday Bangalore User group.{" "} */}
                </Typography>
              </a>
              This M365 Saturday Bangalore is a free community‐focused technology event dedicated to educating and engaging members of the local technical community. With the expansion of the Microsoft 365 platform, the event now draws upon the expertise of IT professionals, developers and solutions architects who come together to share their real-world experiences, lessons learned, best practices, and general knowledge with other like‐minded individuals.
                These individuals bring invaluable experience and lessons across the broad suite of services Microsoft offers like: Copilot, SharePoint, Microsoft Teams, Microsoft Viva, Power Platform, and other M365 applications.
                

              <br /> <br />
              {/* The ultimate goal of this one-day virtual event is to cover all
              the aspects of the Microsoft Cloud Security services. In this
              one-day virtual event we will deep-dive into Microsoft's Cloud
              Security stack with hands-on sessions and labs, delivered to you
              by industry experts, Microsoft MVP's and RD's, Microsoft employees
              and community leaders from different parts of the world. */}
            </Typography>
          </Box>
        </Box>
      </div>
      <Box
        sx={{
          paddingBlock: "2rem",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        {/* <Button
          className="aboutButton"
          href={homeData.eventRegLink}
          target={homeData.eventRegLink[0] == "#" ? "_self" : "_blank"}
          sx={{
            color: "#fff",
            fontSize: theme.fontSize.eventButton,
            background: theme.colors.bg.lightButton,
            marginbottom: '5rem',
            scale: {
              xs: "0.7",
              mmb: "1.2",
            },
          }}
          alt="Register Now"
          aria-label="Register Now"
          variant="contained"
        >
          {homeData.eventButton}
        </Button> */}
      </Box>
    </>
  );
};
export default About;
