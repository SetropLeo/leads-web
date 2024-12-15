import { notification } from "antd";

export const notify = ({
  message = "",
  placement = "topRight",
  type = "success",
  description = "",
}: NotifyProps) => {
  notification[type]({
    message,
    description,
    duration: 4.5,
    placement: placement,
  });
};

interface NotifyProps {
  type: "success" | "error" | "info" | "warning";
  message: string;
  description?: string;
  placement?:
    | "topRight"
    | "top"
    | "topLeft"
    | "bottom"
    | "bottomLeft"
    | "bottomRight";
}
