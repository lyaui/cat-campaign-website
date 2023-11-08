import Badge from '@/components/UI/Badge';

interface PolicyCardProps {
  title: string;
  order: string;
  policies: string[];
}

function PolicyCard({ title, order, policies }: PolicyCardProps) {
  return (
    <div className='flex flex-col gap-[10px] bg-white p-4 rounded-lg flex-1'>
      <Badge>{`政策${order}`}</Badge>
      <h4 className='heading-4'>{title}</h4>
      <ol>
        {policies.map((_policy, index) => (
          <li key={index} className='flex mb-2'>
            <p className='w-[24px] shrink-0'>{`${index + 1}.`}</p>
            <p>{_policy}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default PolicyCard;
