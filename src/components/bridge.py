from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import ollama

app = FastAPI()

# This allows your website (localhost:5173) to talk to this script
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(user_input: dict):
    # This sends the message to Ollama
    response = ollama.chat(model='llama3', messages=[
        {'role': 'system', 'content': 'You are AggieBot, a helpful assistant for NC A&T students.'},
        {'role': 'user', 'content': user_input['message']},
    ])
    return {"response": response['message']['content']}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)