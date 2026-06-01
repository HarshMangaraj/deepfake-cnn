# pyrefly: ignore [missing-import]
from pathlib import Path
# pyrefly: ignore [missing-import]
from PIL import Image   

# pyrefly: ignore [missing-import]
import torch
# pyrefly: ignore [missing-import]
import torch.nn as nn
# pyrefly: ignore [missing-import]
from torchvision import transforms

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

model = nn.Sequential(
    nn.Conv2d(3, 8, 3),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Flatten(),
    nn.Linear(8 * 111 * 111, 2)
)

model.load_state_dict(
    torch.load("models/deepfake_model.pth")
)

model.eval()


# test real image
image = Image.open(
    "data/real/1.jpg"
).convert("RGB")

tensor = transform(image)

tensor = tensor.unsqueeze(0)

with torch.no_grad():

    output = model(tensor)

    probs = torch.softmax(
        output,
        dim=1
    )

    prediction = torch.argmax(
        probs,
        dim=1
    )

    confidence = probs[
        0,
        prediction.item()
    ].item()

    if prediction.item() == 0:
        print(
            f"REAL ({confidence:.2%})"
        )

    else:
        print(
            f"FAKE ({confidence:.2%})"
        )