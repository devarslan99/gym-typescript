type Props = {
    name : string;
    description?: string;
    image : string;
}

const Class = ({name, description, image}: Props) => {
    const overlayStyles = `p-5 absolute z-30 h-[380px] w-[450px] flex flex-col justify-center items-center whitespace-normal text-center
    text-white bg-primary-500 opacity-0 transition duration-500 hover:opacity-90 hover:cursor-pointer`


  return (
    <li
        className="mx-5 relative inline-block h-[380px] w-[450px]"
    >
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img className="h-full" src={image} alt={`${image}`} />
    </li>
  )
}

export default Class