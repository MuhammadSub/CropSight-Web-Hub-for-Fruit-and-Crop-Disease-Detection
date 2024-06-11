## Folder Structure:
   The project consists of two main folders: "Client" and "Server".
    Client: Contains the React website, which includes multiple pages such as Home, About, Services, and Contact. Each page is designed using React components.
    Server: Includes the backend functionality.

## Client (React Website):
    The React website has multiple pages designed for user interaction.
    In the Services page, users can choose between two models:
    Crop Disease Detection Model.
    Fruit and Vegetable Disease Detection Model (Healthy vs. Rotten).
    The UI is designed using React components and styled for better user experience.

## Server:
    The server contains the backend logic.
    It consists of two main components:
    Crop Disease Detection Model: Located inside the "Client/model" folder.
    Fruit and Vegetable Disease Detection Model (Healthy vs. Rotten): Also located inside the "Client/model" folder.
    The backend is implemented using Flask library, with the main logic in app.py.

## Model Training:
### Crop Disease Detection Model:
https://github.com/MuhammadSub/Crop-Disease-Detection-using-EfficientNet-B0
### Fruit and Vegetable Disease (Healthy vs Rotten) Detection Model:
https://github.com/MuhammadSub/Fruit-and-Vegetable-Disease-Detection-using-EfficientNet-B0

## Usage:
    Upon running the application, the server acts as the backend, while the client serves as the frontend.
    Users can navigate through the React website and select the desired model on the Services page.
    Once a model is selected, users can upload an image of the crop or fruit/vegetable to be analyzed for disease.
    The frontend sends the uploaded image to the backend for model prediction.
    After prediction, the backend may use ChatGPT API to provide additional details about the detected disease.

## Instructions for Users:
    Clone or download the project repository.
    Navigate to the "Client" folder and run npm install to install dependencies.
    Similarly, navigate to the "Server" folder and install required packages using pip install -r requirements.txt.
    Run the Flask server by executing python app.py.
    Access the React website by opening the provided URL.
    Navigate to the Services page to select the desired model and upload images for disease detection.

## Additional Information:
    Users can refer to the provided GitHub links for detailed information on model training and implementation.
    For any further assistance or inquiries, users can contact the project maintainers.
