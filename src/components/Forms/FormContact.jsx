import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Textarea,
  Input,
  Heading,
  Button,
  Box,
} from '@chakra-ui/react';

import { Formik, Field } from 'formik';

const FormContact = () => {
  return (
    <Container>
      <Heading p={4}>Formulario de contacto.</Heading>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'El correo es requerido';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'La dirección de correo es inválida';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Box rounded="lg" shadow="lg" bg={'gray.800'} m={2} p={4} borderWidth="1px">
            <form onSubmit={handleSubmit}>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor="name">Indicanos tu nombre</FormLabel>
                    <Input {...field} id="name" placeholder="" mb={2} />
                  </FormControl>
                )}
              </Field>

              <FormControl>
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
                {/* <FormErrorMessage>  */}
                {/* {errors.email && touched.email && errors.email} */}
                {/* </FormErrorMessage> */}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="message">Indica tu mensaje</FormLabel>
                <Textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder=""
                  mb={2}
                />{' '}
              </FormControl>
              <Button type="submit" disabled={isSubmitting} colorScheme="purple">
                Enviar
              </Button>
            </form>
          </Box>
        )}
      </Formik>
    </Container>
  );
};

export default FormContact;
