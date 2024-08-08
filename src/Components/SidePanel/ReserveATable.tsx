import React, { useState } from "react";
import Styles from "./ReserveTable.module.scss";
import { FormInput, FormSelect } from "../Form/FormElements";
import Button from "../Button/Button";

interface FormProps {
  onCancel: () => void;
  onSave: () => void;
}

const Alert = () => {
  return <div className={Styles.alert}>Saved</div>;
};

const ReserveTable = ({ onCancel, onSave }: FormProps) => {
  const [dataSent, setDataSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    seatOptions: "",
    dinners: "1",
    ocassion: "",
    date: "",
    time: "",
    comments: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    // Display an alert when all the required elements in the form are filled
    setDataSent(true);
    onSave?.();
  };

  const saveIsDisabled = formData.name === "" || formData.email === "";
  return (
    <>
      <form onSubmit={handleSubmit} className={Styles.formContainer}>
        <FormInput
          label="Name"
          isRequired
          inputId="name"
          onChange={handleChange}
          value={formData.name}
        />
        <FormInput
          label="Email"
          isRequired
          inputId="email"
          onChange={handleChange}
          value={formData.email}
        />
        <div className={Styles.halfSpace}>
          <FormInput label="Seating options" inputId="seatOptions">
            <FormSelect
              id="seatOptions"
              onChange={handleChange}
              value={formData.seatOptions}
              options={["--", "indoor", "outdoor"]}
            />
          </FormInput>
          <FormInput
            label="Number of dinners"
            inputId="dinners"
            onChange={handleChange}
            value={formData.dinners}
            type="number"
          />
        </div>
        <FormInput label="Special ocassion" inputId="ocassion">
          <FormSelect
            id="ocassion"
            onChange={handleChange}
            value={formData.ocassion}
            options={["--", "Birthday", "Anniversary"]}
          />
        </FormInput>
        <div className={Styles.halfSpace}>
          <FormInput label="Select a date" inputId="date">
            <input
              id="date"
              type="date"
              className={Styles.input}
              onChange={handleChange}
              value={formData.date}
              name="date"
            />
          </FormInput>
          <FormInput label="Choose time" inputId="time">
            <FormSelect
              id="time"
              onChange={handleChange}
              value={formData.time}
              options={[
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
              ]}
            />
          </FormInput>
        </div>
        <FormInput label="Additional comments" inputId="comments">
          <textarea
            className={Styles.textArea}
            onChange={handleChange}
            value={formData.comments}
          ></textarea>
        </FormInput>

        <div className={Styles.buttonsContainer}>
          <Button variant="secondary" onClick={onCancel} size="small">
            cancel
          </Button>
          <Button size="small" type="submit" disabled={saveIsDisabled}>
            save
          </Button>
        </div>
      </form>
      {dataSent && <Alert />}
    </>
  );
};

export default ReserveTable;
