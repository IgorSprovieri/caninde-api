interface IfindUserById {
  findByIdOnDB: (id: string) => Promise<any>;
}

export { IfindUserById };
