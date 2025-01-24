import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.scss";
import axiosInstance from "../../api/axios";
import { handleError } from "../../utils/errorHandlingService";
const Settings = () => {
  const navigate = useNavigate();
  const [isDeleteAccount, setIsDeleteAccount] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleRedirect = (path: string) => {
    navigate(path, { replace: true });
  };

  const handleDelete = () => {
    setIsDeleteAccount(!isDeleteAccount);
  };

  const handleNotificationStatus = (message: string) => {
    setNotificationMessage(message);
    setNotificationStatus("error");
    setTimeout(() => {
      setNotificationStatus("");
    }, 3000);
  };

  const deleteAccount = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axiosInstance.delete(`/user/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      localStorage.removeItem("token");
      handleRedirect("/auth/login");
    } catch (error) {
      handleNotificationStatus(handleError(error));
      console.log(error);
    }
  };

  const updateEmail = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login", { replace: true });
    }
    if (!email) {
      handleNotificationStatus("Нет данных для обновления");
      return;
    }
    try {
      const res = await axiosInstance.put(
        `/user/update`,
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      handleRedirect("/homepage");
    } catch (error) {
      handleNotificationStatus(handleError(error));
      console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className="settings_background">
      <div
        className="close_background"
        onClick={() => handleRedirect("/homepage")}
      ></div>
      <div className="settings">
        <div className="title_wrapper">
          <div className="title">Настройки</div>
          <button className="close" onClick={() => handleRedirect("/homepage")}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.22941 8.2229L12.1988 5.2535C12.3397 5.11282 12.419 4.92193 12.4192 4.7228C12.4194 4.52368 12.3404 4.33264 12.1997 4.19171C12.0591 4.05078 11.8682 3.97151 11.669 3.97134C11.4699 3.97116 11.2789 4.05009 11.138 4.19077L8.16856 7.16017L5.19916 4.19077C5.05823 4.04984 4.86709 3.97067 4.66779 3.97067C4.46849 3.97067 4.27735 4.04984 4.13643 4.19077C3.9955 4.3317 3.91633 4.52284 3.91633 4.72214C3.91633 4.92144 3.9955 5.11258 4.13643 5.2535L7.10582 8.2229L4.13643 11.1923C3.9955 11.3332 3.91633 11.5244 3.91633 11.7237C3.91633 11.923 3.9955 12.1141 4.13643 12.255C4.27735 12.396 4.46849 12.4751 4.66779 12.4751C4.86709 12.4751 5.05823 12.396 5.19916 12.255L8.16856 9.28563L11.138 12.255C11.2789 12.396 11.47 12.4751 11.6693 12.4751C11.8686 12.4751 12.0598 12.396 12.2007 12.255C12.3416 12.1141 12.4208 11.923 12.4208 11.7237C12.4208 11.5244 12.3416 11.3332 12.2007 11.1923L9.22941 8.2229Z"
                fill="#020817"
              />
            </svg>
          </button>
        </div>

        <div className="form">
          <label htmlFor="email">Сменить email</label>
          <input
            type="text"
            id="email"
            onChange={handleInputChange}
            value={email}
          />
          <button className="delete_button" onClick={handleDelete}>
            Удалить аккаунт
          </button>
        </div>
        <div className="buttons">
          <button
            className="cancel"
            onClick={() => handleRedirect("/homepage")}
          >
            Отменить
          </button>
          <button className="save" onClick={updateEmail}>
            Сохранить
          </button>
        </div>
      </div>
      <div
        className="delete_success"
        style={{ display: isDeleteAccount ? "flex" : "none" }}
      >
        <div className="delete_account_title_wrapper">
          <div className="delete_account_title">Удаление аккаунта</div>
          <button className="close_button" onClick={handleDelete}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.22941 8.2229L12.1988 5.2535C12.3397 5.11282 12.419 4.92193 12.4192 4.7228C12.4194 4.52368 12.3404 4.33264 12.1997 4.19171C12.0591 4.05078 11.8682 3.97151 11.669 3.97134C11.4699 3.97116 11.2789 4.05009 11.138 4.19077L8.16856 7.16017L5.19916 4.19077C5.05823 4.04984 4.86709 3.97067 4.66779 3.97067C4.46849 3.97067 4.27735 4.04984 4.13643 4.19077C3.9955 4.3317 3.91633 4.52284 3.91633 4.72214C3.91633 4.92144 3.9955 5.11258 4.13643 5.2535L7.10582 8.2229L4.13643 11.1923C3.9955 11.3332 3.91633 11.5244 3.91633 11.7237C3.91633 11.923 3.9955 12.1141 4.13643 12.255C4.27735 12.396 4.46849 12.4751 4.66779 12.4751C4.86709 12.4751 5.05823 12.396 5.19916 12.255L8.16856 9.28563L11.138 12.255C11.2789 12.396 11.47 12.4751 11.6693 12.4751C11.8686 12.4751 12.0598 12.396 12.2007 12.255C12.3416 12.1141 12.4208 11.923 12.4208 11.7237C12.4208 11.5244 12.3416 11.3332 12.2007 11.1923L9.22941 8.2229Z"
                fill="#020817"
              />
            </svg>
          </button>
        </div>
        <div className="delete_message">
          Это действие нельзя отменить. Ваш аккаунт будет удален навсегда
        </div>
        <button className="delete_cancel_button" onClick={handleDelete}>
          Отменить
        </button>
        <button className="delete_success_button" onClick={deleteAccount}>
          Удалить
        </button>
      </div>
      <div
        className="error"
        style={
          notificationStatus
            ? { opacity: 1, zIndex: 1 }
            : { opacity: 0, zIndex: -2 }
        }
      >
        {notificationMessage}
      </div>
    </div>
  );
};

export default Settings;
