# FoxesSMS

## Overview

**FoxesSMS** is a powerful and scalable **SaaS platform** that allows users to **purchase virtual phone numbers from multiple countries** and use them as personal SIM numbers for receiving SMS and verification codes.

The platform is designed for both **end-users** and **developers**:

- Individuals can buy and manage virtual numbers directly from the dashboard.
- Developers and businesses can integrate FoxesSMS via a **public API** to build their own SaaS products, automation tools, or verification systems.

FoxesSMS focuses on **reliability, security, scalability, and API-first architecture**, following real-world SaaS and enterprise development practices.

---

## Key Features

### Virtual Phone Numbers

- Purchase virtual phone numbers from multiple countries:
    - United Kingdom (UK)
    - United States (USA)
    - United Arab Emirates (UAE)
    - France
    - Germany
    - Brazil
    - China
    - And more

- Use virtual numbers as personal SIM cards
- Receive SMS in real time
- Number lifecycle management (active, expired, released)

### User Management

- Secure user authentication
- User profile & account management
- Balance & credit management
- Usage history and logs

### Payments & Billing

- Online payments integration
- Wallet / balance-based billing system
- Transaction history
- Automated billing for number purchases

### API Platform (Core SaaS Feature)

- Public REST API for developers
- API key management
- Endpoints to:
    - Purchase virtual numbers
    - Receive SMS messages
    - Manage numbers programmatically

- Designed for building third-party SaaS products

### Admin & Monitoring

- Admin dashboard for system monitoring
- User & transaction management
- Number provider management
- Logs & activity tracking

---

## Tech Stack

### Backend / Full-stack Framework

- **Laravel** (PHP)
- **Inertia.js**

### Frontend

- **React.js**
- **Tailwind CSS**

### APIs & Integrations

- Virtual number provider APIs
- FoxesSMS Public API (resold & exposed to clients)

### Security & Services

- API key authentication
- Rate limiting
- Secure payment handling

### Database

- **MySQL** (or any Laravel-supported database)

### Tooling

- Vite
- Axios
- Composer
- npm / Yarn

---

## Screenshots

> Application screenshots and API usage previews will be added here.

```
📸 User dashboard
📸 Virtual number purchase flow
📸 SMS inbox
📸 API keys management
📸 Admin monitoring panel
```

---

## Installation Guide

### Requirements

- PHP >= 8.1
- Composer
- Node.js & npm (or Yarn)
- MySQL (or compatible DB)

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/foxessms.git
cd foxessms
```

---

### 2. Install backend dependencies

```bash
composer install
```

---

### 3. Install frontend dependencies

```bash
npm install
# or
yarn install
```

---

### 4. Environment configuration

Copy the environment file:

```bash
cp .env.example .env
```

Configure the following in `.env`:

- Database credentials
- Payment gateway keys
- Virtual number provider API credentials
- FoxesSMS API settings

Generate the application key:

```bash
php artisan key:generate
```

---

### 5. Run migrations

```bash
php artisan migrate
```

---

### 6. Seed the database (optional)

```bash
php artisan db:seed
```

To run a specific seeder:

```bash
php artisan db:seed --class=SeederName
```

---

### 7. Using factories (optional)

```bash
php artisan tinker
```

```php
\App\Models\VirtualNumber::factory()->count(10)->create();
```

---

### 8. Start the development servers

Backend (Laravel):

```bash
php artisan serve
```

Frontend (Vite / React):

```bash
npm run dev
# or
yarn dev
```

---

## API Documentation (Overview)

FoxesSMS provides a **developer-friendly REST API**.

Key concepts:

- API Key authentication
- JSON-based responses
- Rate limiting

Example use cases:

- Build your own SMS verification SaaS
- Automate account verification workflows
- Integrate virtual numbers into third-party platforms

> Full API documentation can be provided separately.

---

## Architecture Highlights

- API-first SaaS architecture
- Scalable service-based backend
- Secure billing & credit system
- Clean separation between user, admin, and API layers

This project demonstrates **real SaaS product design**, not just a demo application.

---

## Future Improvements

- Webhooks for SMS events
- Advanced analytics & usage reports
- Subscription plans
- Multi-currency billing

---

## Contribution

Contributions are welcome.

- Fork the repository
- Create a feature branch
- Submit a pull request

---

## License

This project is intended for portfolio and demonstration purposes.

---

© 2026 – FoxesSMS
