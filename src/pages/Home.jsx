import React from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/download.jpg';
import Form from '../components/Form';
import Details from '../components/Details';
import {useState} from 'react';

const StyledComponents = styled(Box)({
    height: '100vh',
    alignItems: 'center',
    margin: '0 auto',
    display: 'flex',
});

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
});

const Home = () => {
    const[result, setResult]=useState({})
    return (
        <StyledComponents>
            <Image>
                <img src={Sunset} alt="Sunset" />
            </Image>
            <Box style={{ width: '73%', height: '80%',display:'flex',flexDirection:'column'}}>
                <Form setResult={setResult}/>
                <Details result={result}/>
            </Box>
        </StyledComponents>
    );
};

export default Home;
