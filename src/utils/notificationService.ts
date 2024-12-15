import { notification } from "antd";

export const notify = (
  type: "success" | "error" | "info" | "warning",
  message: string,
  description?: string
) => {
  notification[type]({
    message,
    description,
    duration: 4.5, // Tempo padrão de exibição
    placement: "topRight", // Posição padrão
  });
};
