import * as yup from 'yup';
import { loginSchema, registerSchema } from '@/schema/auth.schema';

export type TLoginInput = yup.InferType<typeof loginSchema>;
export type TRegisterInput = yup.InferType<typeof registerSchema>;