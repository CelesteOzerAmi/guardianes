# **📌 Documentación del ConservationActivityController**
## **Base URL:**  
📍 `https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity`

---

## **1️⃣ Insertar una nueva actividad de conservación**  
🔹 **Descripción:** Agrega una nueva actividad de conservación en la base de datos.  
🔹 **Método:** `POST`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity/insert?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "conservationActivity": {
    "naturalAreaId": 1,
    "description": "Plantación de árboles autóctonos",
    "date": "2024-02-10"
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Actividad de conservación insertada correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **2️⃣ Modificar una actividad de conservación**  
🔹 **Descripción:** Actualiza los datos de una actividad de conservación existente.  
🔹 **Método:** `PUT`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity/update?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "conservationActivity": {
    "id": 1,
    "naturalAreaId": 1,
    "description": "Mantenimiento de senderos ecológicos",
    "date": "2024-02-15"
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Actividad de conservación actualizada correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **3️⃣ Eliminar una actividad de conservación**  
🔹 **Descripción:** Elimina una actividad de conservación por su ID.  
🔹 **Método:** `DELETE`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity/delete?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "userId": 123,
  "id": 1
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Actividad de conservación eliminada correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **4️⃣ Listar actividades de conservación por usuario**  
🔹 **Descripción:** Obtiene una lista de actividades de conservación registradas por un usuario con paginación.  
🔹 **Método:** `GET`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity/byUser
```
🔹 **Parámetros (Query Params):**
| Parámetro        | Tipo   | Descripción                             |
|-----------------|--------|-----------------------------------------|
| `userId`        | int    | (Requerido) ID del usuario que consulta. |
| `page`          | int    | (Requerido) Número de página. |
| `pageSize`      | int    | (Requerido) Cantidad de resultados por página. |

🔹 **Ejemplo de solicitud:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity/byUser?userId=123&page=1&pageSize=10
```

🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "TotalRecords": 15,
  "Items": [
    {
      "id": 1,
      "naturalAreaId": 1,
      "description": "Plantación de árboles autóctonos",
      "date": "2024-02-10"
    }
  ]
}
```
🔹 **Errores posibles:**
- `500 Internal Server Error` → **Error interno**

---

📢 **Notas importantes:**
- **Todos los endpoints de `POST`, `PUT` y `DELETE` requieren `secret=TallerReact2025!` en la URL.**
- **Los métodos `POST`, `PUT` y `DELETE` requieren enviar un `body` en formato JSON con el `userId` y el objeto `conservationActivity`.**

