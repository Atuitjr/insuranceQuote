import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

const TitleComponent = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <TitleComponent>{title}</TitleComponent>
        </HeaderContainer>
    );
};
export default Header;
