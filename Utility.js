const stringifyDate = (date) => {
    const options = { day : 'numeric', month : 'short', year: 'numeric'};
    const newDate = !date ? "underfined" :
                    new Date(Date.parse(date)).toLocaleDateString('en-Gb', options);
     return newDate;
}