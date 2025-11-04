export const createInitials = (fullName: string): string => {
  const names = fullName.trim().split(/\s+/);

  if (names.length === 1) {
    return names[0].slice(0, 2).toUpperCase();
  } else {
    return names.map((name) => name[0].toUpperCase()).join("");
  }
};
