"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { InputField } from "@/components/form";
import { Grid } from "@mui/material";
import userApi from "@/actions/users";
import { useSnackbar } from "notistack";

type PasswordFormBodyType = {
  username: string;
  password: string;
};

const PasswordFormBody = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function PasswordForm() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const form = useForm<PasswordFormBodyType>({
    resolver: zodResolver(PasswordFormBody),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: PasswordFormBodyType) {
    try {
      console.log(values);
      const response = await userApi.updatePassword(values);
      if (response.status === 200) {
        enqueueSnackbar("Update password successfully", { variant: "success" });
        router.push("/logout");
      }
    } catch (error: any) {
      enqueueSnackbar("Update password failed", { variant: "error" });
      form.reset();
      console.error(error);
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Grid container spacing={2}>
          {/* Grid item cho trường username */}
          <Grid item xs={12} sm={12}>
            <InputField name="username" label="Input your user name" />
          </Grid>

          {/* Grid item cho trường password */}
          <Grid item xs={12} sm={12}>
            <InputField name="password" label="New password" />
          </Grid>

          {/* Grid item cho nút submit */}
          <Grid item xs={3}>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-200 hover:text-black transition duration-300"
            >
              Update password
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
