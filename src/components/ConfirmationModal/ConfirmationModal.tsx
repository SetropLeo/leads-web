"use client";

import React from "react";

import Image from "next/image";
import { Button, Modal } from "antd";
import { icons } from "@/constants";
import { useUIStore } from "@/stores";

import "./styles.css";

const ConfirmationModal = ({
  icon = "info",
  title = "",
  text = "",
  btnText = "",
}: ConfirmationModalProps) => {
  const setModalState = useUIStore((state) => state.setShowConfirmationModal);
  const isOpen = useUIStore((state) => state.showConfirmationModal);

  const onOk = () => {
    setModalState(false);
  };

  return (
    <Modal
      open={isOpen}
      onOk={onOk}
      okText="Confirm"
      closeIcon={null}
      cancelText="Cancel"
      cancelButtonProps={{
        style: { display: "none" },
      }}
      okButtonProps={{
        style: { display: "none" },
      }}
      className="confirmation-modal-container"
    >
      <div className="modal-content">
        {icon && (
          <Image src={icons[icon]} alt="step icon" width={64} height={64} />
        )}
        <h3 className="modal-title">{title}</h3>
        <p className="modal-text">{text}</p>
        <Button
          variant="solid"
          color="default"
          onClick={onOk}
          className="modal-confirm-btn"
        >
          {btnText}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

interface ConfirmationModalProps {
  icon?: "love" | "info" | "dice" | null;
  title?: string;
  text?: string;
  btnText?: string;
  content?: string;
}
