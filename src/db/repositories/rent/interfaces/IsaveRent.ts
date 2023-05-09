interface IsaveRent {
  saveOnDB: (rent: object) => Promise<any>;
}

export { IsaveRent };
