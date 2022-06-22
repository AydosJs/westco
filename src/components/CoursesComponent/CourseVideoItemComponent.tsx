type Props = {
  index: number
}

export default function CourseVideoItemComponent({ index }: Props) {
  return (
    <div className='w-full flex flex-row justify-between p-2 space-x-4 items-center group hover:bg-gray-50 cursor-pointer'>
      {/* <span className="w-8">
        {index}
      </span> */}
      <div className="p-2.5 cursor-pointer bg-blue-200 group-hover:bg-blue-400 hover:bg-blue-400 text-white flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p className="text-gray-600 group-hover:text-gray-900 line-clamp-1 text-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque dolore fuga sequi?
        </p>
      </div>
      <div className="w-20">
        <p className="text-gray-600 group-hover:text-gray-900  line-clamp-1 ">
          35:47 min
        </p>
      </div>
    </div>
  )
}