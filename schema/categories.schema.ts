import * as yup from "yup";

export const categorySchema = yup.object({
  name: yup
    .string()
    .required("Category name is required")
    .min(3, "Category name must be at least 3 characters"),

  description: yup
    .string()
    .trim()
    .optional()
    .test(
      "desc-length",
      "Description must be at least 25 characters long",
      (value) => !value || value.length >= 25
    ),

  image: yup
    .mixed<File | File[]>()
    .required("Category image is required"),
});

export type TCategoryInput = yup.InferType<typeof categorySchema>;