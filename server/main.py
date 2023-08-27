from flask import Flask, session,request,g,jsonify
from flask_session import Session
from flask_cors import CORS
import os
import requests

app = Flask(__name__)
app.config['SESSION_PERMANENT'] = True
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = os.urandom(24)
# app.secret_key = os.urandom(24)
Session(app)
CORS(app)

ServerURL = 'http://localhost/'
LoginEndPoint = 'core/loginguest'
UploadEndPoint = 'core/upload'
FilecloudPath = "/lalit"
Headers = {'Accept': 'application/json'}
UploadApiParams = {
    'appname': 'explorer',
    'path': FilecloudPath,
    'offset': 0
}

@app.route('/auth',methods=['POST'])
def auth():
    s = requests.session()
    # getting the username and password from the request
    Creds = {
        'userid':'lalit',
        'password':'Lalitkumar@0010'
    }
    # making call for authentication
    loginCall = s.post(ServerURL+LoginEndPoint,data=Creds,headers=Headers).json()
    if loginCall['command'][0]['result'] == 1:
        session['userCookie'] = "lalit"
        # print()
        return loginCall
    else:
        print("Login failed")
        return 'Login failed'

@app.route('/upload',methods=['POST'])
def upload():

    pathToFile = "/home/whataluckyguy/server.key"
    fileToUpload = {'file':(open(pathToFile,'rb'))}
    print(session.get('userCookie'))# if g.userCookie:
    # uploadCall = requests.post(ServerURL+UploadEndPoint,params=UploadApiParams,files=fileToUpload,cookies=requests.session().cookies)
    
    return "ok"
    # else:
    # print('Upload Failed')
    # return "Upload Failed"


# @app.before_request
# def before_request():
#     g.userCookie = None
#     if 'userCookie' in session:
#         g.userCookie = session['userCookie']

# @app.route('/dropsession')
# def dropsession():
#     session.pop('userCookie', None)
#     return 'Dropped!'



if __name__ == '__main__':
    app.run(debug=True)