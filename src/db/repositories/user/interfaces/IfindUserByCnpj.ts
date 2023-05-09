interface IfindUserByCnpj {
  findByCnpjOnDB: (cnpj: string) => Promise<any>;
}

export { IfindUserByCnpj };
