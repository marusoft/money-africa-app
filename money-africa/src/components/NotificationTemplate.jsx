import React from "react";
import styled from "styled-components";
import {
  IoIosArrowRoundForward,
  IoMdNotificationsOutline,
} from "react-icons/io";

const NotificationTemplate = ({
  iconBg,
  message,
  time,
  service,
  courseLink,
}) => {
  return (
    <Template>
      <NotificationInfo>
        <NotificationIcon style={{ backgroundColor: `${iconBg}` }}>
          <IoMdNotificationsOutline style={IconsStylesTwo.bellIcon} />
        </NotificationIcon>
        <div>
          <NotificationMessage>
            {message} <b>"{service}"</b>
          </NotificationMessage>
          <NotificatonTime>{time}</NotificatonTime>
        </div>
      </NotificationInfo>
      <GoToCourse>
        <a href={courseLink}>
          Go to course{" "}
          <IoIosArrowRoundForward style={IconsStylesTwo.rightArrow} />
        </a>
      </GoToCourse>
    </Template>
  );
};

export default NotificationTemplate;
const Template = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  border-top: 0.3px solid #7c7c7c;
  border-bottom: 0.3px solid #7c7c7c;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const NotificationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  min-width: 3rem;
  border-radius: 50%;
  flex: 1;
`;

const NotificationMessage = styled.p`
  font-family: var(--helvetica-primary);
  font-size: 16px;
  color: #7c7c7c;
  @media (max-width: 850px) {
    font-size: 14px;
  }
  b {
    font-family: var(--helvetica-secondary);
    color: #30656f;
  }
`;
const NotificatonTime = styled.span`
  color: #7c7c7c;
  font-weight: 400;
  font-family: var(--helvetica-primary);
  font-size: 14px;
`;
const GoToCourse = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    color: var(--links-primary-color);
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

const IconsStylesTwo = {
  rightArrow: {
    fontSize: "24px",
    fill: "var(--links-primary-color)",
  },

  bellIcon: {
    fontSize: "30px",
  },
};
