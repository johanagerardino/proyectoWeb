 const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});



const body = document.querySelector("body");
const main = document.querySelector("main");
const btn = document.querySelector("#boton");
const iconos = document.querySelectorAll(".icono");

btn.addEventListener("click", function (e) {
  main.classList.toggle("Modo_Oscuro");
  btn.classList.toggle("Modo_Oscuro");
  iconos.forEach(icono => {
    icono.classList.toggle("Modo_Oscuro_Icono");
  });
});
////////////////////////////////////////////////////////////////////////


let Registro = [];

function RegistrarUser() {

  let username = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  if (username == "" || password == "" || email == "") {
    alert("Todos los campos son obligatorios");
    return false;
  }



  alert("Registro de usuarios completado");
  alert("Ya puede inciar sesion");

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);

  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";

  window.location.href = "../pag/login.html";

}



let maxIntentos = 3;
let intentosFallidos = maxIntentos;


function login() {

  let userName = document.getElementById("userNamelogin").value
  let passwordName = document.getElementById("passwordlogin").value;



  const user = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (userName === user && passwordName === password) { 

    alert("Logueado exitosamente");
    window.location.href = "menu.html";
  }
  else {
      intentosFallidos--;
      if (intentosFallidos > 0) {
        alert(`Usuario y/o contraseña incorrectos. Intentos restantes: ${intentosFallidos}`);
      } else {

        alert('Has agotado tus intentos. Por favor, contacta al administrador.');

      }
    }
  }

  /* funcion producto*/
  const botonGuardar = document.getElementById('btnGuardar');
  const registroProductos = [];
  const RegistroProducto = {};
  console.log(botonGuardar);
  botonGuardar.addEventListener('click', capturarInformacion);

  function capturarInformacion() {

    function RegistroProducto(nombreProducto, descripcion, cantidad, valorUni) {
      this.nombreProducto = nombreProducto;
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.valorUni = valorUni;
    }

    const nombreProducto = document.querySelector('#nombreProducto')
    const descripcion = document.querySelector('#descripcion')
    const cantidad = document.querySelector('#cantidad')
    const valorUni = document.querySelector('#valorUni')

    const registroProducto = new RegistroProducto(nombreProducto.value, descripcion.value, cantidad.value, valorUni.value);
    registroProductos.push(registroProducto);
    console.log(registroProductos)
    mostrarInformacion();
  }


  const mostrarInformacion = () => {
    const tbody = document.querySelector('#tbody');
    tbody.innerHTML = '';

    registroProductos.forEach((producto) => {
      tbody.innerHTML += `
      <tr>
          <td>${producto.nombreProducto}</td>
          <td>${producto.descripcion}</td>
          <td>${producto.cantidad}</td>
          <td>${producto.valorUni}</td>
      </tr>
    `;
    });
  };

  /*  Funcion de cliente */
  const button = document.getElementById('btnGuardar');
  const registroClientes = [];
  const RegistroCliente = {};
  console.log(button);
  button.addEventListener('click', capturarInformacionCliente);

  function capturarInformacionCliente() {
    function RegistroCliente(nombreCliente, telefono, direccion, correo) {
      this.nombreCliente = nombreCliente;
      this.telefono = telefono;
      this.direccion = direccion;
      this.correo = correo;
    }


    const nombreCliente = document.querySelector('#nombrecliente');
    const telefono = document.querySelector('#telefono');
    const direccion = document.querySelector('#direccion');
    const correo = document.querySelector('#correo');

    const cliente = new RegistroCliente(nombreCliente.value, telefono.value, direccion.value, correo.value); {

    }

    registroClientes.push(cliente);
    console.log(registroClientes);
    mostrarInformacionCliente();
  }

  const mostrarInformacionCliente = () => {
    const tbody = document.querySelector('#tbody');
    tbody.innerHTML = ''; // Limpiar el contenido actual de tbody

    registroClientes.forEach((cliente) => {
      tbody.innerHTML += `
      <tr>
          <td>${cliente.nombreCliente}</td>
          <td>${cliente.telefono}</td>
          <td>${cliente.direccion}</td>
          <td>${cliente.correo}</td>
      </tr>
    `;
    });
  };

  /*  Funcion de Usuario */
  const buttonUsuario = document.getElementById('btnGuardar');
  const registroUsuarios = [];
  const RegistroUsuario = {};
  console.log(buttonUsuario);
  buttonUsuario.addEventListener('click', capturarInformacionUsuario);

  function capturarInformacionUsuario() {
    function RegistroUsuario(nombreUsuario, telefono, direccion, correo) {
      this.nombreUsuario = nombreUsuario;
      this.telefono = telefono;
      this.direccion = direccion;
      this.correo = correo;
    }


    const nombreUsuario = document.querySelector('#nombreUsuario');
    const telefono = document.querySelector('#telefono');
    const direccion = document.querySelector('#direccion');
    const correo = document.querySelector('#correo');

    const usuario = new RegistroUsuario(nombreUsuario.value, telefono.value, direccion.value, correo.value); {

    }

    registroUsuarios.push(usuario);
    console.log(registroUsuarios);
    mostrarInformacionUsuario();
  }

  const mostrarInformacionUsuario = () => {
    const tbody = document.querySelector('#tbody');
    tbody.innerHTML = ''; // Limpiar el contenido actual de tbody

    registroUsuarios.forEach((usuario) => {
      tbody.innerHTML += `
      <tr>
          <td>${usuario.nombreUsuario}</td>
          <td>${usuario.telefono}</td>
          <td>${usuario.direccion}</td>
          <td>${usuario.correo}</td>
      </tr>
    `;
    });
  };

    /*  Funcion de Proveedores */
    const buttonProveedor = document.getElementById('btnGuardar');
    const registroProveedores = [];
    const RegistroProveedor = {};
    console.log(buttonProveedor);
    buttonProveedor.addEventListener('click', capturarInformacionProveedor);
  
    function capturarInformacionProveedor() {
      function RegistroProveedor(nombreProveedor, nit, direccion,telefono,) {
        this.nombreProveedor = nombreProveedor;
        this.nit = nit,
        this.direccion = direccion;
        this.telefono = telefono;
  
      }
  
  
      const nombreProveedor = document.querySelector('#nombreProveedor');
      const nit = document.querySelector('#nit');
      const direccion = document.querySelector('#direccion');
      const telefono = document.querySelector('#telefono');
   
     
  
      const proveedor = new RegistroProveedor(nombreProveedor.value, nit.value,direccion.value, telefono.value); {
  
      }
  
      registroProveedores.push(proveedor);
      console.log(registroProveedores);
      mostrarInformacionProveedor();
    }
  
    const mostrarInformacionProveedor = () => {
      const tbody = document.querySelector('#tbody');
      tbody.innerHTML = ''; // Limpiar el contenido actual de tbody
  
      registroProveedores.forEach((proveedor) => {
        tbody.innerHTML += `
        <tr>
            <td>${proveedor.nombreProveedor}</td>
            <td>${proveedor.nit}</td>
            <td>${proveedor.direccion}</td>
            <td>${proveedor.telefono}</td>
        </tr>
      `;
      });
    };
  