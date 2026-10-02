export type StudentStream = "Natural Science" | "Social Science";

export type DepartmentRecommendation = {
  department_name: string;
  match_score: number;
  academic_fit: number;
  interest_fit: number;
};
