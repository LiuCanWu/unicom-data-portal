from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import settings


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)


app.include_router(
    api_router,
    prefix=settings.api_prefix,
)


@app.get("/")
def root():
    return {
        "message": "Unicom Data Portal API",
        "docs": "/docs",
    }