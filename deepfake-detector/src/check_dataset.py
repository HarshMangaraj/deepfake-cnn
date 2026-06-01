from pathlib import Path

# open folders
real_folder = Path("data/real")
fake_folder = Path("data/fake")

# list files inside folders
real_images = list(real_folder.glob("*"))
fake_images = list(fake_folder.glob("*"))

# print count
print("Real images:", len(real_images))
print("Fake images:", len(fake_images))