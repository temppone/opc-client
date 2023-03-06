export const cpfCnpjMask = (v: number) => {
  if (v === undefined) {
    return;
  }

  let value = v.toString();

  value = value.replace(/\D/g, "");

  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else if (value.length > 11 && value.length <= 14) {
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    value = value.substring(0, 14);
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return value;
};

export const cepMask = (v: number) => {
  if (v === undefined) {
    return;
  }

  let value = v.toString();

  value = value.replace(/\D/g, "");

  if (value.length <= 8) {
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
  } else {
    value = value.substring(0, 8);
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
  }

  return value;
};
