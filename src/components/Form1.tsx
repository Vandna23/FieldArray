import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  cart: {
    name: string;
    address: string;
    email: string;
    select: string;
    price: number;
  }[];
};

const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "cart",
    control,
  });

  const total = formValues.reduce((acc, current) => acc + current.price, 0);

  return (
    <div className="amount">
      <div>Total Amount:</div> <div>{total}</div>
    </div>
  );
};

export default function Form() {
  const { register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      cart: [
        { name: "test", address: "UP", email: "abx@gmail.com", price: 23 },
      ],
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "cart",
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        return (
          <div className={"section"} key={field.id}>
            <input
              placeholder="name"
              {...register(`cart.${index}.name`, {
                required: true,
              })}
            />

            <input
              placeholder="wallet Address"
              {...register(`cart.${index}.address`, {
                required: true,
              })}
            />

            <input
              placeholder="email"
              type="email"
              {...register(`cart.${index}.email`, {
                valueAsNumber: true,
                required: true,
              })}
            />

            <select
              placeholder="select option"
              {...register(`cart.${index}.select`, {
                valueAsNumber: true,
                required: true,
              })}
            >
              <option value="select">Select</option>
              <option value="lead">Lead</option>
              <option value="Assistant">Assistant</option>
            </select>

            <input
              placeholder="value"
              type="number"
              {...register(`cart.${index}.price` as const, {
                valueAsNumber: true,
                required: true,
              })}
            />

            <button className="remove" onClick={() => remove(index)}>
              X
            </button>
          </div>
        );
      })}
      <Total control={control} />
      <button
        type="button"
        onClick={() =>
          prepend({
            name: "",
            email: "",
            price: 0,
            select: "",
          })
        }
      >
        Prepend
      </button>

      <button
        type="button"
        onClick={() =>
          append({
            name: "",
            email: "",
            price: 0,
            select: "",
          })
        }
      >
        Add More
      </button>
      <input type="submit" />
    </form>
  );
}
