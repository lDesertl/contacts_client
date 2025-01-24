import React, { useState } from "react";
import "./Contacts.scss";
import { Outlet, useNavigate } from "react-router-dom";
const Contacts = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const handleRedirect = (path: string) => {
    navigate(path, { replace: true });
  };
  const handleMouseDown = () => {
    setClicked(true);
  };
  const handleMouseUp = () => {
    setClicked(false);
  };
  return (
    <div className="contacts_wrapper">
      <div className="contacts">
        <div className="contacts_title">
          <div className="title">Список контактов</div>
          <button
            className="add_contact"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={() => handleRedirect("/homepage/add")}
            style={{ transform: clicked ? "scale(0.95)" : "scale(1)" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7534 4.50178C11.6309 6.15457 10.378 7.50286 9.00246 7.50286C7.62696 7.50286 6.37182 6.15488 6.25146 4.50178C6.12642 2.78241 7.34561 1.5007 9.00246 1.5007C10.6593 1.5007 11.8785 2.81367 11.7534 4.50178Z"
                stroke="#F8FAFC"
                stroke-width="1.00189"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.00226 9.50272C6.28292 9.50272 3.52294 11.003 3.01221 13.8349C2.94969 14.1762 3.1438 14.5038 3.50137 14.5038H14.5035C14.861 14.5038 15.0542 14.1762 14.9926 13.8349C14.4816 11.003 11.7216 9.50272 9.00226 9.50272Z"
                stroke="#F8FAFC"
                stroke-width="1.00189"
                stroke-miterlimit="10"
              />
              <path
                d="M2.7513 5.5025V9.00469"
                stroke="#F8FAFC"
                stroke-width="1.00189"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.50367 7.25281H1.00148"
                stroke="#F8FAFC"
                stroke-width="1.00189"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Добавить контакт
          </button>
        </div>
        <div className="contact">
          <div className="contact_info">
            <div className="contact_name">Тимур</div>
            <div className="contact_number">+7 (123) 456-78-90</div>
          </div>
          <div className="contact_actions">
            <button
              className="edit_contact"
              onClick={() => handleRedirect("/homepage/edit")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4526 3.37221L16.6308 5.55037L17.8293 4.31353C18.0212 4.12159 18.1272 3.83036 18.1272 3.55672C18.1276 3.42334 18.1016 3.29118 18.0508 3.16787C17.9999 3.04456 17.9252 2.93253 17.8309 2.83822L17.1663 2.17367C17.0719 2.07894 16.9597 2.00384 16.8361 1.95272C16.7125 1.90159 16.58 1.87545 16.4462 1.8758C16.1746 1.8758 15.8814 1.98134 15.6902 2.17367L14.4526 3.37221ZM1.87537 18.1253H4.0238L16.1687 6.01087L13.9902 3.83196L1.87537 15.9769V18.1253Z"
                  fill="#020817"
                />
              </svg>
            </button>
            <button
              className="delete_contact"
              onClick={() => handleRedirect("/homepage/delete")}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.05854 5.19147L5.83979 17.6915C5.8769 18.4137 6.40229 18.9415 7.08979 18.9415H14.2773C14.9675 18.9415 15.4831 18.4137 15.5273 17.6915L16.3085 5.19147"
                  stroke="#EF4444"
                  stroke-width="1.00189"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.80889 5.19177H17.5589"
                  stroke="#EF4444"
                  stroke-width="1.00189"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M8.18341 5.19009V3.62737C8.18305 3.50413 8.20706 3.38204 8.25405 3.26812C8.30105 3.1542 8.3701 3.05069 8.45724 2.96355C8.54438 2.87641 8.64788 2.80736 8.7618 2.76037C8.87573 2.71338 8.99782 2.68937 9.12105 2.68973H12.2465C12.3697 2.68937 12.4918 2.71338 12.6057 2.76037C12.7197 2.80736 12.8232 2.87641 12.9103 2.96355C12.9974 3.05069 13.0665 3.1542 13.1135 3.26812C13.1605 3.38204 13.1845 3.50413 13.1841 3.62737V5.19009"
                  stroke="#EF4444"
                  stroke-width="1.00189"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6839 7.68954V16.4395"
                  stroke="#EF4444"
                  stroke-width="1.00189"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.87092 7.68954L8.18342 16.4395"
                  stroke="#EF4444"
                  stroke-width="1.00189"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.496 7.68954L13.1835 16.4395"
                  stroke="#EF4444"
                  stroke-width="1.00189"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Contacts;
