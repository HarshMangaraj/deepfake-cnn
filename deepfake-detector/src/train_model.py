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

# pyrefly: ignore [missing-import]
from torch.utils.data import random_split

# ----------------
# image transform
# ----------------
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

# ----------------
# load images
# ----------------
real_folder = Path("data/real")
fake_folder = Path("data/fake")

images = []
labels = []

# real = 0
for image_path in real_folder.glob("*"):
    image = Image.open(image_path).convert("RGB")

    tensor = transform(image)

    images.append(tensor)

    labels.append(0)

# fake = 1
for image_path in fake_folder.glob("*"):
    image = Image.open(image_path)

    tensor = transform(image)

    images.append(tensor)

    labels.append(1)

images = torch.stack(images)

labels = torch.tensor(labels)

dataset = list(
    zip(images, labels)
)

train_size = int(
    0.8 * len(dataset)
)

val_size = len(dataset) - train_size

train_data, val_data = random_split(
    dataset,
    [train_size, val_size]
)

print("Train:", len(train_data))
print("Validation:", len(val_data))

# ----------------
# model
# ----------------
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

# ----------------
# loss function
# ----------------
loss_function = nn.CrossEntropyLoss()

# ----------------
# optimizer
# ----------------
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

# ----------------
# training loop
# ----------------
for epoch in range(10):

    output = model(images)

    loss = loss_function(
        output,
        labels
    )

    optimizer.zero_grad()

    loss.backward()

    optimizer.step()

    predictions = torch.argmax(
        output,
        dim=1
    )

    correct = (
        predictions == labels
    ).sum().item()

    accuracy = correct / len(labels)

    print("Epoch:", epoch + 1)

    print("Loss:", loss.item())

    print(
        "Accuracy:",
        f"{accuracy:.2%}"
    )

    print(
        "Predictions:",
        predictions
    )

    print(
        "Labels:",
        labels
    )
# Save model
torch.save(
    model.state_dict(),
    "models/deepfake_model.pth"
)

print("Model saved.")