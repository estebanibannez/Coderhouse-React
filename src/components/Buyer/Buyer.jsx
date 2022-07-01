import { Formik, Field, Form } from 'formik';
import { useToast } from '@chakra-ui/react';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, VStack } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useContext, useRef, useState, useEffect } from 'react';
import CartContext from './../Context/CartContext';
import { useNavigate } from 'react-router-dom';

import { setOrder } from '../../data';

export const Buyer = () => {
  const toast = useToast();
  const toastIdRef = useRef();
  const navigate = useNavigate();

  const { state, setState, emptyCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({});

  const initialValues = {
    email: '',
    name: '',
    phone: '',
  };

  useEffect(() => {
    console.log({ buyer });
    console.log({ state });
  }, []);

  const validateFields = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = `El email es requerido`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'El email que indicas no es válido';
    }

    if (!values.name) {
      errors.name = `El nombre es requerido`;
    } else if (values.name.length < 2) {
      errors.name = 'El nombre debe contener al menos 2 caracteres';
    } else if (values.name.length > 15) {
      errors.name = 'El nombre supera los caracteres permitidos';
    }

    if (!values.phone) {
      errors.phone = `El teléfono es requerido`;
    } else if (values.phone.length < 8) {
      errors.phone = 'El teléfono debe contener al menos 8 caracteres';
    } else if (values.phone.length > 15) {
      errors.phone = 'El teléfono excede los caracteres permitidos';
    }
    return errors;
  };

  const onChangeInput = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
    setState({
      ...state,
      buyer,
    });
  };

  const handleSubmit = async (values) => {
    try {
      // alert(JSON.stringify(values, null, 2));
      const ordersResponse = await setOrder(state);

      console.log({ ordersResponse });

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
    } catch (error) {
      console.log('Ocurrió un error', error);
    }
  };

  return (
    <Formik initialValues={initialValues} validate={validateFields} onSubmit={handleSubmit}>
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email">Indicanos tu email</FormLabel>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                variant="outline"
                value={values.email}
                onBlur={(e) => onChangeInput(e)}
                onFocus={(e) => onChangeInput(e)}
                isRequired
              />
              <FormErrorMessage>{errors.email && touched.email && errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.name && touched.name}>
              <FormLabel htmlFor="name">Indicanos tu nombre</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="text"
                variant="outline"
                value={values.name}
                onBlur={(e) => onChangeInput(e)}
                onFocus={(e) => onChangeInput(e)}
                isRequired
              />
              <FormErrorMessage>{errors.name && touched.name && errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.phone && touched.phone}>
              <FormLabel htmlFor="name">Indicanos tu teléfono</FormLabel>
              <Field
                as={Input}
                id="phone"
                name="phone"
                type="text"
                variant="outline"
                value={values.phone}
                onBlur={(e) => onChangeInput(e)}
                onFocus={(e) => onChangeInput(e)}
                isRequired
              />
              <FormErrorMessage>{errors.phone}</FormErrorMessage>
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
              // disabled={isSubmitting}
            >
              Ir a Pagar
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
