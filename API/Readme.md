# Correcciones Grupo 2

## Conexión con la base de datos

- Si bien la conexión se hace de una forma correcta:

````javascript
// Se usa createPool porque crea un conjunto de conexiones
import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '5826',
    port: 3306,
    database: 'OsitosCariniositos'
});
````

- Se sugiere que usen variables de entorno para proteger la información sensible como el host, el usuario, la contraseña y el nombre de la base de datos. Las variables de entorno son una excelente manera de proteger la información sensible y de configurar diferentes entornos (por ejemplo, desarrollo, pruebas, producción).

- Es buena práctica comprobar la conexión de la base de datos. Aquí hay un ejemplo de cómo podría ser:

````javascript
pool.connect((err) => {
    if (err) {
        console.error("No se pudo conectar con la base de datos: " + err);
        return;
    }
    console.log("Conexión exitosa.");
});
````

## Registro, Inicio de sesión y Cierre de sesión

- Recordar que no solo es registro e inicio de sesión, también es `Logout`.

## Esquemas y Modelos

El proyecto actualmente no cuenta con esquemas ni con modelos. Los esquemas son necesarios para validar los datos de entrada y garantizar que cumplen con las especificaciones requeridas. Por otro lado, los modelos son fundamentales para definir la estructura de los datos en nuestra base de datos.

