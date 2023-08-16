const txtNombres = document.querySelector('#nombres');
const txtId = document.querySelector('#id');

const btnSave = document.querySelector('#btnSave');
const tablaPersonas = document.querySelector('#tablaPersonas');
let personasRegistradas = [];

btnSave.onclick = () => {
    const nombres = txtNombres.value;
    const id = personasRegistradas.length + 1;
    if(nombres) {
        if (txtId.value) {
            console.log(personasRegistradas[parseInt(txtId.value)], "pilas")
            personasRegistradas[parseInt(txtId.value)] = {
                    nombres
                };
        }else {
            personasRegistradas.push(
                {
                    nombres
                }
            );
        }
        actualizarTabla();
        document.querySelectorAll('input').forEach(e => e.value ="");
    } else {
        alert("Complete todos los campos");
    }
}

function actualizarTabla() {
    tablaPersonas.innerHTML = '';
    personasRegistradas.forEach((p, i) => {
        console.log(p);
        let tr = document.createElement('tr');
        let tdNombres = document.createElement('td');
        let tdAcciones = document.createElement('td');

        let btnEditar = document.createElement('button');
        btnEditar.style.background = 'orange';
        btnEditar.style.color = 'white';
        btnEditar.style.borderRadius = "5px";

        let btnEliminar = document.createElement('button');
        btnEliminar.style.background = 'red';
        btnEliminar.style.color = 'white';
        btnEliminar.style.borderRadius = "5px";

        let btnTerminar = document.createElement('button');
        btnTerminar.style.background = 'green';
        btnTerminar.style.color = 'white';
        btnTerminar.style.borderRadius = "5px";


        btnEditar.innerHTML = "Editar";        
        btnEliminar.innerHTML = "Remover";
        btnTerminar.innerHTML = "Terminar";


        btnEliminar.setAttribute('onclick', `eliminar(${i})`);
        btnEditar.setAttribute('onclick', `editar(${i})`);
        btnTerminar.setAttribute('onclick', `terminar(${i})`);

        tdNombres.innerHTML = p.nombres;
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);
        tdAcciones.appendChild(btnTerminar);

        tr.appendChild(tdNombres);
        tr.appendChild(tdAcciones);
        tablaPersonas.appendChild(tr);
    });
}

function editar(i) {
    const data = personasRegistradas[i];
    document.querySelectorAll('input').forEach(e => {
        e.value = data[e.getAttribute("id")];
    });
    txtId.value = i.toString();
}

function eliminar(i) {
    let newList = [];
    personasRegistradas.forEach((e, index) => {
        if (i.toString() != index.toString()) {
            newList.push(e);
        }
    });
    personasRegistradas = newList;
    actualizarTabla();
}

function terminar(i) {
    let newList = [];
    personasRegistradas.forEach((e, index) => {
        if (i.toString() != index.toString()) {
            newList.push(e);
        }
    });
    personasRegistradas = newList;
    actualizarTabla();
}