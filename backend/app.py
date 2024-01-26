from dotenv import load_dotenv
from flask import Flask,request,json
from flask_cors import CORS
from bson import ObjectId
import os
from database.db import *
app = Flask(__name__)
CORS(app)


@app.route('/employee', methods=['POST'])
def create_employee():
    data = request.get_json()
    if insert_data(int(data['employee_id']), data['name'],data['position'],int(data['salary'])):
      res_data = {'Status': 'Success', 'Message': 'Data saved in DB'}
      status = 201
    else:
      res_data = {'Status': 'Failed', 'Message': 'Error in saving data in DB'}
      status = 400
    res_send = app.response_class(
        response=json.dumps(res_data,default=str),
        status=status,
        mimetype='application/json'
    )
    return res_send

@app.route('/employee', methods=['GET'])
def get_temp():
    employee_data = fetch_data()
    # Transforming the data into a dictionary 
    employee_data = [record for record in employee_data]
    # Created a JSON response
    response_data = app.response_class(
        response=json.dumps(employee_data,default=str),
        status=200,
        mimetype='application/json'
    )
    
    return response_data


port = os.getenv("PORT")

if __name__ == '__main__':
    app.run()