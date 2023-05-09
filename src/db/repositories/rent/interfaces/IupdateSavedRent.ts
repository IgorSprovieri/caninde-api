interface IupdateSavedRent {
  updateOnDB: (rent: object) => Promise<any>;
}

export { IupdateSavedRent };
