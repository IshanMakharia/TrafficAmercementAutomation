import qrcode
from cryptography.fernet import Fernet

# Define the user information to be encrypted and converted to QR code
user_info = {
    'name': 'Ishan Makharia',
    'email': 'ishanmakharia278@gmail.com',
    'phone': '7766824420',
    'rule': '022'
}

# Serialize the user information to a bytes string
serialized_user_info = str(user_info).encode('utf-8')

# Generate a new symmetric encryption key
key = Fernet.generate_key()

# Encrypt the user information using the encryption key
cipher_suite = Fernet(key)
cipher_text = cipher_suite.encrypt(serialized_user_info)

# Convert the encrypted data to a QR code
qr_code = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr_code.add_data(cipher_text)
qr_code.make(fit=True)

# Generate the QR code image
qr_code_image = qr_code.make_image(fill_color="black", back_color="white")

# Save the QR code image to a file
qr_code_image.save('encrypted_qr_code.png')
# # Generate a key
# key = b'my_secret_key'

# Write the key to a file
with open('key.txt', 'wb') as file:
    file.write(key)

