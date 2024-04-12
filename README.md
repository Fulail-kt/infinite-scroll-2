# Infinite Scroll

This project demonstrates an infinite scroll feature using React on the frontend and Node Express on the backend. It fetches data from the Pinkvilla English API and displays it in a scrollable list that loads more content as the user scrolls down.

## Features

- **Infinite scrolling:** Automatically loads more content as the user scrolls down.
- **React frontend:** Uses React for building the user interface.
- **Node Express backend:** Serves as the API endpoint for fetching data.
- **CORS support:** Handles Cross-Origin Resource Sharing for secure API requests.


### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/infinite-scroll-project.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd infinite-scroll-2
    ```

3. **Install dependencies:**

- Frontend

   ```bash
    cd client
   ```
    ```bash
    npm install
    ```

- Backend

   ```bash
    cd server
   ```
    ```bash
    npm install
    ```

5. **Setup Environment Variables

Create a `.env` file in the root directory of the `client and Server` folder. Add the following environment variables to the `.env` file:

### Frontend (client)

    FRONTEND_URL='Your Frontend URL'

### Backend (server)

    VITE_BASE_URL='Your Backend URL'



7. **Start the development server:**

### Frontend (client)

  ```bash
    npm run dev
   ```

### Backend (server)

  ```bash
    npm start
   ```


