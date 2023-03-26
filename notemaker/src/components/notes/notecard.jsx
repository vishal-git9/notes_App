// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react';
import {EditIcon,DeleteIcon} from "@chakra-ui/icons"

export default function Notecard({title,subject,body,handleUpdate,handleDelete,id}) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={6}
        
        overflow={'hidden'}>
        {/* <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
        </Box> */}
        <Stack alignItems={"flex-start"}>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {title}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {subject}
          </Heading>
          <Text color={'gray.500'} textAlign="left">
            {body}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} alignItems={"flex-start"} justifyContent="space-between">
          <Box display={"flex"} gap="10px">
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} alignItems={"flex-start"} spacing={-3} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021</Text>
          </Stack>
          </Box>
          <Stack direction={'row'}  spacing={3} fontSize={'sm'}>
            <IconButton colorScheme={"blue"} variant={"outline"} icon={<EditIcon/>} onClick={()=>handleUpdate(id)}>Edit</IconButton>
            <IconButton colorScheme={"red"} variant={"solid"} icon={<DeleteIcon/>} onClick={()=>handleDelete(id)}>Delete</IconButton>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}