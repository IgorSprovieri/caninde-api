interface IdeleteSavedRent {
  deleteOnDB: (rent: any) => Promise<any>;
}

export { IdeleteSavedRent };
