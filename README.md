# 🎓 Webex it institute Backend (Express + Prisma + MongoDB)

A complete **Learning Management System (LMS)** and **Digital Product Marketplace** backend. This project includes **role-based authentication**, **course management**, **enrollment**, **payment integration**, **digital product sales**, **live sessions**, **exams & certificates**, and dedicated dashboards for **Admin**, **Mentor**, and **Student** roles.

---

## 🚀 Tech Stack

* **Backend**: Node.js, Express.js, TypeScript
* **Database**: MongoDB
* **ORM**: Prisma (MongoDB Adapter)
* **Authentication**: JWT-based authentication with role authorization
* **Validation**: Zod / Custom validation middleware
* **Payment Gateways (Planned / Integrated)**:

  * SSLCommerz
---

## 📂 Project Structure

```bash
src/
├── modules/
│   ├── users/
│   │   ├── admin/
│   │   ├── mentor/
│   │   ├── student/
│   │   └── user.route.ts
│   ├── courses/
│   ├── module/
│   ├── enrollment/
│   ├── payment/
│   ├── student-dashboard/
│
├── Middleware/
│   ├── user.middleware.ts
│   └── validation.ts
│
├── prisma/
│   └── schema.prisma
│
├── app.ts
└── server.ts
```

---

## 👥 User Roles

### ADMIN

* Manage users
* Publish / unpublish courses
* Assign mentors
* System level control

### MENTOR

* Create and manage courses
* Create modules and lessons
* Manage live sessions

### STUDENT

* Enroll in courses
* Access lessons
* Purchase digital products
* Access personal dashboard

---

## 🧩 Prisma Schema Overview

### Core Models

* `User`
* `Course`
* `Module`
* `Lesson`
* `Enrollment`
* `Order` & `Payment`
* `DigitalProduct`
* `LicenseKey`
* `Exam` & `Certificate`
* `Event` & `LiveSession`

### Enum-driven Design

* `UserRole`
* `ProductType`
* `PaymentMethod`
* `PaymentStatus`
* `MeetingPlatform`

---

## 🔐 Authentication & Authorization

* JWT token-based authentication
* Role-based access control using middleware

```ts
authenticate
authorize(["ADMIN", "MENTOR", "STUDENT"])
```

---

## 🌐 API Routes Overview

### Auth & User

```http
POST   /api/users/register
POST   /api/users/login
```

### Admin Routes

```http
GET    /api/users/admin
GET    /api/users/admin/:id
PUT    /api/users/admin/:id
DELETE /api/users/admin/:id
```

### Mentor Routes

```http
GET    /api/users/mentor
PUT    /api/users/mentor
POST   /api/users/mentor/courses
```

### Student Routes

```http
GET    /api/users/student
PUT    /api/users/student
```

---

## 📘 Course Management

```http
POST   /api/courses/create
GET    /api/courses
GET    /api/courses/:id
PUT    /api/courses/:id
DELETE /api/courses/:id
PATCH  /api/courses/publish/:id
POST   /api/courses/assign-mentor
```

---

## 📚 Module & Lesson Management

### Module

```http
POST   /api/modules/create-module
GET    /api/modules/course/:courseId
PUT    /api/modules/update-module/:id
DELETE /api/modules/delete-module/:id
PATCH  /api/modules/reorder/:courseId
```

### Lesson

```http
POST   /api/modules/create-lesson
GET    /api/modules/module/:moduleId
PUT    /api/modules/update-lesson/:id
DELETE /api/modules/delete-lesson/:id
```

---

## 🎓 Enrollment

```http
POST /api/enrollments/enroll
GET  /api/enrollments/check/:courseId
GET  /api/enrollments/my-courses
```

---

## 💳 Payment Flow

```http
POST /api/payment/initiate
POST /api/payment/success
POST /api/payment/fail
POST /api/payment/cancel
```

Flow:

1. Order is created
2. User is redirected to payment gateway
3. On success, course enrollment or product access is granted

---

## 📊 Student Dashboard

```http
GET /api/student-dashboard
```

Dashboard includes:

* Enrolled courses
* Course progress
* Purchased products
* Certificates

---

## ⚙️ Environment Variables

```env
DATABASE_URL=mongodb+srv://...
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## ▶️ Run Project Locally

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run in development mode
npm run dev
```

---

## 🛣️ Future Improvements

* Subscription-based access
* Advanced analytics dashboard
* Redis caching
* Prisma Accelerate
* Microservice-based payment handling
* Email / SMS / Push notifications

---

## 🧑‍💻 Author

Built with ❤️ for a scalable LMS & Digital Marketplace platform.

---

## 📄 License

This project is licensed under the **MIT License**.
