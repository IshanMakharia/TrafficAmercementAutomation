import qrcode

# Define the user information to embed in the QR code
user_info = {
    'name': 'Ishan Makharia',
    'email': 'ishanmakharia278@gmail.com',
    'phone': '9382789710',
    'rule': '021'
}


# Generate the QR code from the user information
qr_code = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr_code.add_data(str(user_info))
qr_code.make(fit=True)

# Create an image from the QR code and save it to a file
qr_code_image = qr_code.make_image(fill_color='black', back_color='white')
qr_code_image.save('user_info_qr_code.png')
