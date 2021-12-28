export const convertDate = (date) => {
    const dateToConvert = new Date(date);

    return `${dateToConvert.getDate()} ${dateToConvert.toLocaleString('default', {
        month: 'long',
    })} ${dateToConvert.getFullYear()}`;
};
