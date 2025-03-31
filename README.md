# OpenRouter AI Chat (Node.js + Express)

This is a secure, full-stack AI chatbot built using:

- 🟢 Node.js + Express (backend)
- 🧠 OpenRouter AI API (Mistral model)
- 💬 Frontend UI in HTML + Bootstrap

---

## 📸 Preview

<img src="https://github.com/jananitkt/openrouter-node-ai-chat/blob/main/openrouter-ai.png" alt="openrouter-ai UI Screenshot" width="100%" />

---

## 🔐 API Security

OpenRouter does **not support frontend-only API usage**. This project uses a secure backend proxy (Node.js) to protect your API key.

---

## 🚀 How to Run This Project

### 🧰 Prerequisites

- Node.js 18+ (tested on Node 21)
- macOS/Linux/Windows

---

### 📦 Installation

1. Clone this repo or unzip the files:

```bash
git clone https://github.com/your-username/openrouter-node-express.git
cd openrouter-node-express
```

2. Install required packages:

```bash
npm install express cors node-fetch
```

---

### 🔧 Add Your API Key

In `server.mjs`, replace this line:

```js
const OPENROUTER_API_KEY = "YOUR_API_KEY_HERE";
```

You can get a free API key from: [https://openrouter.ai](https://openrouter.ai)

---

### ▶️ Start the Server

```bash
node server.mjs
```

You’ll see:
```
✅ Server running at http://localhost:3000
```

---

### 🌐 Open in Browser

Visit:

```
http://localhost:3000
```

Ask your questions and enjoy the AI responses!

---

## 🤖 Sample Questions (Screenshot Friendly)

Here are some sample questions you can ask the AI for screenshot purposes:

1. What is artificial intelligence?
2. How does machine learning differ from AI?
3. What are large language models?
4. Can you explain what ChatGPT is?
5. What's the difference between supervised and unsupervised learning?
6. How does a recommendation engine work?
7. What is tokenization in NLP?
8. Explain a real-life use case of AI in healthcare.
9. How can students use AI responsibly?
10. Suggest 5 AI project ideas for college students.

---

## 📂 Project Structure

```
.
├── server.mjs              # Backend server
├── public/
│   ├── index.html          # Frontend HTML
│   └── script.js           # JavaScript to call your server
```

---

## 📜 License

MIT
