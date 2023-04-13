export const cpfCnpjMask = (v: string) => {
  if (v === undefined) {
    return;
  }

  v = v.replace(/\D/g, "");

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else if (v.length > 11 && v.length <= 14) {
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    v = v.substring(0, 14);
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return v;
};

export const cepMask = (v: string) => {
  if (v === undefined) {
    return;
  }

  v = v.replace(/\D/g, "");

  if (v.length <= 8) {
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
  } else {
    v = v.substring(0, 8);
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
  }

  return v;
};
