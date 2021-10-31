# -*- coding: utf-8 -*-
"""
Created on Thu Oct 21 17:22:18 2021

@author: Anja
"""

import flask
from flask import request, jsonify
from flask import abort

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def respond():
    return jsonify({'text':'Hello, World!'})
    

if __name__ == '__main__':
    app.run(host = '192.168.1.154', port=3000, debug=True)