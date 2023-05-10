interface IrentRequestsValidator {
  postRentRequest: (body: any) => Promise<any>;
  putRentRequest: (params: any, body: any) => Promise<any>;
  deleteRentRequest: (params: any) => Promise<any>;
}

export { IrentRequestsValidator };
