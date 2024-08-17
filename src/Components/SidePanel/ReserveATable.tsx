import React, { useState } from "react";
import Styles from "./ReserveTable.module.scss";
import { FormInput, FormSelect } from "../Form/FormElements";
import Button from "../Button/Button";
import ConfirmationAlert from "../ConfirmedAlert/ConfirmedAlert";
import { reservation } from "../../types";

interface FormProps {
  onCancel: () => void;
  onSave: () => void;
}

const ReserveTable = ({ onCancel, onSave }: FormProps) => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [formData, setFormData] = useState<reservation>({
    name: "",
    email: "",
    seatOptions: "",
    dinners: "1",
    ocassion: "",
    date: "",
    time: "16:00",
    comments: "",
  });

  const saveIsDisabled =
    formData.name === "" || formData.email === "" || formData.date === "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (saveIsDisabled) return;
    setSubmitSuccess(true);

    onSave?.();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
          <FormInput
            label="Select a date"
            inputId="date"
            type="date"
            onChange={handleChange}
            value={formData.date}
            isRequired
          />

          <FormSelect
            id="time"
            label="Choose time"
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
            isRequired
          />
        </div>

        <div className={Styles.halfSpace}>
          <FormSelect
            id="seatOptions"
            label="Seating options"
            onChange={handleChange}
            value={formData.seatOptions}
            options={["--", "indoor", "outdoor"]}
          />

          <FormInput
            label="Number of dinners"
            inputId="dinners"
            onChange={handleChange}
            value={formData.dinners}
            type="number"
          />
        </div>

        <FormSelect
          id="ocassion"
          label="Special ocassion"
          onChange={handleChange}
          value={formData.ocassion}
          options={["--", "Birthday", "Anniversary"]}
        />

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
      {submitSuccess && <ConfirmationAlert userData={formData} />}
    </>
  );
};

export default ReserveTable;
