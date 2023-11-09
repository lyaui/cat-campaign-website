import Badge from '@/components/UI/Badge';

interface PolicyCardProps {
  title: string;
  order: string;
  policies: string[];
}

function PolicyCard({ title, order, policies }: PolicyCardProps) {
  return (
    <div
      className={`group flex flex-col gap-[10px] bg-white p-4 rounded-lg flex-1 overflow-hidden ${
        order === '二' ? 'lg:translate-y-7' : ''
      }`}
    >
      <Badge
        className={`lg:group-hover:-translate-y-10 lg:group-hover:opacity-0 c-transition`}
      >{`政策${order}`}</Badge>
      <div className={`lg:group-hover:-translate-y-10 c-transition`}>
        <h4 className='heading-4 mb-2.5'>{title}</h4>
        <ol>
          {policies.map((_policy, index) => (
            <li key={index} className='flex mb-2'>
              <p className='w-[24px] shrink-0'>{`${index + 1}.`}</p>
              <p>{_policy}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PolicyCard;
