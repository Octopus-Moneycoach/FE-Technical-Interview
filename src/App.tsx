import { useState } from "react";
import "./App.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";

function App() {
  const { register, handleSubmit } = useForm();
  const [taxAmount, setTaxAmount] = useState(0);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Write a function to get calculate tax amount, given the salary
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack width={"500px"} gap={2}>
        <TextField
          id="salary"
          label="salary"
          type="salary"
          color="primary"
          {...register("salary")}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Stack>Calculated Tax: {taxAmount}</Stack>
      </Stack>
    </form>
  );
}

export default App;
