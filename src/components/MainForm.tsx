import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "./CommonCss.scss";
import ChildForm from './ChildForm';

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const MainForm = () => {

    // const [formdata, setFormdata] = useState<UserSubmitForm>({
    //     fullname: '',
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     acceptTerms: false
    //   });
    const [formdata, setFormdata] = useState<any>();
    const [isvalidated, setIsvalidated] = useState<number>(0);

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
          .required('Username is required')
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required'),
        //   .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
      });
    
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
      });
    
      const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
      };

    return (
        <>
        Main
        <ChildForm
        {...formdata}
        setFormdata={setFormdata}
        setIsvalidated={setIsvalidated}
        />
        </>
    )

}

export default MainForm;