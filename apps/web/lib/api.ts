const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchRecommendations() {
  const response = await fetch(`${API_BASE_URL}/api/v1/recommendations/generate`);
  return response.json();
}
