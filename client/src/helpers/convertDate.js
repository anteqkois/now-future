export const convertDate = (date) => {
    const dateToConvert = new Date(date);

    const diffTime = Math.abs(new Date() - dateToConvert);
    const diffHouers = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffHouers > 28
        ? `${dateToConvert.getDate()} ${dateToConvert.toLocaleString('default', {
              month: 'long',
          })} ${dateToConvert.getFullYear()}`
        : `${diffHouers}h`;
};
