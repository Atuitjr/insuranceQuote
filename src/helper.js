export const obtainYearDifference = (year) => new Date().getFullYear() - year;

export const calculateBrand = (brand) => {
    let result;

    switch (brand) {
        case 'european':
            result = 1.3;
            break;
        case 'american':
            result = 1.15;
            break;
        case 'asian':
            result = 1.05;
            break;
        default:
            result = 1;
            break;
    }

    return result;
};

export const calculateInsurancePlan = (plan) => (plan === 'basic' ? 1.2 : 1.5);

export const capitalizeFirstLetter = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);
