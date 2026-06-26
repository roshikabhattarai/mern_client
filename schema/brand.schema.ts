
import * as yup from 'yup';

const brandSchema = yup.object({
    name: yup.string().required(),
    description:yup.string()
    .trim()
    .optional()
    .test("desc-length", "Description must be 25 char long", (val) =>{
        if(!val) return true;
        return val.length >= 25;
    }),
    logo:yup.mixed<File | File[]>().required("logo is required"),

});


export type TBrandInput= yup.InferType<typeof brandSchema>;