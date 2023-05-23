interface IgetAllSavedRents {
  getAllOnDB: (userId: string) => Promise<Array<any>>;
}

export { IgetAllSavedRents };
