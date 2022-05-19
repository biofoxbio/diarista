import react from 'react';
import {SafeEnvironmentContainer} from './Safe.estilo';
import {Container} from '@material-ui/core';


const SafeEnvironment = () => {
    return (
    <SafeEnvironmentContainer>
        <Container>
            Ambiente Seguro 
        </Container>
    </SafeEnvironmentContainer>
    );
}

export default SafeEnvironment;