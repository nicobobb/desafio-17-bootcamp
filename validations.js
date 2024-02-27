const validationName = (name) => {
    if (!name.length) return false;
    const regex = /^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]{1}[a-záéíóúüñÁÉÍÓÚÜÑ]{2,15})?$/;
    return regex.test(name);
};

const validationAddress = (address) => {
    if (!address.length) return false;
    const regex =
        /^[\w\dáéíóúüñÁÉÍÓÚÜÑàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛçÇ,.\-\s'"/°()]{10,200}$/;
    return regex.test(address);
};

const validationPhone = (phone) => {
    const isPhone = phone.replace(/\s/g, "");
    return isPhone.length > 9;
};
