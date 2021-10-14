import * as yup from "yup";

export const formValidationSchema = yup.object({
  company_name: yup.string().required(),
});
