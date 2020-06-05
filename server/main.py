import os
import json
import base64

from flask import Flask, render_template, send_file, jsonify, request

app = Flask (__name__)

IMAGES_DIRECTORY = app.root_path+'/static/api_data/images/'
JSON_DIRECTORY = app.root_path+'/static/api_data/json/'

@app.route("/")
def my_index():
    return render_template("index.html")

@app.route("/get-images")
def get_images():
    files = []
    for filename in os.listdir(IMAGES_DIRECTORY):
        with open(IMAGES_DIRECTORY+filename, "rb") as imageFile:
            base64_bytes = base64.b64encode(imageFile.read())
            base64_string = base64_bytes.decode('utf-8')
            id = filename.split('.')[0]
            image_data = {"id": id, "image_data": base64_string}
            files.append(image_data)

    response = app.response_class(response=json.dumps({'images': files}),
                                  status=200,
                                  mimetype='application/json')
    return response

@app.route("/get-image")
def get_image():
    id = request.args['id']
    data = json.load(open(JSON_DIRECTORY+id+".json"))
    response = app.response_class(response=json.dumps(data),
                                  status=200,
                                  mimetype='application/json')
    return response

if __name__ == "__main__":
    app.run(debug=True)
