# pyrefly: ignore [missing-import]
from PIL import Image
# pyrefly: ignore [missing-import]
from torchvision import transforms

# open image
image = Image.open("data/real/blackman.jpg")

# resize + convert to tensor
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

tensor = transform(image)

print("Tensor shape:", tensor.shape)
print("First pixel:", tensor[:, 0, 0])