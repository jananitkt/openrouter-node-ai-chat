async function askAI() {
  const input = document.getElementById("userInput").value;
  const responseBox = document.getElementById("responseBox");
  responseBox.innerText = "🤖 Thinking...";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || "No response from AI.";
  responseBox.innerText = "🧑 You: " + input + "\n\n🤖 AI: " + reply;
}
