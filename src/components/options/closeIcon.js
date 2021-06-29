import * as React from "react";

function CloseIcon({ handleClick }) {
  return (
    <div className={"close-icon"} onClick={() => handleClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.3 41.3">
        <path d="M37.6 41.3c-1 0-1.9-.4-2.6-1.1L20.6 25.8 6.3 40.2c-1.4 1.4-3.7 1.4-5.2 0s-1.4-3.7 0-5.2l14.4-14.4L1.1 6.3c-1.4-1.4-1.4-3.7 0-5.2s3.7-1.4 5.2 0l14.4 14.4L35 1.1c1.4-1.4 3.7-1.4 5.2 0 1.4 1.4 1.4 3.7 0 5.2L25.8 20.6 40.2 35c1.4 1.4 1.4 3.7 0 5.2-.7.7-1.6 1.1-2.6 1.1z" />
      </svg>
    </div>
  );
}

export default CloseIcon;
