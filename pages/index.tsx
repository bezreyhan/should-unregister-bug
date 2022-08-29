import * as React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
};

let renderCount = 0;

export default function App() {
  const { register, handleSubmit, reset, getValues } = useForm<FormValues>({
    shouldUnregister: true,
  });
  const onSubmit = (data: FormValues) => console.log(data);
  renderCount++;

  React.useEffect(() => {
    setTimeout(() => {
      const data = { firstName: "hi", foo: "bar" };
      reset(data);
    }, 1000);
  }, [reset]);

  return (
    <div>
      <button
        onClick={() => {
          const formData = getValues();
          console.log("formData", formData);
        }}
        style={{ marginBottom: 30 }}
      >
        Click Me
      </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input type="submit" />
      </form>
    </div>
  );
}
