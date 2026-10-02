from fastapi import APIRouter

router = APIRouter()


@router.get("/me")
async def get_student_profile() -> dict[str, str]:
    return {"message": "Student profile endpoint ready"}


@router.post("/academic-record")
async def save_academic_record() -> dict[str, str]:
    return {"message": "Academic record endpoint ready"}
