import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Textarea,
  Input,
  Heading,
  Button,
  Box,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { setMessageContact } from '../../data';

const FormContact = () => {
  const toast = useToast();
  const toastIdRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // alert(JSON.stringify(values, null, 2));
      debugger;

      const contactMessage = await setMessageContact(values);

      console.log({ contactMessage });

      if (contactMessage.id !== '' || contactMessage.id !== undefined) {
        toastIdRef.current = toast({
          title: `WOOOOHOOO!`,
          description: 'Tu mensaje se envió éxitosamente',
          status: 'info',
          position: 'top-center',
          duration: 4000,
          isClosable: true,
        });
        navigate('/');
      } else {
        toastIdRef.current = toast({
          title: `Error `,
          description: `Ocurrió un error al enviar tu mensaje!`,
          status: 'error',
          position: 'top-center',
          duration: 2000,
          isClosable: true,
        });
      }
      // if (registerResponse.status === 201) {
      //   navigation.navigate(ROUTE_LOGIN, { email: registerResponse.data.email });
      // }
    } catch (error) {
      console.log('Ocurrió un error', error);
    }
  };

  return (
    <Container maxW={'3xl'}>
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Hey! <br />
          <Text as={'span'} color={'pink.400'}>
            Contactanos
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          A traves del formulario puedes contactarnos, escribenos un mensaje!
        </Text>

        <Formik
          initialValues={{ email: '', name: '', message: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = `El email es requerido`;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Indica una dirección de correo valida';
            }

            if (!values.name) {
              errors.name = `Tu nombre es requerido`;
            } else if (values.name.length < 2) {
              errors.name = 'La nombre debe contener al menos 2 caracteres';
            }

            if (!values.message) {
              errors.message = `Tu mensaje es requerido !`;
            } else if (values.message.length < 8) {
              errors.message = 'El mensaje debe contener al menos 5 caracteres';
            } else if (values.message.length > 120) {
              errors.message = 'El mensaje excede los caracteres permitidos';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
          // onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
          // }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor="name">Indicanos tu nombre</FormLabel>
                    <Input {...field} id="name" placeholder="" mb={2} />

                    <FormErrorMessage>
                      {form.errors.name && form.touched.name && form.errors.name}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Indicanos tu email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                  mb={2}
                  value={values.email}
                  isRequired
                />
                <FormErrorMessage>{errors.email && touched.email && errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.message && touched.message}>
                <FormLabel htmlFor="message">Indica tu mensaje</FormLabel>
                <Textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                  mb={2}
                />
                <FormErrorMessage mb={2}>
                  {errors.message && touched.message && errors.message}
                </FormErrorMessage>
              </FormControl>

              <Stack
                direction={'column'}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}
              >
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  colorScheme={'purple'}
                  bg={'purple.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'purple.500',
                  }}
                >
                  Enviar Mensaje
                </Button>

                <Button
                  variant={'link'}
                  onClick={() => navigate('/')}
                  colorScheme={'blue'}
                  size={'sm'}
                >
                  Seguir navegando
                </Button>
                <Box>
                  <Image
                    width={140}
                    position={'absolute'}
                    right={'-10px'}
                    top={'-15px'}
                    transform={'rotate(10deg)'}
                    src={window.location.origin + '/contact.png'}
                    alt={'logo'}
                  ></Image>
                  <Text
                    fontSize={'md'}
                    fontFamily={'tahoma'}
                    position={'absolute'}
                    right={'-10px'}
                    top={'-15px'}
                    transform={'rotate(10deg)'}
                  >
                    E s c r i b e n o s!
                  </Text>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Container>
  );
};

export default FormContact;
