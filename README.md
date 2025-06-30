# Discord Batch Launcher Bot (TypeScript)  
## Дискорд-бот для запуску .bat файлів (TypeScript)

A Discord bot built with **TypeScript** that can remotely launch a `.bat` (batch) file on the host machine via a Discord command.

> ⚠️ **Important**: This bot executes system-level scripts. Use it **only in private environments** and **restrict access** to trusted users.

---

Дискорд-бот, створений за допомогою **TypeScript**, який може запускати `.bat` файл на машині-хості за командою з Discord.

> ⚠️ **Увага**: Бот виконує системні скрипти. Використовуйте **лише у приватному середовищі** з обмеженим доступом для надійних користувачів.

---

## 📦 Features / Можливості

- Command: `!launch` – executes a predefined `.bat` file  
- Команда: `!launch` – виконує заздалегідь визначений `.bat` файл
- Built with `discord.js`, TypeScript, and Node.js  
- Побудований на основі `discord.js`, TypeScript та Node.js
- User access control by Discord ID  
- Обмеження доступу за Discord ID

---

## 🛠️ Setup Instructions / Інструкції з налаштування

### 1. Clone and Install / Клонування і встановлення

```bash
git clone https://github.com/your-username/discord-batch-launcher.git
cd discord-batch-launcher
npm install
```

### 2. Configure Environment / Налаштуйте середовище

Create a `.env` file / Створіть файл `.env`:

```
DISCORD_TOKEN = your_discord_bot_token
ALLOWED_USER_ID = your_discord_user_id
```

### 3. Add Batch File / Додайте .bat файл

Create a `launch.bat` in the root:

```bat
@echo off
echo Batch file executed!
pause
```

> Modify the path in `src/index.ts` if necessary.  
> Змініть шлях до файлу в `src/index.ts`, якщо потрібно.

---

## 🚀 Run the Bot / Запуск бота

For development / Для розробки:

```bash
npx ts-node src/index.ts
```

Or compile and run / Або зкомпілювати та запустити:

```bash
npx tsc
node dist/index.js
```

---

## 📄 Commands / Команди

| Command / Команда | Description / Опис             |
|-------------------|---------------------------------|
| `!launch`         | Launches the batch file / Запускає .bat файл |

---

## 🧱 Project Structure / Структура проєкту

```
project/
├── .env
├── launch.bat
├── package.json
├── tsconfig.json
└── src/
    └── index.ts
```

---

## ⚠️ Disclaimer / Застереження

Use with caution. This bot can execute code on your machine.  
> Використовуйте з обережністю. Бот може виконувати команди на вашій машині.

Do **NOT** expose it to public servers.  
> **НЕ** використовуйте бота на публічних серверах.

---

## 📜 License / Ліцензія

MIT License © 2025 Dmytro