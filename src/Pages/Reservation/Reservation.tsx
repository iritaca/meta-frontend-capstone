import React from "react";

import Styles from "./Reservation.module.scss";
import ReserveTable from "../../Components/SidePanel/ReserveATable";

const Reservation = () => {
  return (
    <div className={Styles.reservationWrapper}>
      <h2 className={Styles.reservationTitle}>Reserve a table</h2>

      <ReserveTable
        onCancel={() => {}}
        onSave={() => {}}
        className={Styles.form}
      />
    </div>
  );
};

export default Reservation;
