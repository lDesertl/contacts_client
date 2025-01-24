import React from "react";
import "./DeleteContact.scss";
import { useNavigate } from "react-router-dom";
const DeleteContact = () => {
  const navigate = useNavigate();
  const handleRedirect = (path: string) => {
    navigate(path, { replace: true });
  };
  return (
    <div className="delete_background">
      <div
        className="close_background"
        onClick={() => handleRedirect("/homepage")}
      ></div>
      <div className="delete_contact">
        <div className="title_wrapper">
          <div className="title">Удалить контакт?</div>
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

        <div className="delete_message">
          Это действие нельзя отменить. Контакт будет удален навсегда.
        </div>
        <div className="buttons">
          <button
            className="cancel"
            onClick={() => handleRedirect("/homepage")}
          >
            Отмена
          </button>
          <button className="delete">Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
