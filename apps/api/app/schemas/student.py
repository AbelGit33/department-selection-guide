from pydantic import BaseModel, Field


class AcademicRecordInput(BaseModel):
    stream: str
    grade_9: dict[str, int]
    grade_10: dict[str, int]
    grade_11: dict[str, int]
    grade_12: dict[str, int]
    entrance_exam_score: int | None = None


class StudentProfileInput(BaseModel):
    full_name: str
    school: str | None = None
    stream: str
    preferred_language: str = "en"
