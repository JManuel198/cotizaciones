// Vistas y sub-vistas de la sección de contactos

function mostrarListado() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <!-- Header 1: título y breadcrumb -->
    <div class="view-header">
        <h2 class="view-header__title">Listado de contactos</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Contacto</span>
    </div>

    <!-- Header 2: acciones -->
    <div class="view-subheader">
        <button class="btn btn--primary btn--sm" id="btn-nuevo">
        + Nuevo
        </button>
        <input class="form-input view-subheader__search" 
                type="text" 
                placeholder="Buscar..." 
                disabled />
        <div class="view-subheader__pagination">
            <button class="btn btn--secondary btn--sm" disabled>&#8249;</button>
            <span class="view-subheader__page">Página 1</span>
            <button class="btn btn--secondary btn--sm" disabled>&#8250;</button>
        </div>
    </div>

    <!-- Tabla de contactos -->
    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre completo</th>
                    <th>Empresa</th>
                    <th>Puesto de trabajo</th>
                    <th>Número de tel.</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody id="tabla-contactos">
                <!-- Los registros se cargan acá cuando haya backend -->
                <tr>
                    <td colspan="5" class="table__empty">
                    No hay contactos registrados todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
`

  // Conectar el botón Nuevo DESPUÉS de inyectar el HTML
  // porque antes de esto el botón no existe en el DOM
    document.getElementById('btn-nuevo')
    .addEventListener('click', mostrarFormulario)
}


function mostrarFormulario() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <!-- Header único: título y subtítulo -->
    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nuevo contacto</h2>
        <p class="view-header__subtitle">
        Completa los campos para crear un nuevo contacto.
        </p>
    </div>

    <!-- Formulario de dos columnas -->
    <form id="form-contacto" class="form-contacto">

        <!-- Columna izquierda -->

        <div class="form-contacto__col">
            <div class="form-group">
                <label class="form-label" for="nombre">Nombre</label>
                <input class="form-input" type="text" id="nombre"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="apellidos">Apellidos</label>
                <input class="form-input" type="text" id="apellidos"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="cargo">Cargo</label>
                <input class="form-input" type="text" id="cargo"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="empresa">Empresa</label>
                <input class="form-input" type="text" id="empresa"/>
            </div>
        </div>

        <!-- Columna derecha -->

        <div class="form-contacto__col">
            <div class="form-group">
                <label class="form-label" for="tel-personal">Teléfono personal</label>
                <input class="form-input" type="text" id="tel-personal"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="tel-trabajo">Teléfono de trabajo</label>
                <input class="form-input" type="text" id="tel-trabajo"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="correo-personal">Correo personal</label>
                <input class="form-input" type="email" id="correo-personal"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="correo-trabajo">Correo de trabajo</label>
                <input class="form-input" type="email" id="correo-trabajo"/>
            </div>
        </div>

        <!-- Botones -->
        <div class="form-contacto__actions">
            <button class="btn btn--secondary" type="button" id="btn-cancelar">
            Cancelar
            </button>
            <button class="btn btn--primary" type="submit">
            Crear
            </button>
        </div>

    </form>

    `

  // Conectar el botón Cancelar DESPUÉS de inyectar el HTML
    document.getElementById('btn-cancelar')
    .addEventListener('click', mostrarListado)
}