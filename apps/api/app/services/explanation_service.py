class ExplanationService:
    def produce(self, factors: list[str]) -> list[str]:
        return [
            f"Top factor: {factor}" for factor in factors
        ]
