from flask import Flask, render_template, send_file

app = Flask (__name__)
@app.route("/")

def index():

    return render_template("index.html",token="falsk reast")
    # return "hello World"

@app.route("/get-images")

def get_images():
    return send_file(loc_dir+res+".png", attachment_filename=res+".png", as_attachment=true)


if __name__ == "__main__":

    app.run(debug=True)
