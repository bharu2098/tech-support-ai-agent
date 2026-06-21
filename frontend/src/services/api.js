const API_URL = "http://127.0.0.1:8000";

export const sendMessage = async (message) => {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    return await response.json();

  } catch (error) {
    console.error(error);

    return {
      error: "Backend server is not running",
    };
  }
};