interface IvalidateJWT {
  validate: (token: string) => Promise<boolean>;
}

export { IvalidateJWT };
