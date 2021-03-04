import { useState } from 'react';
import styled from '@emotion/styled';
import {
    obtainYearDifference,
    calculateBrand,
    calculateInsurancePlan,
} from '../helper';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
    margin-top: 2rem;
    &:hover {
        background-color: #26c6da;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({ setSummary }) => {
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: '',
    });
    const [error, setError] = useState(false);

    const { brand, year, plan } = data;

    const obtainData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const quoteInsurance = (e) => {
        e.preventDefault();

        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        let result = 2000;

        const yearDifference = obtainYearDifference(year);
        result -= (yearDifference * 3 * result) / 100;

        result = calculateBrand(brand) * result;

        result = (calculateInsurancePlan(plan) * result).toFixed(2);

        setSummary({
            quotation: result,
            data,
        });
    };

    return (
        <form onSubmit={quoteInsurance}>
            {error && <Error>All fields are required</Error>}
            <Field>
                <Label>Brand</Label>
                <Select name='brand' value={brand} onChange={obtainData}>
                    <option value=''>-- Select --</option>
                    <option value='american'>American</option>
                    <option value='european'>European</option>
                    <option value='asian'>Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select name='year' value={year} onChange={obtainData}>
                    <option value=''>-- Select --</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basic'
                    checked={plan === 'basic'}
                    onChange={obtainData}
                />
                Basic
                <InputRadio
                    type='radio'
                    name='plan'
                    value='complete'
                    checked={plan === 'complete'}
                    onChange={obtainData}
                />
                Complete
            </Field>
            <Button type='submit' value='quote'>
                Quote
            </Button>
        </form>
    );
};
export default Form;
