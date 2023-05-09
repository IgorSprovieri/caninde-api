interface IgetAllSavedRents {
  getAllOnDB: () => Promise<Array<any>>;
}

export { IgetAllSavedRents };
