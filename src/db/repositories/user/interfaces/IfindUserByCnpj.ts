interface IfindUserByCnpj {
  findByCnpjOnDB: (cnpj: number) => Promise<any>;
}

export { IfindUserByCnpj };
