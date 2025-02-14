# **📌 Documentación del SpeciesController**
## **Base URL:**  
📍 `https://mammal-excited-tarpon.ngrok-free.app/api/species`

---

## **1️⃣ Insertar una nueva especie**  
🔹 **Descripción:** Agrega una nueva especie en la base de datos.  
🔹 **Método:** `POST`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/species/insert
```
🔹 **Body (JSON):**  
```json
{
  "userId": 123,
  "species": {
    "commonName": "Jaguar",
    "scientificName": "Panthera onca",
    "category": "Mamífero",
    "conservationStatus": "En peligro",
    "naturalAreaId": 1
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Especie insertada correctamente"
}
```
🔹 **Errores posibles:**
- `500 Internal Server Error` → **Error interno**

---

## **2️⃣ Modificar una especie**  
🔹 **Descripción:** Actualiza los datos de una especie existente.  
🔹 **Método:** `PUT`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/species/update
```
🔹 **Body (JSON):**  
```json
{
  "userId": 123,
  "species": {
    "id": 1,
    "commonName": "Jaguar",
    "scientificName": "Panthera onca",
    "category": "Mamífero",
    "conservationStatus": "Vulnerable",
    "naturalAreaId": 1
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Especie actualizada correctamente"
}
```
🔹 **Errores posibles:**
- `500 Internal Server Error` → **Error interno**

---

## **3️⃣ Eliminar una especie**  
🔹 **Descripción:** Elimina una especie por su ID.  
🔹 **Método:** `DELETE`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/species/delete
```
🔹 **Body (JSON):**  
```json
{
  "userId": 123,
  "speciesId": 1
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Especie eliminada correctamente"
}
```
🔹 **Errores posibles:**
- `500 Internal Server Error` → **Error interno**

---

## **4️⃣ Listar especies por usuario**  
🔹 **Descripción:** Obtiene una lista de especies registradas por un usuario con paginación.  
🔹 **Método:** `GET`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/species/byUser
```
🔹 **Parámetros (Query Params):**
| Parámetro        | Tipo   | Descripción                             |
|-----------------|--------|-----------------------------------------|
| `userId`        | int    | (Requerido) ID del usuario que consulta. |
| `page`          | int    | (Requerido) Número de página. |
| `pageSize`      | int    | (Requerido) Cantidad de resultados por página. |

🔹 **Ejemplo de solicitud:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/species/byUser?userId=123&page=1&pageSize=10
```

🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "TotalRecords": 25,
  "Items": [
    {
      "id": 1,
      "commonName": "Jaguar",
      "scientificName": "Panthera onca",
      "category": "Mamífero",
      "conservationStatus": "Vulnerable",
      "naturalAreaId": 1
    }
  ]
}
```
🔹 **Errores posibles:**
- `500 Internal Server Error` → **Error interno**

---

## **5️⃣ Listar todas las especies**  
🔹 **Descripción:** Obtiene una lista de todas las especies con filtros y paginación.  
🔹 **Método:** `GET`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/species/listV
```
🔹 **Parámetros (Query Params):**
| Parámetro        | Tipo   | Descripción                             |
|-----------------|--------|-----------------------------------------|
| `keyword`       | string | (Opcional) Búsqueda por nombre común o científico. |
| `category`      | string | (Opcional) Filtrar por categoría. |
| `conservationStatus` | string | (Opcional) Filtrar por estado de conservación. |
| `naturalAreaId` | int    | (Opcional) Filtrar por área natural. |
| `page`          | int    | (Requerido) Número de página. |
| `pageSize`      | int    | (Requerido) Cantidad de resultados por página. |

🔹 **Ejemplo de solicitud:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/species/listV?page=1&pageSize=10
```

🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "TotalRecords": 50,
  "Items": [
    {
      "id": 1,
      "commonName": "Jaguar",
      "scientificName": "Panthera onca",
      "category": "Mamífero",
      "conservationStatus": "Vulnerable",
      "naturalAreaId": 1
    }
  ]
}
```
🔹 **Errores posibles:**
- `500 Internal Server Error` → **Error interno**

---

📢 **Notas importantes:**
- **Todos los métodos `POST`, `PUT` y `DELETE` requieren un `body` con `userId` y el objeto `species`.**

