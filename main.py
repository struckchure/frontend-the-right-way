import fastapi
import pydantic
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from typing_extensions import TypedDict

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["*"] to allow all
    allow_credentials=True,  # allow cookies/authorization headers
    allow_methods=["*"],  # allow all methods: GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],  # allow all headers
)

bearer_scheme = HTTPBearer()

username = "admin"
password = "admin"


class LoginDto(pydantic.BaseModel):
    username: str
    password: str


@app.post("/login")
def login(dto: LoginDto):
    if username == dto.username and password == dto.password:
        return {"token": f"{dto.username}:{dto.password}"}

    raise fastapi.HTTPException(401, "invalid credentials")


class Article(TypedDict):
    id: int
    title: str
    body: str


class ArticleCreateDto(pydantic.BaseModel):
    title: str
    body: str


articles: list[Article] = []


@app.get("/articles")
def list_articles() -> list[Article]:
    return articles


@app.post("/articles")
def create_article(
    dto: ArticleCreateDto,
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
):
    token = credentials.credentials
    if f"{username}:{password}" != token:
        raise fastapi.HTTPException(401, "invalid token")

    articles.append({**dto.model_dump(), "id": len(articles) + 1})
