# Hospital Appointment System

This project is a hospital appointment system developed with React. It includes basic functions such as patient, doctor and appointment management.

## Security Measures

*   **Authorization and Authentication**: User access to the system is controlled by authentication and authorization mechanisms.
*   **JWT Bearer Token**: User identities are securely verified with JWT (JSON Web Token). This token is used for authorization and session management.
*   **Data Security**: Sensitive data is stored and transmitted in encrypted form. Unauthorized access to the database is prevented.
*   **Input Validation**: User inputs are validated and sanitized to prevent security vulnerabilities.
*   **Dependency Management**: All dependencies used in the project are regularly updated and checked for security vulnerabilities.
*   **Security Tests**: The application is regularly subjected to security tests and potential security vulnerabilities are identified and resolved.

## Technologies Used

*   **Front-end**: React (Latest Version)
*   **Back-end**: Spring Boot 3.4.2
*   **Database**: Mysql 8.0
*   **Build Tool**: Maven 4.0.0
*   **Java Version**: 23

## Installation

1.  Clone the repository:
   ```bash
   git clone [https://github.com/mehmetali-ozturk/hospital-appointment.git](https://www.google.com/search?q=https://github.com/mehmetali-ozturk/hospital-appointment.git)
 ```
2.  Go to the project directory:

    ```bash
    cd hospital-appointment-system
    ```
3.  Install dependencies:

    ```bash
    mvn install
    ```
4.  Run the application:

    ```bash
    mvn spring-boot:run
    ```

## Usage

1.  After running the application, go to `http://localhost:8080` in your web browser.
2.  Log in with your username and password.
3.  JWT Bearer Token will be automatically retrieved and used in subsequent requests.
4.  You can make appointments.

## Contributing

Contributions are welcome! Please contribute to the project by sending pull requests or opening issues.
