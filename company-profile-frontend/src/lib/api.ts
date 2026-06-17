const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit & { timeout?: number } = {}
): Promise<T> {
  const { timeout = 1500, ...fetchOptions } = options;
  const url = `${BASE_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const config = {
    ...fetchOptions,
    headers: {
      ...defaultHeaders,
      ...fetchOptions.headers,
    },
    signal: controller.signal,
  };

  try {
    const res = await fetch(url, config);
    clearTimeout(id);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API request failed with status ${res.status}`
      );
    }

    // Handle responses that are blank/no-content (like 204)
    if (res.status === 204) {
      return {} as T;
    }

    return await res.json();
  } catch (error: any) {
    clearTimeout(id);
    if (error.name === "AbortError") {
      console.warn(`Fetch API Timeout for ${url}`);
      throw new Error(`API request timed out after ${timeout}ms`);
    }
    console.error(`Fetch API Error for ${url}:`, error);
    throw error;
  }
}
