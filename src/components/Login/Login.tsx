import { useEffect, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../utils/verify";
import { handleError } from "../../utils/errorHandlingService";
import axiosInstance from "../../api/axios";
const Login = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const handleRedirect = (path: string) => {
    navigate(path, { replace: true });
  };

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  useEffect(() => {
    const checkToken = async () => {
      const isValid = await verifyToken();
      if (isValid) {
        navigate("/homepage", { replace: true });
      } else console.log("Token is invalid or expired");
    };
    checkToken();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationStatus = (note: string) => {
    setNotification(note);
    setNotificationStatus(true);
    setTimeout(() => {
      setNotificationStatus(false);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.password) {
      handleNotificationStatus("Заполните все поля");
      return;
    }
    try {
      const res = await axiosInstance.post("/auth/login", {
        phone: formData.phone,
        password: formData.password,
      });
      console.log("Response:", res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/homepage", { replace: true });
    } catch (error: unknown) {
      handleNotificationStatus(handleError(error));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length === 11) {
      value = `${value[0]} (${value.slice(1, 4)}) ${value.slice(
        4,
        7
      )}-${value.slice(7, 9)}-${value.slice(9, 11)}`;
    }

    setPhone(value);
  };
  return (
    <div className="login">
      <div className="login_title">Вход в систему</div>
      <div className="login_text">
        Войдите, чтобы получить доступ к вашим контактам
      </div>
      <label htmlFor="phone">Номер телефона</label>
      <input
        name="phone"
        type="phone"
        id="phone"
        value={phone}
        onChange={(e) => {
          handlePhoneChange(e);
          handleInputChange(e);
        }}
        maxLength={17}
      />
      <label htmlFor="password">Пароль</label>
      <div className="password_wrapper">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          id="password"
          onChange={handleInputChange}
        />
        <button
          className="show_password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_18)">
                <path
                  d="M8.16185 10.3287C9.26682 10.3287 10.1626 9.43293 10.1626 8.32796C10.1626 7.22299 9.26682 6.32724 8.16185 6.32724C7.05689 6.32724 6.16113 7.22299 6.16113 8.32796C6.16113 9.43293 7.05689 10.3287 8.16185 10.3287Z"
                  fill="#020817"
                />
                <path
                  d="M15.5023 7.78376C14.6752 6.50473 13.6022 5.41824 12.3994 4.64151C11.0688 3.78132 9.59974 3.32654 8.1513 3.32654C6.82226 3.32654 5.51541 3.70631 4.26701 4.45522C2.99392 5.21883 1.84055 6.33438 0.838768 7.77063C0.725676 7.93295 0.663392 8.12522 0.65983 8.32302C0.656268 8.52082 0.711589 8.71521 0.818763 8.8815C1.64426 10.1733 2.70667 11.2614 3.89068 12.0275C5.22379 12.8911 6.65847 13.3287 8.1513 13.3287C9.6113 13.3287 11.0835 12.8777 12.4085 12.0247C13.6106 11.2505 14.6815 10.1599 15.5054 8.87024C15.6089 8.70783 15.6636 8.51913 15.663 8.32654C15.6625 8.13396 15.6067 7.94558 15.5023 7.78376V7.78376ZM8.16192 11.3283C7.56845 11.3283 6.98831 11.1523 6.49485 10.8226C6.0014 10.4929 5.6168 10.0242 5.38968 9.47593C5.16257 8.92763 5.10315 8.3243 5.21893 7.74223C5.33471 7.16016 5.62049 6.62549 6.04014 6.20584C6.45979 5.7862 6.99446 5.50041 7.57653 5.38463C8.1586 5.26885 8.76193 5.32827 9.31023 5.55539C9.85852 5.7825 10.3272 6.1671 10.6569 6.66055C10.9866 7.15401 11.1626 7.73415 11.1626 8.32763C11.1617 9.12317 10.8452 9.88587 10.2827 10.4484C9.72017 11.0109 8.95747 11.3274 8.16192 11.3283V11.3283Z"
                  fill="#020817"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_18">
                  <rect
                    width="16.0035"
                    height="16.0035"
                    fill="white"
                    transform="translate(0.159668 0.326172)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5026 14.0027C13.4369 14.0028 13.3718 13.9899 13.3111 13.9647C13.2505 13.9395 13.1954 13.9026 13.149 13.8561L2.14665 2.85366C2.05682 2.75911 2.00748 2.63321 2.00915 2.5028C2.01082 2.37239 2.06337 2.24779 2.15559 2.15557C2.24781 2.06335 2.37241 2.0108 2.50282 2.00914C2.63323 2.00747 2.75913 2.05681 2.85368 2.14664L13.8561 13.149C13.926 13.219 13.9736 13.3081 13.9928 13.405C14.0121 13.502 14.0022 13.6025 13.9644 13.6939C13.9265 13.7853 13.8625 13.8633 13.7803 13.9183C13.6981 13.9733 13.6014 14.0026 13.5026 14.0027V14.0027Z"
                fill="#020817"
              />
              <path
                d="M7.75593 9.87702L6.1325 8.25359C6.1232 8.24437 6.11124 8.23829 6.09831 8.23621C6.08537 8.23413 6.07211 8.23615 6.06039 8.242C6.04866 8.24784 6.03906 8.25721 6.03294 8.2688C6.02681 8.28038 6.02447 8.29358 6.02624 8.30657C6.09178 8.72774 6.28954 9.11717 6.59094 9.41858C6.89234 9.71998 7.28178 9.91774 7.70295 9.98328C7.71593 9.98505 7.72914 9.9827 7.74072 9.97658C7.7523 9.97045 7.76168 9.96086 7.76752 9.94913C7.77337 9.93741 7.77539 9.92415 7.77331 9.91121C7.77123 9.89828 7.76515 9.88632 7.75593 9.87702Z"
                fill="#020817"
              />
              <path
                d="M8.25148 6.13132L9.87741 7.75663C9.88669 7.76598 9.89868 7.77217 9.91168 7.77433C9.92468 7.77648 9.93802 7.77448 9.94982 7.76862C9.96162 7.76275 9.97127 7.75332 9.97741 7.74166C9.98354 7.72999 9.98584 7.7167 9.98399 7.70365C9.91861 7.2819 9.72071 6.8919 9.41892 6.59012C9.11714 6.28833 8.72714 6.09043 8.30539 6.02506C8.29233 6.02304 8.27897 6.0252 8.26721 6.03124C8.25545 6.03727 8.2459 6.04686 8.23992 6.05865C8.23394 6.07043 8.23184 6.08381 8.23392 6.09686C8.23599 6.10991 8.24214 6.12197 8.25148 6.13132V6.13132Z"
                fill="#020817"
              />
              <path
                d="M15.347 8.54401C15.4505 8.38159 15.5052 8.1929 15.5046 8.00031C15.5041 7.80773 15.4483 7.61935 15.3439 7.45753C14.5168 6.1785 13.4438 5.09201 12.241 4.31528C10.9085 3.45509 9.43947 3.00031 7.99166 3.00031C7.2284 3.00135 6.47033 3.1258 5.74679 3.36882C5.72654 3.37556 5.70835 3.38737 5.69396 3.40312C5.67956 3.41887 5.66944 3.43805 5.66455 3.45882C5.65966 3.4796 5.66017 3.50128 5.66603 3.5218C5.67189 3.54232 5.68291 3.561 5.69803 3.57606L7.1746 5.05263C7.18994 5.068 7.20902 5.0791 7.22996 5.08486C7.25089 5.09061 7.27297 5.09082 7.294 5.08545C7.79451 4.96348 8.31798 4.97242 8.81402 5.1114C9.31007 5.25038 9.76198 5.51473 10.1262 5.879C10.4905 6.24326 10.7549 6.69517 10.8938 7.19122C11.0328 7.68726 11.0418 8.21074 10.9198 8.71124C10.9145 8.73223 10.9147 8.75424 10.9205 8.77512C10.9262 8.79599 10.9373 8.81502 10.9526 8.83033L13.0765 10.9558C13.0986 10.9779 13.1282 10.991 13.1594 10.9924C13.1907 10.9938 13.2213 10.9834 13.2453 10.9633C14.0629 10.2664 14.7713 9.45095 15.347 8.54401Z"
                fill="#020817"
              />
              <path
                d="M8.00145 11.002C7.54721 11.002 7.09889 10.8989 6.69029 10.7005C6.2817 10.502 5.9235 10.2134 5.64269 9.85635C5.36188 9.49931 5.1658 9.08317 5.06922 8.63931C4.97265 8.19546 4.97811 7.73547 5.08519 7.29403C5.0905 7.27304 5.09027 7.25102 5.08451 7.23015C5.07876 7.20927 5.06768 7.19025 5.05237 7.17494L2.96316 5.0848C2.94101 5.06262 2.91133 5.04957 2.88002 5.04824C2.8487 5.04691 2.81802 5.05739 2.79406 5.07761C2.03171 5.72806 1.32499 6.51948 0.678917 7.44437C0.565825 7.60669 0.503541 7.79897 0.499979 7.99677C0.496417 8.19456 0.551738 8.38896 0.658912 8.55524C1.4844 9.84708 2.54651 10.9351 3.73083 11.7012C5.06518 12.5649 6.49862 13.0025 7.99145 13.0025C8.7624 13.0004 9.52836 12.8786 10.2619 12.6414C10.2824 12.6349 10.3008 12.6232 10.3154 12.6075C10.33 12.5918 10.3403 12.5727 10.3454 12.5518C10.3505 12.531 10.3501 12.5092 10.3443 12.4885C10.3385 12.4679 10.3274 12.4491 10.3123 12.4339L8.8285 10.9505C8.81319 10.9351 8.79417 10.9241 8.77329 10.9183C8.75242 10.9126 8.73041 10.9123 8.70941 10.9176C8.47762 10.9738 8.23995 11.0021 8.00145 11.002V11.002Z"
                fill="#020817"
              />
            </svg>
          )}
        </button>
      </div>
      <button
        onClick={handleSubmit}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ transform: clicked ? "scale(0.95)" : "scale(1)" }}
      >
        Войти
      </button>
      <div className="have_no_account">
        Нет аккаунта?{" "}
        <div
          className="register"
          onClick={() => handleRedirect("/auth/register")}
        >
          Зарегистрироваться
        </div>
      </div>
      <div className="forgot_password">Забыли пароль?</div>
      <div
        className="error"
        style={
          notificationStatus
            ? { opacity: 1, zIndex: 1 }
            : { opacity: 0, zIndex: -2 }
        }
      >
        {notification}
      </div>
    </div>
  );
};

export default Login;
