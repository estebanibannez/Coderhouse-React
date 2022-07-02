import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useToast } from '@chakra-ui/react';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useContext, useRef, useState, useEffect } from 'react';
import CartContext from './../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { setOrder } from '../../data';

export const Buyer = () => {
  const { state, setState, emptyCart } = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const toastIdRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitting) {
      submitForm();
    }
  }, [isSubmitting]);

  const initialValues = {
    email: '',
    name: '',
    phone: '',
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Campo Requerido')
      .email('Correo Electrónico Inválido')
      .max(255, `Máximo 255 caracteres`),
    name: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(25, `Máximo 25 caracteres`)
      .required('Campo Requerido'),
    phone: Yup.string()
      .min(8, `Mínimo  8 caracteres`)
      .max(10, `Máximo 10 caracteres`)
      .required('Campo Requerido'),
  });

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.email) {
  //     errors.email = `El email es requerido`;
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = 'El email que indicas no es válido';
  //   }
  //   if (!values.name) {
  //     errors.name = `El nombre es requerido`;
  //   } else if (values.name.length < 2) {
  //     errors.name = 'El nombre debe contener al menos 2 caracteres';
  //   } else if (values.name.length > 15) {
  //     errors.name = 'El nombre supera los caracteres permitidos';
  //   }

  //   if (!values.phone) {
  //     errors.phone = `El teléfono es requerido`;
  //   } else if (values.phone.length < 8) {
  //     errors.phone = 'El teléfono debe contener al menos 8 caracteres';
  //   } else if (values.phone.length > 15) {
  //     errors.phone = 'El teléfono excede los caracteres permitidos';
  //   } else if (
  //     /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g.test(values.phone.toString())
  //   ) {
  //     errors.phone = 'El teléfono debe contener solo números';
  //   }
  //   return errors;
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  const submitForm = async (buyer) => {
    try {
      setTimeout(async () => {
        const ordersResponse = await setOrder(state);
        console.log({ ordersResponse });
        console.log({ state });
        if (ordersResponse.id !== '' || ordersResponse.id !== undefined) {
          toastIdRef.current = toast({
            title: `Tu Orden con N°${ordersResponse.id} fue creada éxitosamente 🙌🎉 !`,
            description: 'Pronto nos pondremos en contacto contigo🤪!',
            status: 'info',
            position: 'top-center',
            duration: 4000,
            isClosable: true,
          });
          emptyCart();
          navigate('/');
        } else {
          toastIdRef.current = toast({
            title: `Ocurrió un error al crear la orden ${ordersResponse} 😥`,
            description: `Estamos trabajando para resolverlo cuanto antes 🤖`,
            status: 'error',
            position: 'top-center',
            duration: 2000,
            isClosable: true,
          });
        }
      }, 400);
    } catch (error) {
      console.log('Ocurrió un error', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(buyer) => {
        setState({ ...state, buyer });
        setIsSubmitting(true);
      }}
      // validate={validate}
    >
      {({ handleSubmit, handleBlur, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Indicanos tu email</FormLabel>
              <Field
                as={Input}
                type="email"
                name="email"
                id="email"
                onBlur={handleBlur}
                // value={values.email}
                // onChange={handleChange}
              />
              <ErrorMessage component="div" name="email" className="field-error text-danger" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">Indicanos tu nombre</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="text"
                variant="outline"
                // value={values.name}
                // onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage component="div" name="name" className="field-error text-danger" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">Indicanos tu teléfono</FormLabel>
              <Field
                as={Input}
                id="phone"
                name="phone"
                type="number"
                variant="outline"
                placeholder="ej : 56989999939"
                onBlur={handleBlur}
                // value={values.phone}
                // onChange={handleChange}
              />
              <ErrorMessage component="div" name="phone" className="field-error text-danger" />
            </FormControl>

            <Button
              color="white"
              variant="solid"
              size="lg"
              fontSize="md"
              rightIcon={<FaArrowRight />}
              mt={2}
              width="full"
              colorScheme="purple"
              type="submit"
              isLoading={isSubmitting}
            >
              Ir a Pagar
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
