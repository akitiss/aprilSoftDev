# Duo Double A 2.0: Aahan and April 
# SoftDev pd08
# K20: Restful API 
# 2022-11-21
# time spent: 

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission

app = Flask(__name__)    #create Flask object

key_file = open("key_nasa.txt", "r") 
key = key_file.read()

@app.route('/', methods = ['GET', 'POST'])
def open_api():
    return render_template("main.html")


if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()
