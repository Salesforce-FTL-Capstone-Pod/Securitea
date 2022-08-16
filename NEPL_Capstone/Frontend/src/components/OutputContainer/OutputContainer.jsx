import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const OutputContainer = ({ audioElementRef }) => {
  return (
    <>
      <audio hidden className="audio-output" controls ref={audioElementRef}>
        Your browser does not support the <code>audio</code> element :(
      </audio>
    </>
  );
};

OutputContainer.propTypes = {
  audioElementRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

OutputContainer.defaultProps = {
  audioElementRef: null,
};

export default OutputContainer;
