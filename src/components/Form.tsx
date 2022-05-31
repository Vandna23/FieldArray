import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import * as yup from "yup";

type FormValues = {
  cart: {
    name: string;
    address: string;
    price: number;
    email: string;
    select: string;
  }[];
};

const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "cart",
    control,
  });
  const total = formValues.reduce(
    (acc, current) => acc + (current.price || 0),
    0
  );
  return <p>Total Amount: {total}</p>;
};

export default function Form() {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        name: yup.string().required(),
      
      });
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
    mode: "onSubmit",
    reValidateMode: "onBlur",
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
                  className={errors?.cart?.[index]?.name ? "error" : ""}
                  defaultValue={field.name}
                />
                <input
                  placeholder="wallet Address"
                  {...register(`cart.${index}.address` as const, {
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.address ? "error" : ""}
                  defaultValue={field.address}
                />
                <input
                  placeholder="email"
                  type="email"
                  {...register(`cart.${index}.email` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.email ? "error" : ""}
                  defaultValue={field.email}
                />
                <select
                  placeholder="select option"
                  {...register(`cart.${index}.select` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.select ? "error" : ""}
                  defaultValue={field.select}
                >
                  <option value="select">Select</option>
                  <option value="lead">Lead</option>
                  <option value="Assistant">Assistant</option>
                  <option value="none">None</option>
                </select>
                <input
                  placeholder="value"
                  type="number"
                  {...register(`cart.${index}.price` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.price ? "error" : ""}
                  defaultValue={field.price}
                />
                <button type="button" onClick={() => remove(index)}>
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
function yupResolver(schema: any): import("react-hook-form").Resolver<FormValues, any> | undefined {
    throw new Error("Function not implemented.");
}

