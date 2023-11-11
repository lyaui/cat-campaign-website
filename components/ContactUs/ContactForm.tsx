import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

function ContactForm() {
  const inputs = [
    { id: 'name', placeholder: '您的姓名' },
    { id: 'email', placeholder: '您的 Email' },
    { id: 'mobile', placeholder: '您的手機' },
    { id: 'comment', placeholder: '您的建言', multiline: true },
  ];
  return (
    <form className='column-center w-full gap-5 mt-5'>
      {inputs.map((_input) => (
        <Input
          key={_input.id}
          placeholder={_input.placeholder}
          multiline={_input.multiline || false}
        />
      ))}

      <Button size='large'>送出意見</Button>
    </form>
  );
}

export default ContactForm;
