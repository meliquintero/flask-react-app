from flask import Flask, render_template, send_file, jsonify, request

app = Flask (__name__)

@app.route("/")
def my_index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
