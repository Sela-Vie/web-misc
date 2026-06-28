from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/echo", methods=["POST"])
def echo():
    data:dict = request.get_json()

    message = data.get("message") if data else None

    return jsonify({"message": message})


@app.route("/echo", methods=["GET"])
def wiwi():
    data:dict = request.get_json()

    message = data.get("message") if data else None

    return jsonify({"message": message + 1})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)