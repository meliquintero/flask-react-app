from flask import Flask, render_template, send_file

app = Flask (__name__)

@app.route("/")
def my_index():
    return render_template("index.html", token="falsk reast")

@app.route("/get-images")
def get_images():
    return send_file("/Users/melissajimison/Documents/c5/exercise/flask-into/server/images/GSFC_20171208_Archive_e001465_orig.jpg", attachment_filename="orig.jpg")

if __name__ == "__main__":
    app.run(debug=True)
