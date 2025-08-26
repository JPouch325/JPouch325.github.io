import os

# Remplacez par le chemin de votre dossier
folder_path = "ressources/galerie"

for root, dirs, files in os.walk(folder_path):
    for filename in files:
        if filename.endswith(".JPG"):
            old_path = os.path.join(root, filename)
            new_filename = filename[:-4] + ".jpg"
            new_path = os.path.join(root, new_filename)
            os.rename(old_path, new_path)
            print(f"Renommé : {old_path} -> {new_path}")

print("Renommage terminé !")
