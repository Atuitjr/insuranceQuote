import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

import styled from '@emotion/styled';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const FormContainer = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

function App() {
    const [summary, setSummary] = useState({
        quotation: 0,
        data: { year: '', brand: '', plan: '' },
    });

    const { quotation, data } = summary;
    return (
        <Container>
            <Header title='Insurance quote' />
            <FormContainer>
                <Form setSummary={setSummary} />
                <Summary data={data} />
                <Result quotation={quotation} />
            </FormContainer>
        </Container>
    );
}

export default App;
