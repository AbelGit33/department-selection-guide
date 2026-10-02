from pydantic import BaseModel, Field


class RecommendationScore(BaseModel):
    department_name: str
    match_score: float
    academic_fit: float
    interest_fit: float
    explanation: list[str]


class RecommendationResponse(BaseModel):
    recommendations: list[RecommendationScore]
    generated_at: str
