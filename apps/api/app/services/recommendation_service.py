from app.schemas.recommendation import RecommendationResponse


class RecommendationService:
    def generate(self) -> RecommendationResponse:
        return RecommendationResponse(
            recommendations=[
                {
                    "department_name": "Computer Science",
                    "match_score": 92.4,
                    "academic_fit": 95.0,
                    "interest_fit": 88.0,
                    "explanation": [
                        "Strong performance in Mathematics and ICT.",
                        "Interest profile aligns with analytical and technical problem solving.",
                    ],
                },
                {
                    "department_name": "Software Engineering",
                    "match_score": 89.2,
                    "academic_fit": 91.0,
                    "interest_fit": 85.0,
                    "explanation": [
                        "Consistent performance in Physics and Mathematics.",
                        "Strong practical and computational aptitude.",
                    ],
                },
            ],
            generated_at="2026-10-02T00:00:00Z",
        )
