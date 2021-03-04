import styled from '@emotion/styled';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const SummaryContainer = styled.div`
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    padding: 0.5rem;
    text-align: center;
    position: relative;
`;

const Text = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({ quotation }) => {
    return (
        <>
            {quotation <= 1 ? (
                <Message>Choose brand , year and/or a plan</Message>
            ) : (
                <SummaryContainer>
                    <Text>
                        The quotation is: <span>${quotation}</span>
                    </Text>
                </SummaryContainer>
            )}
        </>
    );
};
export default Result;
