# pyrefly: ignore [missing-import]

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from PIL import Image

import io
import torch
import torch.nn as nn

from torchvision import transforms
from torchvision import models


app = FastAPI()


# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Image preprocessing
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])


# Load model
model = models.resnet18(weights=None)

model.fc = nn.Linear(
    model.fc.in_features,
    2
)

model.load_state_dict(
    torch.load(
        "models/deepfake_model.pth",
        map_location=torch.device("cpu")
    )
)

model.eval()


@app.get("/")
def root():
    return {
        "message": "Deepfake Detector API Running"
    }


@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    content = await file.read()

    image = Image.open(
        io.BytesIO(content)
    ).convert("RGB")

    tensor = transform(image)
    tensor = tensor.unsqueeze(0)

    with torch.no_grad():

        output = model(tensor)

        probabilities = torch.softmax(
            output,
            dim=1
        )

        confidence = torch.max(
            probabilities
        ).item()

        prediction = torch.argmax(
            output,
            dim=1
        )

        if prediction.item() == 0:
            result = "REAL"
        else:
            result = "FAKE"

    return {
        "result": result,
        "confidence": round(confidence * 100, 2)
    }