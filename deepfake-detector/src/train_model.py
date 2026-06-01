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
    image = Image.open(image_path)

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

    # model prediction
    output = model(images)

    # calculate loss
    loss = loss_function(
        output,
        labels
    )

    # clear old gradients
    optimizer.zero_grad()

    # learn from mistakes
    loss.backward()

    # update model
    optimizer.step()

    print(
        "Epoch:",
        epoch + 1,
        "Loss:",
        loss.item()
    )

# Save model
torch.save(
    model.state_dict(),
    "models/deepfake_model.pth"
)

print("Model saved.")