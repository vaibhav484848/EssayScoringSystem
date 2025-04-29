from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import re
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from tensorflow.keras.preprocessing.text import Tokenizer
import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('punkt_tab')

app = Flask(__name__)
CORS(app)

@app.route('/score', methods=['POST'])
def score():
    text = request.json.get('text', '')
    print(text)
    res = get_score(text)
    print(res)
    return jsonify(round(res['prediction'][0][0]))

def get_score(text):
    # Load the model and vectorizer
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)

    text = clean_essay(text)
    text = remove_stopwords(text)
    text = remove_punc(text)
    arr = [text]
    tk = Tokenizer()
    tk.fit_on_texts(arr)
    padded = tk.texts_to_sequences(arr)

    # Get the prediction
    prediction = model.predict(np.array(padded))

    return {'prediction': prediction}


def clean_essay(essay):
  x = []
  for i in essay.split():
    if i.startswith("@"):
      continue
    else:
      x.append(i)
  return " ".join(x)

stop_words = set(stopwords.words('english'))
def remove_stopwords(essay):
  word_tokens = word_tokenize(essay)
  filtered_sentence = []
  for w in word_tokens:
    if w not in stop_words:
      filtered_sentence.append(w)
  return " ".join(filtered_sentence)


def remove_punc(essay):
  essay = re.sub("[^A-Za-z ]", "", essay)
  return essay

if __name__ == '__main__':
    app.run(debug=True)