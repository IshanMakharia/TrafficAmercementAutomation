import cv2

# Load the Haar cascade classifier for vehicle detection
cascade = cv2.CascadeClassifier('cars.xml')

# Open a connection to the default camera
cap = cv2.VideoCapture(0)
car_detected=False

# Continuously capture frames from the camera and detect vehicles
while True:
    # Read a frame from the camera
    ret, frame = cap.read()

    # Convert the frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect vehicles in the frame
    vehicles = cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5, minSize=(80, 80))

    # Draw bounding boxes around the detected vehicles
    for (x, y, w, h) in vehicles:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Display the frame with the detected vehicles
    cv2.imshow('Vehicle detection', frame)

    # Check if a car is detected and print "True"
    if len(vehicles) > 0:
        car_detected=True
        print("True")
        break

    # Wait for a key press and exit if the 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close all windows
cap.release()
cv2.destroyAllWindows()

if car_detected:
    import InfoExtraction
else:
    print("Sorry 😣")