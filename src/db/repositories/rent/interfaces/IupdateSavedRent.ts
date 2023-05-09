interface IupdateSavedRent {
  updateOnDB: (rent: any) => Promise<any>;
}

export { IupdateSavedRent };
