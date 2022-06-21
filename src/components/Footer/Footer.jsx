import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Text, Stack, IconButton, ButtonGroup } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Stack
        bgGradient="linear(to-l,#190022,#020024)"
        py={{
          base: '12',
          md: '5',
        }}
        p={10}
        spacing={{
          base: '4',
          md: '5',
        }}
      >
        <Stack justify="space-between" direction="row" align="center" color={'white'}>
          {'REY PATO'}
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} Rey Pato , Inc. All rights reserved.
        </Text>
      </Stack>
    </>
  );
};

export default Footer;
