from PIL import Image
import os

input_folder = "ressources/galerie/limoges"
output_folder = "ressources/galerie/limoges/thumbs"
os.makedirs(output_folder, exist_ok=True)

for file in os.listdir(input_folder):
    if file.lower().endswith((".jpg", ".jpeg", ".png")):
        img = Image.open(os.path.join(input_folder, file))
        img.thumbnail((800, 800))  # max 800px
        img.save(os.path.join(output_folder, file), "JPEG", quality=70)
