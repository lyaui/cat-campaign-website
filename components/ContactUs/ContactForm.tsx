import { useState, type FormEvent } from 'react';
import Modal from 'react-modal';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    maxWidth: 600,
    minWidth: 350,
    minHeight: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: '80px',
    border: 'unset',
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },
};

function SuccessPopup({
  isOpen = true,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} contentLabel='Submit success' style={customStyles}>
      <div className='h-full column-center text-center px-5 md:px-10'>
        <div className='mb-[50px]'>
          <h3 className='heading-4 title-dark mb-2.5'>
            感謝您抽出寶貴的時間給予我們寶貴的建議。
          </h3>
          <p className='font-bold title-dark'>
            我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。
          </p>
        </div>
        <Button variant='outlined' size='large' onClick={onClose}>
          返回
        </Button>
      </div>
    </Modal>
  );
}

function ContactForm() {
  const [isOpen, seIsOpen] = useState<boolean>(false);

  const inputs = [
    { id: 'name', placeholder: '您的姓名' },
    { id: 'email', placeholder: '您的 Email' },
    { id: 'mobile', placeholder: '您的手機' },
    { id: 'comment', placeholder: '您的建言', multiline: true },
  ];

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleModalOpen();
  }

  function handleModalOpen() {
    seIsOpen(true);
  }
  function handleModalClose() {
    seIsOpen(false);
  }
  return (
    <>
      <form
        className='column-center w-full gap-5 mt-5'
        onSubmit={handleFormSubmit}
      >
        {inputs.map((_input) => (
          <Input
            key={_input.id}
            placeholder={_input.placeholder}
            multiline={_input.multiline || false}
          />
        ))}
        <Button size='large' type='submit' data-modal-target='default-modal'>
          送出意見
        </Button>
      </form>
      <SuccessPopup isOpen={isOpen} onClose={handleModalClose} />
    </>
  );
}

export default ContactForm;
