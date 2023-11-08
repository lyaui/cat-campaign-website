import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

function ContactForm() {
  const inputs = [
    { id: 'name', placeholder: '您的姓名' },
    { id: 'email', placeholder: '您的 Email' },
    { id: 'name', placeholder: '您的手機' },
    { id: 'name', placeholder: '您的建言' },
  ];
  return (
    <form className='column-center gap-5 mt-5'>
      {inputs.map((_input) => (
        <Input key={_input.id} placeholder={_input.placeholder} />
      ))}

      <Button size='large'>送出意見</Button>
    </form>
  );
}

export default ContactForm;
