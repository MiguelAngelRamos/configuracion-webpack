const saludar = (nombre) => {
  const h2 = document.createElement('h2');
  h2.innerHTML = `Hola, Bienvenido(a) ${nombre}`;
  document.body.append(h2);
}

saludar('Catalina');