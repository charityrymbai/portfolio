import { ExternalLink } from 'lucide-react'

const ItemWithLink = ({ logo, link, title, details }) => (
    <li className="flex gap-10 items-start mb-8">
      <div className="flex items-center space-x-2 mr-4">
          <img className="min-w-16 w-24 h-auto" src={logo} alt="logo" />
      </div>
      <div>
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
        <div className='flex gap-2'>
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          <ExternalLink className='min-w-4'/>
        </div>
        </a>
          <p className="text-sm sm:text-xl text-gray-600 mt-1 max-w-[600px]">{details}</p>
        
      </div>
    </li>
  );

export default ItemWithLink;