// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

// rodando sem erro no TS!

let employee: (codigo: number, nome: string) => {
    code: 10;
    nome: "john";
}
