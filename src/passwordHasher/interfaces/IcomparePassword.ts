interface IcomparePassword {
  compare: (password: string, passwordHash: string) => boolean;
}

export { IcomparePassword };
