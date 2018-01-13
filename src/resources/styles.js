import React from "react";

export const topShadowStyle = {
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.08)",
  zIndex: 10,
};
export const bottomShadowStyle = {
  boxShadow: "0 -2px 4px 0 rgba(0,0,0,0.08)",
  zIndex: 10,
};

export const Spacer = props => (
  <div style={{ ...props.style, ...props, flexShrink: 1 }}>
    <br />
  </div>
);

export const fixedDiv = {
  appParentStyle: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    margin: "0",
    alignItems: "center",
    justifyContent: "center",
  },
  contentParentStyle: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentStyle: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
  },
  fixedBottomStyle: {
    position: "fixed",
    bottom: 0,
  },
  centerContentStyle: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
