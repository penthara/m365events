import React from "react";
import {
  Typography,
  Box,
  Paper,
  IconButton
} from "@mui/material";

import LinkedInIcon from "../../../../images/website/linkedin.png";
import TwitterIcon from "../../../../images/website/twitter (2).png";
import "../../style/global.scss";
import "../../style/speaker.scss";

import mslogo from "../../assets/logoIcons/ms.png";
import mvpLogo from "../../assets/logoIcons/mvp.jpg";

const Card = ({
  theme,
  image,
  name,
  designation,
  company,
  linkedIn,
  twitter,
  mvp,
  isMicroSoftEmployee
}) => {

  return (
    <Box className="speaker-card-wrap">
      <Box className="speaker-img-wrap">
        <img src={image} alt={name} loading="lazy" />
      </Box>
      <Box className="speaker-details">
        <Typography variant="h1">
          {name}
        </Typography>
        <Typography className="designation">
          {designation}
        </Typography>
        <Typography className="designation">
          {company}
        </Typography>
      </Box>
      <Box className="speaker-social-icons">
        {mvp && (
          <IconButton href="" target="_blank" aria-label="MVP" disabled>
            <img src={mvpLogo} alt="microsoft-mvp" />
          </IconButton>
        )}
        {isMicroSoftEmployee && (
          <IconButton href="" target="_blank" aria-label="Microsoft" disabled>
            <img src={mslogo} alt="microsoft" />
          </IconButton>
        )}
        {linkedIn && (
          <IconButton href={linkedIn} target="_blank" aria-label="LinkedIn">
            <img src={LinkedInIcon} alt="linkedIn" />
          </IconButton>
        )}
        {twitter && (
          <IconButton href={twitter} target="_blank" aria-label="Twitter">
            <img src={TwitterIcon} alt="twitter" style={{width: '28px'}}/>
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Card;