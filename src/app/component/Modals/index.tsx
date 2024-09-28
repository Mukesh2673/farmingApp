import React from 'react';
import { Modal } from 'react-bootstrap';

type CustomModalProps = {
  className?: string;
  show: boolean;
  handleClose: () => void;
  headerSlot?: React.ReactNode;
  bodySlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  size?: 'sm' | 'lg' | 'xl'; // Specific sizes allowed by react-bootstrap Modal
};

const CustomModal: React.FC<CustomModalProps> = ({
  className,
  show,
  handleClose,
  headerSlot,
  bodySlot,
  footerSlot,
  size = 'lg', // default value for size if not provided
}) => {
  return (
    <Modal
      className={className}
      show={show}
      onHide={handleClose}
      size={size}
      backdrop="static" 
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      {headerSlot && (
        <Modal.Header closeButton className="modalHeader">
          {headerSlot}
        </Modal.Header>
      )}
      <Modal.Body className="modalBody">
        {bodySlot}
      </Modal.Body>
      {footerSlot && (
        <Modal.Footer className="modalFooter">
          {footerSlot}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CustomModal;
