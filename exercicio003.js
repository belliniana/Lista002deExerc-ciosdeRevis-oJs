const usuario = {
    nome: "Ana",
    email: "ana@email.com"
};

const mostrarUsuario = ({ nome, email }) => {
    console.log(nome, email);
};

mostrarUsuario(usuario);