import time
import pandas as pd
import os
from dotenv import load_dotenv
import pymongo

load_dotenv()

db_url: str = os.getenv("MONGO_URI")
db_user: str = os.getenv("MONGO_USERNAME")
db_pass: str = os.getenv("MONGO_PASSWORD")
db_name: str = os.getenv("MONGO_DB_NAME")

# altering the db url for parameters
db_url = db_url.replace('<USERNAME>', db_user)
db_url = db_url.replace('<PASSWORD>', db_pass)
db_url = db_url.replace('<DATABASE>', db_name)

myClient = pymongo.MongoClient(db_url)
mydb = myClient["Sample-Data"]
emp_coll = mydb["employees"]

def insert_data(id:int,name,position,salary:int):
  data = {'employee_id':id,'name':name,'position':position,'salary':salary}
  try:
    emp_coll.insert_one(data)
    return True
  except:
    print("An exception occurred while inserting data in the database")
    return False;
  
def fetch_data():
  try:
    x = emp_coll.find({},{'_id':0,'employee_id':1,'name':1,'position':1,'salary':1}).sort('employee_id')
    return x;
  except:
    print('Error occurred while fetching data')
    return False