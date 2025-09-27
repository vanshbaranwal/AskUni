from pinecone import Pinecone
from pinecone_plugins.assistant.models.chat import Message
import json
import sys
import os
from dotenv import load_dotenv
# Load environment variables
load_dotenv()

pinecone_api_key = os.getenv('PINECONE_API')
pc = Pinecone(api_key= pinecone_api_key)

assistant = pc.assistant.Assistant(assistant_name="askuni")

msg = Message(content="who is vansh baranwal?")
resp = assistant.chat(messages=[msg])

print(resp["message"]["content"])

# With streaming
# chunks = assistant.chat(messages=[msg], stream=True)

# for chunk in chunks:
#     if chunk:
#         print(chunk)


# Return JSON output that Node.js can parse
# result = {
#     "message": resp["message"]["content"],
#     "status": "success"
# }


# print(json.dumps(result))
sys.stdout.flush()


