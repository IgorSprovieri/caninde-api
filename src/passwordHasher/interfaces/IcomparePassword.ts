interface IcomparePassword {
  compare: (password: string, passwordHash: string) => Promise<boolean>;
}

export { IcomparePassword };
