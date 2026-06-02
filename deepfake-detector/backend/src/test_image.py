# pyrefly: ignore [missing-import]
import cv2

image = cv2.imread("data/test.jpeg")

resized = cv2.resize(image, (224, 224))

print("Original:", image.shape)
print("Resized:", resized.shape)

cv2.imshow("Face", resized)
cv2.waitKey(0)
cv2.destroyAllWindows()