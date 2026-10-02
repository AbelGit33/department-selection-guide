from fastapi import APIRouter

router = APIRouter()


@router.get("/generate")
async def generate_recommendations() -> dict[str, str]:
    return {
        "message": "Recommendation pipeline ready",
        "top_departments": [
            "Computer Science",
            "Software Engineering",
            "Electrical Engineering",
        ],
    }
