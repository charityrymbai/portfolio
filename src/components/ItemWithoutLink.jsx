

const ItemWithoutLink = ({ logo, title, details }) => (
    <li className=" flex gap-10 text-xl items-start mb-8">
      <div className="flex items-center space-x-2 mr-4">
          <img className="w-20 h-auto" src={logo} alt="logo" />
      </div>
      <div className='flex flex-row-reverse'>
        <div>
          <div className='flex justify-end gap-2'>
            <h3 className="font-semibold text-2xl">{title}</h3>
          </div>
            <p className="text-gray-600 mt-1">{details}</p>
        </div>
      </div>
    </li>
  );

export default ItemWithoutLink;