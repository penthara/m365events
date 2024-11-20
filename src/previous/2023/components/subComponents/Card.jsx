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
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M21.0834 20.4495H17.5274V14.8804C17.5274 13.5525 17.5037 11.8429 15.6779 11.8429C13.8257 11.8429 13.5423 13.2899 13.5423 14.7838V20.4491H9.9864V8.99696H13.4001V10.562H13.4479C13.7896 9.97787 14.2832 9.49732 14.8764 9.17154C15.4695 8.84576 16.1399 8.68697 16.8162 8.71206C20.4204 8.71206 21.0849 11.0828 21.0849 14.167L21.0834 20.4495ZM5.9739 7.43162C4.83418 7.43181 3.91009 6.508 3.9099 5.36828C3.90971 4.22856 4.83343 3.30446 5.97315 3.30428C7.11287 3.304 8.03696 4.22781 8.03715 5.36753C8.03725 5.91484 7.81993 6.43978 7.433 6.82687C7.04607 7.21396 6.52122 7.43149 5.9739 7.43162ZM7.75196 20.4496H4.19218V8.99696H7.75187L7.75196 20.4496ZM22.8562 0.00174674H2.40531C1.43875 -0.00912826 0.64609 0.765153 0.634277 1.73171V22.2679C0.645715 23.235 1.43828 24.01 2.40521 23.9999H22.8562C23.8252 24.0119 24.6209 23.2368 24.6343 22.2679V1.73012C24.6205 0.761684 23.8247 -0.0125033 22.8562 0.00015299" fill="#317CCF"/>
</svg>
          </IconButton>
        )}
        {twitter && (
          <IconButton href={twitter} target="_blank" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
  <path d="M27.7608 2.82353C26.7697 3.31765 25.7014 3.64235 24.5945 3.79765C25.7271 3.04941 26.6024 1.86353 27.0143 0.437647C25.946 1.14353 24.7618 1.63765 23.5133 1.92C22.4964 0.705883 21.0677 0 19.4459 0C16.4212 0 13.9499 2.71059 13.9499 6.05647C13.9499 6.53647 14.0014 7.00235 14.0915 7.44C9.50926 7.18588 5.42905 4.77176 2.7132 1.11529C2.23696 2.00471 1.96666 3.04941 1.96666 4.15059C1.96666 6.25412 2.93201 8.11765 4.42509 9.17647C3.51122 9.17647 2.66171 8.89412 1.91518 8.47059V8.51294C1.91518 11.4494 3.82013 13.9059 6.34292 14.4565C5.5331 14.7006 4.68256 14.7345 3.85875 14.5553C4.20834 15.7588 4.89301 16.8119 5.8165 17.5665C6.73999 18.3211 7.85587 18.7393 9.00728 18.7624C7.05556 20.4572 4.63619 21.3733 2.14686 21.36C1.70924 21.36 1.27161 21.3318 0.833984 21.2753C3.27954 22.9976 6.18846 24 9.30332 24C19.4459 24 25.0192 14.7671 25.0192 6.76235C25.0192 6.49412 25.0192 6.24 25.0063 5.97176C26.0875 5.12471 27.0143 4.05176 27.7608 2.82353Z" fill="#2A90C2"/>
</svg>
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Card;