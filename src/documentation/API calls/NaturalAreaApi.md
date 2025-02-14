# **📌 Documentación del NaturalAreaController**
## **Base URL:**  
📍 `https://mammal-excited-tarpon.ngrok-free.app/api/natural-area`

---

## **1️⃣ Insertar un área natural**  
🔹 **Descripción:** Agrega una nueva área natural en la base de datos.  
🔹 **Método:** `POST`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/insert?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "userId": 123,
  "naturalArea": {
    "name": "Reserva Natural El Paraíso",
    "location": "Argentina, Buenos Aires",
    "areaType": "Reserva Natural",
    "region": "Buenos Aires",
    "conservationStatus": "Crítico",
    "description": "Área protegida con alto valor ecológico.",
    "imageUrl": "https://example.com/image.jpg"
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Área natural insertada correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **2️⃣ Modificar un área natural**  
🔹 **Descripción:** Actualiza los datos de un área natural existente.  
🔹 **Método:** `PUT`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/update?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "userId": 123,
  "naturalArea": {
    "id": 1,
    "name": "Reserva Natural El Paraíso",
    "location": "Argentina, Buenos Aires",
    "areaType": "Reserva Natural",
    "region": "Buenos Aires",
    "conservationStatus": "Estable",
    "description": "Área protegida con ecosistema diverso.",
    "imageUrl": "https://example.com/image_updated.jpg"
  }
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Área natural actualizada correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **3️⃣ Eliminar un área natural**  
🔹 **Descripción:** Elimina un área natural por su ID.  
🔹 **Método:** `DELETE`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/delete?secret=TallerReact2025!
```
🔹 **Body (JSON):**  
```json
{
  "userId": 123,
  "naturalAreaId": 1
}
```
🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "Message": "Área natural eliminada correctamente"
}
```
🔹 **Errores posibles:**
- `403 Forbidden` → **Acceso denegado** (Código secreto incorrecto)
- `500 Internal Server Error` → **Error interno**

---

## **4️⃣ Listar áreas naturales**  
🔹 **Descripción:** Obtiene una lista de áreas naturales con paginación y filtros opcionales.  
🔹 **Método:** `GET`  
🔹 **Endpoint:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/list
```
🔹 **Parámetros (Query Params):**
| Parámetro        | Tipo   | Descripción                             |
|-----------------|--------|-----------------------------------------|
| `userId`        | int    | (Requerido) ID del usuario que consulta. |
| `keyword`       | string | (Opcional) Búsqueda por nombre o palabra clave. |
| `areaType`      | string | (Opcional) Filtrar por tipo de área. |
| `region`        | string | (Opcional) Filtrar por región. |
| `conservationStatus` | string | (Opcional) Filtrar por estado de conservación. |
| `page`          | int    | (Requerido) Número de página. |
| `pageSize`      | int    | (Requerido) Cantidad de resultados por página. |

🔹 **Ejemplo de solicitud:**  
```
https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/list?userId=123&page=1&pageSize=10
```

🔹 **Respuesta esperada:**  
```json
{
  "Success": true,
  "TotalRecords": 50,
  "Items": [
    {
      "id": 1,
      "name": "Reserva Natural El Paraíso",
      "location": "Argentina, Buenos Aires",
      "areaType": "Reserva Natural",
      "region": "Buenos Aires",
      "conservationStatus": "Crítico",
      "description": "Área protegida con alto valor ecológico.",
      "imageUrl": "https://example.com/image.jpg"
    }
  ]
}
```
🔹 **Errores posibles:**
- `500 Internal Server Error` → **Error interno**

---

📢 **Notas importantes:**
- **Todos los endpoints de `POST`, `PUT` y `DELETE` requieren `secret=TallerReact2025!` en la URL.**
- **Los métodos `POST`, `PUT` y `DELETE` requieren enviar un `body` en formato JSON con el `userId` y el objeto `NaturalArea`.**

