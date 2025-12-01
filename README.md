# 🍔 Food Order Service — Backend API

Food Order Service — це REST API для платформи онлайн-замовлення їжі, створений на основі **NestJS**, **Prisma**, **PostgreSQL (Supabase)**.  
Проект реалізує повний функціонал: від користувачів і ресторанів до страв та оформлення замовлень.

---

## 🚀 Особливості

- 🔐 **Users** — створення та отримання користувачів  
- 🏬 **Restaurants** — CRUD для ресторанів  
- 🍣 **Dishes** — CRUD для страв, прив’язаних до ресторанів  
- 🛒 **Orders** — створення замовлень, розрахунок total, статуси  
- 🧾 **Order Items** — автоматичне створення позицій у замовленні  
- 📚 **Swagger документація**  
- 💾 **Prisma ORM + Supabase)**  

---

## 🏗️ Використані технології

| Технологія | Опис |
|-----------|------|
| **NestJS** | Основний backend фреймворк |
| **Prisma ORM** | Робота з базою даних |
| **Supabase** | Хмарна база даних |
| **TypeScript** | Статична типізація |
| **Swagger** | Автоматична API документація |

---

## 📂 Структура проекту

food-order-service/
│
├─ prisma/                 
│   ├─ migrations/        
│   ├─ prisma.module.ts  
│   ├─ prisma.service.ts  
│   └─ schema.prisma     
│
├─ src/
│   ├─ modules/            
│   │   ├─ users/          
│   │   │   ├─ users.controller.ts
│   │   │   ├─ users.service.ts
│   │   │   └─ dto/        
│   │   │
│   │   ├─ restaurants/    
│   │   │   ├─ restaurants.controller.ts
│   │   │   ├─ restaurants.service.ts
│   │   │   └─ dto/
│   │   │
│   │   ├─ dishes/       
│   │   │   ├─ dishes.controller.ts
│   │   │   ├─ dishes.service.ts
│   │   │   └─ dto/
│   │   │
│   │   ├─ orders/         # Модуль замовлень
│   │   │   ├─ orders.controller.ts
│   │   │   ├─ orders.service.ts
│   │   │   └─ dto/
│   │
│   ├─ app.controller.ts   # Кореневий контролер
│   ├─ app.module.ts       # Головний модуль програми
│   ├─ app.service.ts      # Базовий сервіс
│   └─ main.ts             # Точка входу NestJS

---

**🚀 Основні можливості**

**👤 Users**

- Створення користувачів

- Перегляд усіх користувачів

- Пошук користувача за ID

- Автоматична валідація даних

**🏬 Restaurants**

- CRUD операції

- Прив’язка страв

- Автоматичне видалення страв при видаленні ресторану

- Пошук за ID

**🍣 Dishes**

- CRUD для страв

- Прив’язка до ресторану через FK

- Пошук страв за рестораном

- Валідація полів (price, name, description)

**🛒 Orders**

- Створення замовлень

- Розрахунок total на основі цін страв

- Автоматичне створення OrderItems

- Отримання замовлень користувача
