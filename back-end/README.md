# Express.js Project

Project backend sederhana menggunakan Express.js dan Node.js.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- JavaScript
- dotenv
- Nodemon

---

## 📦 Installation

Clone repository:

```bash
git clone <repository-url>
cd <project-name>
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Project ini menggunakan file environment variable.

Copy file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Untuk Windows CMD:

```bash
copy .env.example .env
```

Contoh isi `.env`:

```env
APP_PORT=3000
```

---

## ▶️ Run Project

Menjalankan server production:

```bash
npm start
```

Menjalankan server development:

```bash
npm run dev
```

---

## 📁 Project Structure

```txt
.
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── app.js
│
├── .env
├── .env.example
├── .gitignore
├── server.js
├── package.json
└── README.md
```

---

## 📜 Available Scripts

### Start production server

```bash
npm start
```

### Start development server with auto reload

```bash
npm run dev
```

---

## 🛠️ API Endpoint

### Health Check

#### Request

```http
GET /api/health
```

#### Success Response

```json
{
  "success": true,
  "message": "Health check successful!"
}
```

---

## 🧪 Development Setup

Install nodemon:

```bash
npm install -D nodemon
```

Contoh `package.json` scripts:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 🔒 Environment Notes

- Jangan commit file `.env`
- Gunakan `.env.example` sebagai template environment variable
- Simpan credential dan secret hanya di `.env`

---

## 📄 License

MIT