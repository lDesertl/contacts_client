import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="name">Контакты</div>
      {/*!!!!!!!!!!!!!!!!!!!!!!!!!!! номер из бд */}
      <div className="profile">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7532 4.50099C10.6306 6.15377 9.37766 7.50207 8.00217 7.50207C6.62667 7.50207 5.37153 6.15408 5.25117 4.50099C5.12613 2.78162 6.34532 1.49991 8.00217 1.49991C9.65901 1.49991 10.8782 2.81288 10.7532 4.50099Z"
            stroke="#020817"
            stroke-width="1.00189"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00146 9.5022C5.28212 9.5022 2.52214 11.0025 2.0114 13.8344C1.94983 14.1757 2.143 14.5033 2.50026 14.5033H13.5027C13.8602 14.5033 14.0534 14.1757 13.9918 13.8344C13.4808 11.0025 10.7208 9.5022 8.00146 9.5022Z"
            stroke="#020817"
            stroke-width="1.00189"
            stroke-miterlimit="10"
          />
        </svg>
        +7 (123) 456-78-90
      </div>
      <button className="logout">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.50237 10.5018V11.7521C9.50237 12.0837 9.37064 12.4017 9.13617 12.6362C8.9017 12.8706 8.58369 13.0024 8.25209 13.0024H3.251C2.91941 13.0024 2.6014 12.8706 2.36693 12.6362C2.13246 12.4017 2.00073 12.0837 2.00073 11.7521V4.25046C2.00073 3.91886 2.13246 3.60085 2.36693 3.36638C2.6014 3.13191 2.91941 3.00018 3.251 3.00018H8.00204C8.6925 3.00018 9.50237 3.55999 9.50237 4.25046V5.50073"
            stroke="#020817"
            stroke-width="1.00189"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5022 10.5029L14.0031 8.00197L11.5022 5.50107"
            stroke="#020817"
            stroke-width="1.00189"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.50063 8.0015H13.5024"
            stroke="#020817"
            stroke-width="1.00189"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Выйти
      </button>
    </div>
  );
};

export default Header;
