<!-- for backend -->
scout-and-guide -> cd backend -> npm start

<!-- for frontend -->
scout-and-guide -> cd frontend -> npm run dev

<!-- Let's Start -->

Key Backend Actions & Services
User Authentication & Authorization



Action: Handle user registration and login for schools, volunteers, donors, and admins.
Functionality:

Allow users to register (create accounts) and log in.

Different user roles: schools, volunteers, donors, and admins.

Implement authentication (via JWT tokens) and role-based authorization for accessing specific pages or features.
Example APIs:
POST /auth/signup: Register a user (role-based registration: school, volunteer, donor).
POST /auth/login: Authenticate and generate a token.
School Registration & Management

Action: Schools need to register for training programs, update their information, and view progress.
Functionality:
Store school data, including name, contact details, and number of students.
Schools should be able to register for programs and view their training progress.
Admin should be able to approve or reject school registrations.
Example APIs:
POST /schools/register: Register a new school for programs.
GET /schools: Retrieve a list of all registered schools.
PUT /schools/:id: Update school information.
Volunteer Registration & Management

Action: Volunteers should register, choose their role, and manage their profile.
Functionality:
Store volunteer data, including skills, interests, and availability.
Volunteers can register to help with programs and manage their profiles.
Admin can assign roles and approve volunteer applications.
Example APIs:
POST /volunteers/register: Register a new volunteer.
GET /volunteers: List all volunteers.
Program Enrollment & Management

Action: Schools and individuals can enroll in various programs offered by the NGO.
Functionality:
List available programs (e.g., leadership training, digital learning).
Schools and individuals can enroll in these programs.
Admins can view enrollments and manage participation.
Example APIs:
GET /programs: Retrieve a list of available programs.
POST /programs/enroll: Enroll a school or individual in a program.
Donation Management & Payment Handling

Action: Allow users to donate and manage payment records.
Functionality:
Users can make donations (one-time or recurring).
Track donation records, donor profiles, and total amounts raised.
Integrate a payment gateway (e.g., Razorpay or Stripe) for processing donations and school program fees.
Example APIs:
POST /donations/make: Process a donation through the payment gateway.
GET /donations: Retrieve all donation records.
Event Management

Action: Manage events such as workshops, training camps, and other activities.
Functionality:
Create and manage events, including location, dates, and registration.
Schools, students, and volunteers can register for events.
Admin can update event details and manage attendees.
Example APIs:
POST /events/create: Create a new event.
GET /events: List all upcoming events.
POST /events/register: Register for an event.
Content Management

Action: Manage content such as programs, blog posts, FAQs, and testimonials.
Functionality:
Admins can add/edit/delete content such as program details, blog posts, FAQ questions, and testimonials.
Example APIs:
POST /content/create: Create new content (e.g., program or blog post).
PUT /content/:id: Update content.
DELETE /content/:id: Remove content.
Email & Notification System

Action: Send confirmation emails and notifications for registrations, donations, or event participation.
Functionality:
Send automated email notifications to users after they register or make donations.
Notify users about upcoming events and payment confirmations.
Example APIs:
POST /notifications/send: Send an email notification to a user.
Backend Development Checklist
User Management:

Handle registration and authentication for schools, volunteers, donors, and admins.
Implement role-based access control (RBAC).
Database Setup:

Design tables/collections for:
Users (Schools, Volunteers, Donors, Admins)
Programs
Enrollments
Donations
Events
MongoDB or PostgreSQL can be used for storing this data.
Payment Gateway Integration:

Set up Razorpay or Stripe to process donations and school registration payments.
Ensure secure handling of payments and store transaction details.
API Endpoints:

Build RESTful API endpoints for the above actions.
Test the API using tools like Postman.
Admin Dashboard:

Implement admin routes for managing content, schools, volunteers, donations, and events.
Security & Data Protection:

Implement proper authentication (JWT tokens).
Ensure data protection and security compliance (e.g., for donations).
Suggested Backend Tools/Technologies
Framework: Node.js + Express.js
Database: MongoDB / PostgreSQL (depending on choice)
Authentication: JWT (JSON Web Tokens)
Payment Gateway: Razorpay / Stripe API
Email Service: Nodemailer / SendGrid for notifications
API Testing: Postman