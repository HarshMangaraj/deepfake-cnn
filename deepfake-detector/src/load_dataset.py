from pathlib import Path
# pyrefly: ignore [missing-import]
from PIL import Image
# pyrefly: ignore [missing-import]
from torchvision import transforms

# resize + tensor
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

# folders
real_folder = Path("data/real")
fake_folder = Path("data/fake")

# collect files
real_images = list(real_folder.glob("*"))
fake_images = list(fake_folder.glob("*"))

print("Real:", len(real_images))
print("Fake:", len(fake_images))

# open one by one
for image_path in real_images:
    image = Image.open(image_path)

    tensor = transform(image)

    print(image_path.name, "→ REAL →", tensor.shape)

for image_path in fake_images:
    image = Image.open(image_path)

    tensor = transform(image)

    print(image_path.name, "→ FAKE →", tensor.shape)