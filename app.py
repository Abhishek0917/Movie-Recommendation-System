from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from predictionFile import recommend

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods = ['POST'])
@cross_origin()
def basic():
    text = request.json['text']
    movie_names, image_links = recommend(text)
    return jsonify({'movies' : movie_names, 'images' : image_links})

if __name__ == '__main__':
    app.run(debug = True)