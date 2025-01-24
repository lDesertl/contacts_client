import axios from "axios";

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // Ошибка с ответом от сервера
      console.error("Server error response:", error.response.data);
      console.error("Status code:", error.response.status);
      if (error.response.data.error) {
        console.log("Error from server:", error.response.data.error);
        return error.response.data.error; // Возвращаем ошибку для использования
      }
    } else if (error.request) {
      // Сервер не ответил
      console.error("Request error (no response):", error.request);
      return "Ошибка при отправке запроса. Нет ответа от сервера.";
    } else {
      // Неизвестная ошибка
      console.error(
        "Unknown error:",
        error instanceof Error ? error.message : "Unknown error"
      );
      return "Неизвестная ошибка.";
    }
  } else {
    // Ошибка не от Axios
    console.error(
      "Unknown error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return "Неизвестная ошибка.";
  }
};
