# **📌 Documentación del CommentController**
## **Base URL:**  
📍 `https://mammal-excited-tarpon.ngrok-free.app/api/comment`

---

## **1️⃣ Insertar un nuevo comentario**  
🔹 **Descripción:** Agrega un nuevo comentario a un área natural o especie.  
🔹 **Método:** `POST`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/comment/insert?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "comment": {
    "userId": 123,
    "naturalAreaId": 1,
    "speciesId": null,
    "comment": "Hermosa reserva natural, muy bien cuidada.",
    "rating": 5
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Comentario insertado correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **2️⃣ Modificar un comentario**  
🔹 **Descripción:** Actualiza un comentario existente.  
🔹 **Método:** `PUT`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/comment/update?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "comment": {
    "id": 1,
    "userId": 123,
    "naturalAreaId": 1,
    "speciesId": null,
    "comment": "Muy lindo, pero podría mejorar la señalización.",
    "rating": 4
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Comentario actualizado correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **3️⃣ Eliminar un comentario**  
🔹 **Descripción:** Elimina un comentario por su ID.  
🔹 **Método:** `DELETE`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/comment/delete?secret=TallerReact2025!
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
  "Message": "Comentario eliminado correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **4️⃣ Listar comentarios por entidad (Especie o Área Natural)**  
🔹 **Descripción:** Obtiene una lista de comentarios según el ID de una especie o área natural con paginación.  
🔹 **Método:** `GET`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/comment/byEntityId
```
🔹 **Parámetros (Query Params):**
| Parámetro        | Tipo   | Descripción                             |
|-----------------|--------|-----------------------------------------|
| `entityId`      | int    | (Requerido) ID de la especie o área natural. |
| `entityType`    | string | (Requerido) Tipo de entidad (`species` o `naturalArea`). |
| `page`          | int    | (Requerido) Número de página. |
| `pageSize`      | int    | (Requerido) Cantidad de resultados por página. |

🔹 **Ejemplo de solicitud:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/comment/byEntityId?entityId=1&entityType=naturalArea&page=1&pageSize=10
```

🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "TotalRecords": 15,
  "Items": [
    {
      "id": 1,
      "userId": 123,
      "comment": "Hermosa reserva natural, muy bien cuidada.",
      "rating": 5,
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
- **Los métodos `POST`, `PUT` y `DELETE` requieren enviar un `body` en formato JSON con el `userId` y el objeto `comment`.**

