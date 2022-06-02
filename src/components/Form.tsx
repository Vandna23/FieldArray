import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  cart: {
    name: string;
    address: string;
    price: number;
    email: string;
    select: string;
  }[];
};
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

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
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      cart: [
        { name: "test", address: "UP", email: "abx@gmail.com", price: 23 },
        { name: "test", address: "Kanpur", email: "ree@gmail.com", price: 23 },
        { name: "test", address: "MP", email: "ytr@gmail.com", price: 23 },
      ],
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
  });
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section className={"section"} key={field.id}>
                <input
                  placeholder="name"
                  {...register(`cart.${index}.name` as const, {
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.name?.message}
                  defaultValue={field.name}
                />
                {/* {errors?.cart?.[index]?.name ? "error" : ""} */}

                <input
                  placeholder="wallet Address"
                  {...register(`cart.${index}.address` as const, {
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.address?.message}
                  defaultValue={field.address}
                />
                {/* {errors?.cart?.[index]?.address ? "error" : ""} */}

                <input
                  placeholder="email"
                  type="email"
                  {...register(`cart.${index}.email` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.email?.message}
                  defaultValue={field.email}
                />
                {/* {errors?.cart?.[index]?.email ? "error" : ""} */}

                <select
                  placeholder="select option"
                  {...register(`cart.${index}.select` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.select?.message}
                  defaultValue={field.select}
                >
                  <option value="select" selected>
                    Select
                  </option>
                  <option value="lead">Lead</option>
                  <option value="Assistant">Assistant</option>
                </select>
                {/* {errors?.cart?.[index]?.select ? "error" : ""} */}
                <input
                  placeholder="value"
                  type="number"
                  {...register(`cart.${index}.price` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.price?.message}
                  defaultValue={field.price}
                />
                {/* {errors?.cart?.[index]?.price ? "error" : ""} */}

                <button className="remove" onClick={() => remove(index)}>
                  X
                </button>
              </section>
            </div>
          );
        })}

        <Total control={control} />

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
    </div>
  );
}
