import React from "react";
import styled from "styled-components";
import NotificationTemplate from "./NotificationTemplate";
import { NotificationData } from "./NotificationData";

const Notifications = () => {
  return (
    <Notification>
      <div className="container">
        <NotificationContents>
          <Headers>
            <h3>Notifications</h3>
          </Headers>
          <div className="notification_list">
            {NotificationData.map(
              ({ id, iconBg, message, time, service, courseLink }) => {
                return (
                  <NotificationTemplate
                    key={id}
                    id={id}
                    iconBg={iconBg}
                    message={message}
                    time={time}
                    service={service}
                    courseLink={courseLink}
                  />
                );
              }
            )}
          </div>
        </NotificationContents>
      </div>
    </Notification>
  );
};

export default Notifications;
const Notification = styled.section`
  max-width: 1440px;
  padding-top: 8rem;
  height: 100vh;
  .notification_list {
    margin-top: 1.2rem;
  }
`;

const NotificationContents = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  flex-flow: column;
`;

const Headers = styled.div`
  display: flex;
  gap: 1rem;
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: auto 0;
  }
`;
