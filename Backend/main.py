from fastapi import FastAPI,HTTPException;
from pydantic import BaseModel;
import bcrypt;
from fastapi.middleware.cors import CORSMiddleware;

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["GET","POST","DELETE","PUT"],
    allow_headers = ["*"]
)

db = {}

class UserSignup(BaseModel):
    username:str
    password :str

class UserLogin(BaseModel):
    username:str
    password:str

class UserInDb(BaseModel):
    username:str
    hashed_pwd:str



@app.post("/signup")
async def signup(user:UserSignup):

    if user.username in db:
        raise HTTPException(status_code=400, detail="user already exists")
    
    hashed_pwd = bcrypt.hashpw(user.password.encode("utf-8"),bcrypt.gensalt())

    db[user.username] = UserInDb(username=user.username,hashed_pwd=hashed_pwd)

    return("successful signup")

@app.post("/login")
async def login(user:UserLogin):

    if user.username not in db:
        raise HTTPException(status_code=401, detail="no such username")
    
    stored_user = db[user.username]

    if not bcrypt.checkpw(user.password.encode("utf-8"),stored_user.hashed_pwd.encode("utf-8")):
        raise HTTPException(status_code=401, detail="not valid")
    
    return ("yes login successful")

if __name__ == "__main__":

    import uvicorn;
    
    uvicorn(app,host="0.0.0.0",port = 8000)
