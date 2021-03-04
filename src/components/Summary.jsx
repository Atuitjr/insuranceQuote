import styled from '@emotion/styled';

import { capitalizeFirstLetter } from '../helper';

const SummaryComponent = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Summary = ({ data }) => {
    const { brand, year, plan } = data;
    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '')
        return null;
    return (
        <SummaryComponent>
            <h2>Quotation Summary</h2>
            <ul>
                <li>Brand: {capitalizeFirstLetter(brand)}</li>
                <li>Plan: {capitalizeFirstLetter(plan)}</li>
                <li>Year of the car: {year}</li>
            </ul>
        </SummaryComponent>
    );
};
export default Summary;
