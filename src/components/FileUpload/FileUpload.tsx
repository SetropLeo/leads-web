"use client";

import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Upload } from "antd";

const { Dragger } = Upload;

const FileUpload = ({ onUploadFile, file }: FileUploadProps) => {
  const fileList = (file ? [file] : []) as unknown as UploadFile[];

  const fileUploadProps: UploadProps = {
    fileList,
    name: "file",
    accept: ".pdf",
    multiple: false,
    beforeUpload(file) {
      onUploadFile(file);
      return false;
    },
    onChange(info) {
      if (info.file.status === "removed") {
        onUploadFile(null);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...fileUploadProps}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Clique ou arraste o arquivo para esta área para enviar
      </p>
      <p className="ant-upload-hint">
        Suporte para upload de um único arquivo. Proibido enviar dados
        confidenciais ou arquivos não permitidos.
      </p>
    </Dragger>
  );
};

export default FileUpload;

interface FileUploadProps {
  onUploadFile: (file: File | null) => void;
  file: File | null;
}
