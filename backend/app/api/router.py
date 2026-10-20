from fastapi import APIRouter

from app.api.health import router as health_router
from app.api.contact import router as contact_router


api_router = APIRouter()

api_router.include_router(
    health_router,
    tags=["Health"],
)

api_router.include_router(
    contact_router,
    prefix="/contacts",
    tags=["Contacts"],
)
