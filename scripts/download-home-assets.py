from pathlib import Path
from urllib.request import Request, urlopen

assets = {
    "QvHe4KQKeF4SdlMfkZm4ZCghTk.png": "https://framerusercontent.com/images/QvHe4KQKeF4SdlMfkZm4ZCghTk.png",
    "cm62IqDlxSYtaLaLmTfJGnJz0C4.png": "https://framerusercontent.com/images/cm62IqDlxSYtaLaLmTfJGnJz0C4.png",
    "oP2yQYkBKtcqHMd3f5YjScXycKE.png": "https://framerusercontent.com/images/oP2yQYkBKtcqHMd3f5YjScXycKE.png",
    "UlG7lLA2mjPOj4AvUx8wFtZc24.jpeg": "https://framerusercontent.com/images/UlG7lLA2mjPOj4AvUx8wFtZc24.jpeg",
    "VyecrwKMqQCd5h4CE2nDPINgJbM.jpg": "https://framerusercontent.com/images/VyecrwKMqQCd5h4CE2nDPINgJbM.jpg",
    "t0CRvusbvD9Ne02lvEgEp9AzTs.jpg": "https://framerusercontent.com/images/t0CRvusbvD9Ne02lvEgEp9AzTs.jpg",
    "ISaGvV5ll1j9ZOxH80K8nKiUQ.jpg": "https://framerusercontent.com/images/ISaGvV5ll1j9ZOxH80K8nKiUQ.jpg",
    "gBHLHzPoYHd6qKq64EPMu0VGjFE.png": "https://framerusercontent.com/images/gBHLHzPoYHd6qKq64EPMu0VGjFE.png",
    "km9cVU6eBDKPpPZ7c6pVaBudfQY.png": "https://framerusercontent.com/assets/km9cVU6eBDKPpPZ7c6pVaBudfQY.png",
}

dest = Path("public/images/home")
dest.mkdir(parents=True, exist_ok=True)
headers = {"User-Agent": "Mozilla/5.0"}

for name, url in assets.items():
    req = Request(url, headers=headers)
    with urlopen(req) as response:
        dest.joinpath(name).write_bytes(response.read())
        print(name)
