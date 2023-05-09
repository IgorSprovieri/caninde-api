interface IdeleteSavedRent {
  deleteOnDB: (id: string) => Promise<any>;
}

export { IdeleteSavedRent };
