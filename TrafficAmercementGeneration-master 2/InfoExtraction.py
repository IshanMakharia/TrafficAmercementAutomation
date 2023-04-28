# #import pyzbar
# # import decode from pyzbar
# #from pyzbar import pyzbar
# from cryptography.fernet import Fernet

# import cv2
# from pyzbar.pyzbar import decode

# # Initialize the video capture object
# cap = cv2.VideoCapture(0)

# key = None
# with open('key.txt', 'rb') as file:
#     key = file.read()

# while True:
#     # Capture a frame from the camera
#     ret, frame = cap.read()

#     # Detect QR codes in the frame
#     barcodes = decode(frame)
    
	

#     # Print the QR code data if found and close the camera
#     if barcodes:
#         for barcode in barcodes:
#             data = barcode.data.decode('utf-8')
#             fernet = Fernet(key)
#             plaintext = fernet.decrypt(data)
#             data1 = (plaintext.decode())
#             data1=eval(data1)
            
#             print(data1.get('phone'))
#         break

#     # Display the frame
#     cv2.imshow('frame', frame)

#     # Check if the user wants to exit
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # Release the video capture object
# cap.release()

# # Close the OpenCV window
# cv2.destroyAllWindows()












# #import pyzbar
# from cryptography.fernet import Fernet
# import cv2
# from pyzbar.pyzbar import decode


# # Initialize the video capture object
# cap = cv2.VideoCapture(0)

# key = None
# with open('key.txt', 'rb') as file:
#     key = file.read()

# while True:
#     # Capture a frame from the camera
#     ret, frame = cap.read()

#     # Detect QR codes in the frame
#     barcodes = decode(frame)
    
	

#     # Print the QR code data if found and close the camera
#     if barcodes:
#         for barcode in barcodes:
#             data = barcode.data.decode('utf-8')
#             fernet = Fernet(key)
#             plaintext = fernet.decrypt(data)
#             data1 = (plaintext.decode())
#             data1=eval(data1)
            
#             print(data1.get('phone'))
#         break

#     # Display the frame
#     cv2.imshow('frame', frame)

#     # Check if the user wants to exit
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # Release the video capture object
# cap.release()

# # Close the OpenCV window
# cv2.destroyAllWindows()






#from pyzbar import pyzbar
from cryptography.fernet import Fernet
import cv2
import requests,json
from pyzbar.pyzbar import decode


# Initialize the video capture object
cap = cv2.VideoCapture(0)
phone_number=0

key = None
with open('key.txt', 'rb') as file:
    key = file.read()

while True:
    # Capture a frame from the camera
    ret, frame = cap.read()

    # Detect QR codes in the frame
    barcodes = decode(frame)

 
    
	

    # Print the QR code data if found and close the camera
    if barcodes:
        for barcode in barcodes:
            data = barcode.data.decode('utf-8')
            fernet = Fernet(key)
            plaintext = fernet.decrypt(data)
            data1 = (plaintext.decode())
            data1=eval(data1)
            name=data1.get('name')
            email=data1.get('email')
            phone=data1.get('phone')
            temp = {
                "name":name,
                "email":email,
                "ph":phone,
                "rule":"021",
                "place":"Jayanagar Signal"
            }
            # print(data1.get('phone'))
            response = requests.post("http://localhost:8800/api/fine/add", json=temp)
            print(response.text)
        break

    # Display the frame
    cv2.imshow('frame', frame)

    # Check if the user wants to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture object
cap.release()

# Close the OpenCV window
cv2.destroyAllWindows()