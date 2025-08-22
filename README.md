# **Blog API and Client Application** 📝

This project showcases a modern full-stack blog application, seamlessly integrating a robust **FastAPI** backend for efficient article management with a dynamic **React** frontend for an intuitive user experience. It highlights best practices in API design, data handling, and client-side interaction, making it an ideal reference for full-stack development. 🚀

## Getting Started

To get this project up and running on your local machine, follow these steps:

### ⚙️ Prerequisites
Ensure you have the following installed:
-   Python (version 3.11 or higher)
-   Bun (recommended for frontend, or npm/yarn)
-   Git

### 🚀 Backend Setup

1.  **Clone the Repository:**
    ```bash
    git clone git@github.com:struckchure/frontend-the-right-way.git
    cd frontend-the-right-way
    ```
2.  **Create a Virtual Environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3.  **Install Backend Dependencies:**
    ```bash
    pip install "fastapi[standard]"
    ```

### 🌐 Frontend Setup

1.  **Navigate to Client Directory:**
    ```bash
    cd client
    ```
2.  **Install Frontend Dependencies:**
    Using Bun (as specified in `.cta.json`):
    ```bash
    bun install
    ```
    Alternatively, using npm:
    ```bash
    npm install
    ```
    Or Yarn:
    ```bash
    yarn install
    ```

## Usage

Once the project is installed, you can run both the backend API and the frontend client.

### ▶️ Running the Backend API

1.  **Start the FastAPI server:**
    Ensure your virtual environment is active (from backend setup steps).
    ```bash
    uvicorn main:app --reload
    ```
    The API will be accessible at `http://127.0.0.1:8000`.

### ▶️ Running the Frontend Client

1.  **Start the React development server:**
    Navigate to the `client` directory.
    ```bash
    cd client
    bun dev
    ```
    The frontend application will typically open in your browser at `http://localhost:3000`.

### 🔑 Default Credentials

For logging into the application:
-   **Username**: `admin`
-   **Password**: `admin`

Use these credentials to authenticate and create new articles via the frontend interface.

## API Documentation

### Base URL
`http://127.0.0.1:8000`

### Environment Variables
These variables can be set to configure the API credentials.

- `API_USERNAME`: Username for API authentication.
  *Example*: `admin`
- `API_PASSWORD`: Password for API authentication.
  *Example*: `admin`

### Endpoints

#### `POST /login`
Authenticates a user and returns an access token.

**Request**:
```json
{
  "username": "string",
  "password": "string"
}
```

**Response**:
*Success (200 OK)*
```json
{
  "token": "admin:admin"
}
```

**Errors**:
- `401 Unauthorized`: Invalid credentials.
- `422 Unprocessable Entity`: Validation error for request payload.

#### `GET /articles`
Retrieves a list of all articles.

**Request**:
(No payload required)

**Response**:
*Success (200 OK)*
```json
[
  {
    "id": 1,
    "title": "My First Article",
    "body": "This is the content of my first article."
  },
  {
    "id": 2,
    "title": "Another Great Read",
    "body": "More insightful content to share with the world."
  }
]
```

**Errors**:
- `422 Unprocessable Entity`: Validation error if query parameters are unexpected.

#### `POST /articles`
Creates a new article. Requires authentication.

**Request**:
```json
{
  "title": "string",
  "body": "string"
}
```

**Response**:
*Success (200 OK)*
(No content)

**Errors**:
- `401 Unauthorized`: Invalid authentication token.
- `422 Unprocessable Entity`: Validation error for request payload (e.g., title/body too short).

## Features ✨

-   **User Authentication**: Secure login functionality using a simple bearer token mechanism.
-   **Article Management**: Create and view articles through a comprehensive API.
-   **Modern Frontend**: Developed with React and TanStack Router for dynamic client-side routing.
-   **Data Fetching & State Management**: Utilizes TanStack Query for efficient data fetching, caching, and synchronization.
-   **Responsive UI**: Styled with Tailwind CSS and Shadcn UI components for a clean and adaptive user interface.
-   **Automated API Client Generation**: Employs Kubb to generate TypeScript API clients from OpenAPI specifications, ensuring type safety and reducing manual work.
-   **Input Validation**: Robust client-side validation using Zod schemas for article creation.

## Technologies Used 🛠️

| Category   | Technology                                                                     | Description                                                 |
| :--------- | :----------------------------------------------------------------------------- | :---------------------------------------------------------- |
| **Backend** | [Python](https://www.python.org/)                                              | Primary programming language.                               |
|            | [FastAPI](https://fastapi.tiangolo.com/)                                       | High-performance web framework for building APIs.           |
|            | [Pydantic](https://docs.pydantic.dev/latest/)                                  | Data validation and settings management.                    |
| **Frontend** | [TypeScript](https://www.typescriptlang.org/)                                  | Statically typed superset of JavaScript.                    |
|            | [React](https://react.dev/)                                                    | JavaScript library for building user interfaces.            |
|            | [Vite](https://vitejs.dev/)                                                    | Next-generation frontend tooling.                           |
|            | [TanStack Router](https://tanstack.com/router/latest)                          | Type-safe routing library for React applications.           |
|            | [TanStack Query](https://tanstack.com/query/latest)                            | Powerful asynchronous state management for React.           |
|            | [Tailwind CSS](https://tailwindcss.com/)                                       | Utility-first CSS framework for rapid UI development.       |
|            | [Shadcn UI](https://ui.shadcn.com/)                                            | Reusable UI components built with Radix UI and Tailwind CSS. |
|            | [Kubb](https://kubb.dev/)                                                      | OpenAPI code generator for TypeScript clients.              |
| **Other**  | [Bun](https://bun.sh/)                                                         | Fast all-in-one JavaScript runtime (package manager, bundler). |

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

-   ⭐ **Fork** the repository.
-   🌿 Create a new **branch** (`git checkout -b feature/AmazingFeature`).
-   🛠️ Make your **changes** and ensure tests pass.
-   ➕ **Commit** your changes (`git commit -m 'feat: Add amazing feature'`).
-   ⬆️ **Push** to the branch (`git push origin feature/AmazingFeature`).
-   📝 Open a **Pull Request**.

Please ensure your code adheres to the project's coding standards.

## License

This project is not currently licensed. Please contact the author for more information.

## Author 👤

-   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
-   **Twitter**: [Your Twitter Handle](https://twitter.com/your-handle)

## Badges

![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116.1-009688?style=flat&logo=fastapi)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Components-000000?style=flat&logo=react&logoColor=white)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)