import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} style={{ marginBottom: "20px" }}>
      <div>
        <label>ID</label>
        <input
          type="text"
          {...register("id", {
            required: "Account name is required",
            pattern: { value: /^[0-9]+$/, message: "ID must be a number" },
          })}
        />
        {errors.id && <p>{errors.id.message}</p>}
      </div>

      <div>
        <label>Name</label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Age must be at least 18" },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label>Country</label>
        <input
          type="text"
          {...register("country", { required: "Country is required" })}
        />
        {errors.country && <p>{errors.country.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
