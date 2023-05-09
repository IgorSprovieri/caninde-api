interface IvalidateJWT {
  validate: (token: string) => Promise<any>;
}

export { IvalidateJWT };
