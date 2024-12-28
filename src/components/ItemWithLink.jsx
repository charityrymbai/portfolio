import { ExternalLink } from 'lucide-react'

const ItemWithLink = ({ logo, link, title, details }) => (
    <li className=" flex gap-10 text-xl items-start mb-8">
      <div className="flex items-center space-x-2 mr-4">
          <img className="w-20 h-auto" src={logo} alt="logo" />
      </div>
      <div>
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
        <div className='flex gap-2'>
          <h3 className="font-semibold">{title}</h3>
          <ExternalLink />
        </div>
        </a>
          <p className="text-gray-600 mt-1 w-[600px]">{details}</p>
        
      </div>
    </li>
  );

export default ItemWithLink;