# pyrefly: ignore [missing-import]
from PIL import Image
# pyrefly: ignore [missing-import]
import torch
# pyrefly: ignore [missing-import]
import torch.nn as nn
# pyrefly: ignore [missing-import]
from torchvision import transforms


# same transform
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])


# same model
model = nn.Sequential(
    nn.Conv2d(3, 8, 3),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Flatten(),
    nn.Linear(
        8 * 111 * 111,
        2
    )
)


# load trained weights
model.load_state_dict(
    torch.load("models/deepfake_model.pth")
)

# prediction mode
model.eval()


# open test image
image = Image.open("data/test.jpeg")

tensor = transform(image)

tensor = tensor.unsqueeze(0)


# no training
with torch.no_grad():

    output = model(tensor)

    prediction = torch.argmax(
        output,
        dim=1
    )

    if prediction.item() == 0:
        print("Prediction: REAL")

    else:
        print("Prediction: FAKE")