//TODO: warn! This is just an example
 
const API_BASE_URL = import.meta.env.VITE_API_URL;

export type ConfirmationData = {
  id: string;
  name: string;
  attending: boolean;
  guests?: number;
  message?: string;
};

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  if (!API_BASE_URL) {
    console.warn("⚠️ VITE_API_URL non defined.");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Error ${response.status}: ${message}`);
  }

  return response.json() as Promise<T>;
}

export async function submitConfirmation(data: ConfirmationData) {
  return apiFetch<{ success: boolean }>("/confirmation", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
