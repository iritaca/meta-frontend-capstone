import React from "react";

import Styles from "./Reservation.module.scss";
import ReserveTable from "../../Components/SidePanel/ReserveATable";

const Reservation = () => {
  // @Dev - fill the next functions
  return (
    <div className={Styles.reservationWrapper}>
      <ReserveTable onCancel={() => {}} onSave={() => {}} />
    </div>
  );
};

export default Reservation;
