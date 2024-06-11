from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "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"


def chat_with_gpt(prompt, selected_model):
    chat_prompt = f"Tell me about {'Crop' if selected_model == 'crop' else 'Fruit and Vegetable'} disease related to {prompt}"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": chat_prompt},
        ],
    )
    return response["choices"][0]["message"]["content"].strip()


def predict_image(model, img_path, class_names):
    img = tf.io.read_file(img_path)
    img = tf.image.decode_image(img)
    img = tf.image.resize(img, size=(224, 224))
    img = tf.expand_dims(img, axis=0)
    prediction = model(img)
    predicted_class = class_names[np.argmax(prediction)]
    print(predicted_class)
    disease_details = chat_with_gpt(predicted_class, model)
    return predicted_class, disease_details


@app.route("/api/<model>/predict", methods=["POST"])
def predict(model):
    image_file = request.files["image"]
    filename = image_file.filename
    image_file.save(f"server\\Upload\\{filename}")
    selected_model = model

    print(selected_model)

    if selected_model == "crop":
        class_names = [
            "Apple___Apple_scab",
            "Apple___Black_rot",
            "Apple___Cedar_apple_rust",
            "Apple___healthy",
            "Blueberry___healthy",
            "Cherry_(including_sour)___Powdery_mildew",
            "Cherry_(including_sour)___healthy",
            "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
            "Corn_(maize)___Common_rust_",
            "Corn_(maize)___Northern_Leaf_Blight",
            "Corn_(maize)___healthy",
            "Grape___Black_rot",
            "Grape___Esca_(Black_Measles)",
            "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
            "Grape___healthy",
            "Orange___Haunglongbing_(Citrus_greening)",
            "Peach___Bacterial_spot",
            "Peach___healthy",
            "Pepper,_bell___Bacterial_spot",
            "Pepper,_bell___healthy",
            "Potato___Early_blight",
            "Potato___Late_blight",
            "Potato___healthy",
            "Raspberry___healthy",
            "Soybean___healthy",
            "Squash___Powdery_mildew",
            "Strawberry___Leaf_scorch",
            "Strawberry___healthy",
            "Tomato___Bacterial_spot",
            "Tomato___Early_blight",
            "Tomato___Late_blight",
            "Tomato___Leaf_Mold",
            "Tomato___Septoria_leaf_spot",
            "Tomato___Spider_mites Two-spotted_spider_mite",
            "Tomato___Target_Spot",
            "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
            "Tomato___Tomato_mosaic_virus",
            "Tomato___healthy",
        ]
        loaded_model = tf.saved_model.load("server/Model/crop-diseases-detection-model")
    elif selected_model == "fruit_veg":
        class_names = [
            "Apple__Healthy",
            "Apple__Rotten",
            "Banana__Healthy",
            "Banana__Rotten",
            "Bellpepper__Healthy",
            "Bellpepper__Rotten",
            "Carrot__Healthy",
            "Carrot__Rotten",
            "Cucumber__Healthy",
            "Cucumber__Rotten",
            "Grape__Healthy",
            "Grape__Rotten",
            "Guava__Healthy",
            "Guava__Rotten",
            "Jujube__Healthy",
            "Jujube__Rotten",
            "Mango__Healthy",
            "Mango__Rotten",
            "Orange__Healthy",
            "Orange__Rotten",
            "Pomegranate__Healthy",
            "Pomegranate__Rotten",
            "Potato__Healthy",
            "Potato__Rotten",
            "Strawberry__Healthy",
            "Strawberry__Rotten",
            "Tomato__Healthy",
            "Tomato__Rotten",
        ]
        loaded_model = tf.saved_model.load(
            "server/Model/fruit-vegetable-disease-detection-model"
        )
    else:
        print("Invalid choice.")
        exit()

    image_file = f"server\\Upload\\{filename}"

    predicted_class, disease_details = predict_image(
        loaded_model, image_file, class_names
    )
    return jsonify(
        {"predicted_class": predicted_class, "disease_details": disease_details}
    )


if __name__ == "__main__":
    app.run(debug=True)
