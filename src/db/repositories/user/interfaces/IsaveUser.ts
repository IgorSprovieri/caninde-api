interface IsaveUser {
  saveOnDB: (user: object) => Promise<any>;
}

export { IsaveUser };
