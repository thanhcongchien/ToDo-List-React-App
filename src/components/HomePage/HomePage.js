import React from "react";
import WorkPlace from "../HomePage/WorkPlace/WorkPlace";
import store from "store";
import history from "../../history/history";

const isLoggedIn = store.get("isLoggedIn");

const homePage = () => {
  if (isLoggedIn === false) {
    return history.push("/account");
  }
  return (
    <div className="HomePage">
      <WorkPlace />
    </div>
  );
};

export default homePage;
