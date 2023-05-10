interface IuserRequestsValidator {
  loginRequest: (body: any) => Promise<any>;
  postUserRequest: (body: any) => Promise<any>;
}

export { IuserRequestsValidator };
