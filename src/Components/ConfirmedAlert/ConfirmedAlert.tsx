import { useEffect, useState } from "react";
import { reservation } from "../../types";
import Styles from "./ConfirmationAlert.module.scss";

const ConfirmationAlert = ({ userData }: { userData: reservation }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`${Styles.confirmation} ${
        isVisible ? Styles.show : Styles.hide
      }`}
      data-testId="confirmation message"
    >
      <h2>Saved</h2>
      <div className={Styles.userContainer}>
        <div>
          <p className={Styles.userName}>Hi, {userData.name} !</p>
          <p className={Styles.date}>{userData.date}</p>
        </div>
        <p className={Styles.personalMsg}>
          Your reservation for {userData.dinners}{" "}
          {userData.dinners === "1" ? "person" : "people"} will be ready, and we
          will be happy to make{" "}
          {userData.ocassion ? `the ${userData.ocassion}` : "it "} a very
          special ocassion.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationAlert;
