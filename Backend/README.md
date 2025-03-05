# Backend API Documentation

## `/users/register` Endpoint

## Description

This endpoint registers a new user into the system. It expects user details in the request body, hashes the password, creates a user record, and returns a JSON Web Token (JWT) for authentication.

## HTTP Method

`POST`

## Request

### Body Parameters

- **fullname**: an object containing:
  - **firstname**: string (required, at least 3 characters)
  - **lastname**: string (optional, at least 3 characters if provided)
- **email**: string (required, must be a valid email)
- **password**: string (required, at least 6 characters)

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Response

- **fullname**: an object containing:
  - **firstname**: string (required, at least 3 characters)
  - **lastname**: string (optional, at least 3 characters if provided)
- **email**: string (required, must be a valid email)
- **password**: string (required, at least 6 characters)
- **token**: (string): JWT token

## `/users/login` Endpoint

## Description

This endpoint logs in an existing user. It authenticates the user based on the provided email and password and returns a JSON Web Token (JWT) for subsequent authenticated requests.

## HTTP Method

`POST`

## Request

### Body Parameters

- **email**: string (required, must be a valid email)
- **password**: string (required, at least 6 characters)

#### Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Response

- **fullname**: an object containing:
  - **firstname**: string (required, at least 3 characters)
  - **lastname**: string (optional, at least 3 characters if provided)
- **email**: string (required, must be a valid email)
- **password**: string (required, at least 6 characters)
- **token**: (string): JWT token

## `/users/profile` Endpoint

## Description

This endpoint retrieves the profile information of the authenticated user. It requires a valid JWT token in the request header.

## HTTP Method

`GET`

## Request

### Headers

- `Authorization`: `Bearer <token>` (required)

## Response

- **fullname**: an object containing:
  - **firstname**: string
  - **lastname**: string
- **email**: string
- **\_id**: string (user ID)

## `/users/logout` Endpoint

## Description

This endpoint logs out the authenticated user by invalidating the JWT token. It requires a valid JWT token in the request header or cookies.

## HTTP Method

`GET`

## Request

### Headers

- `Authorization`: `Bearer <token>` (required)

### Cookies

- `token`: JWT token (optional, if not provided in headers)

## Response

- `message`: string (Logout confirmation message)
