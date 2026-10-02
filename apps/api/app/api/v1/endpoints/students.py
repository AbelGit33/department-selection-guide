from fastapi import APIRouter

router = APIRouter()


@router.post("/register")
async def register_user() -> dict[str, str]:
    return {"message": "Registration endpoint ready"}


@router.post("/login")
async def login_user() -> dict[str, str]:
    return {"message": "Login endpoint ready"}
