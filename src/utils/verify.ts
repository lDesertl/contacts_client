import axiosInstance from "../api/axios";

export const verifyToken = async (): Promise<boolean> => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    await axiosInstance.get("/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.error("Token verification failed:", error);
    localStorage.removeItem("token");
    return false;
  }
};
