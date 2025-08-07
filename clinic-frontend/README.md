
# Clinic Appointment Management System

A full-stack web application that allows users to book doctor appointments online. Built with **React.js** for the frontend and **Django REST Framework** for the backend. Includes a Postman collection to test all API endpoints.

---

## 🧾 Project Structure

```
project/
├── clinic_project(backend)                # Django backend project 
├── clinic-frontend                # React frontend app
├── clinic_management/clinic_apis.postman_collection      # Postman collection and API documentation folder
├── README.md
```

---

## ⚙️ Backend (Django) Setup

### Prerequisites:
- Python 3.x
- pip

### Steps:
1. Navigate to the backend directory:
    ```bash
    cd clinic_project
    ```

2. Create and activate virtual environment:
    ```bash
    python -m venv env
    env\Scripts\activate   # (Windows)
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run migrations:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

5. Create a superuser to access Django admin:
    ```bash
    python manage.py createsuperuser
    ```

6. Start the development server:
    ```bash
    python manage.py runserver
    ```

---

## 🌐 Frontend (React) Setup

### Prerequisites:
- Node.js
- npm

### Steps:
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

---

## 🔌 API Endpoints (using Django REST Framework)

### Auth:
- `POST /login/` – User login and returns a token

### Doctors:
- `GET /doctors/` – Retrieve list of doctors

### Appointments:
- `GET /appointments/` – View user’s appointments
- `POST /appointments/` – Book a new appointment

> ⚠️ Token Authentication required for protected routes. Include the token in headers as:
```
Authorization: Token <your_token_here>
```

---

## 📬 Postman Collection

All API endpoints are documented in the Postman collection file located at:
```
clinic_management/Clinic_API_Collection.json
```

To use:
1. Open Postman.
2. Click **Import** → Choose the JSON file.
3. Use the predefined environment (if included) or manually set the base URL as `http://127.0.0.1:8000`.

---

## 🧪 Testing the App

- Test APIs via Postman using the token received from `/login/`
- Check console/network tab in browser for frontend errors
- Inspect backend via Django admin panel: `http://127.0.0.1:8000/admin/`

---

## 👤 Author

- **Sreelakshmi C U**  
- GitHub: [sreelakshmicu](https://github.com/sreelakshmicu)  

---

## ✅ Status

Project complete with frontend, backend, and API documentation. Ready for deployment or enhancement.
