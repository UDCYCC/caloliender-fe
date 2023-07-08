import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {useState} from 'react';



const main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(

        <div>
            <div className="header">
                <h1>Caloliender</h1>
            </div>

            

            <div className="today">
                <p>name's today</p>
                <div onClick={onOpen}>
                    <div className='modal'>
                        <Progress value={80} />
                        <p>오늘 소모한 칼로리</p>
                        
                            <span>
                                <CircularProgress value={80} size='12vw' color='green.400'>
                                    <CircularProgressLabel>
                                        80%
                                        <br />
                                        탄수화물
                                    </CircularProgressLabel>
                                </CircularProgress>
                            </span>
                            <span>
                                <CircularProgress value={40} size='12vw' color='green.400'>
                                    <CircularProgressLabel>
                                        40%
                                        <br />
                                        단백질
                                    </CircularProgressLabel>
                                </CircularProgress>
                            </span>
                            <span>
                                <CircularProgress value={40} size='12vw' color='green.400'>
                                    <CircularProgressLabel>
                                        40%
                                        <br />
                                        지방
                                    </CircularProgressLabel>
                                </CircularProgress>
                            </span>
                            <span>
                                <CircularProgress value={40} size='12vw' color='green.400'>
                                    <CircularProgressLabel>
                                        40%
                                        <br />
                                        물
                                    </CircularProgressLabel>
                                </CircularProgress>
                            </span>
                            <span>
                                <CircularProgress value={40} size='12vw'color='green.400'>
                                    <CircularProgressLabel>
                                        40%
                                        <br />
                                        운동
                                    </CircularProgressLabel>
                                </CircularProgress>
                            </span>
    
                    </div>

                    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>today condition</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            dd
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                            Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
                
            </div>
        </div>
    )
    
}


export default main;