import { ICategorie } from '../../containers/client/categories/CategoriesContainer'
import { ICourse } from '../../containers/client/courses/CoursesContainer'

type Props = {
  categorie: ICategorie
}

export default function CategoriesComponent({ categorie }: Props) {
  return (
    <div className="p-2 w-full bg-white rounded-lg hover:shadow-lg">
      <div className="h-full flex items-center  p-4 ">
        <img alt="team" className="w-16 mr-4  h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" src={`https://coursesnodejs.herokuapp.com/${categorie?.imgUrl}`} />
        {/* 
        <div className='w-16 h-16 border rounded-full flex items-center justify-center mr-4 bg-gray-100'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
        </div> */}
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium line-clamp-1 first-letter:uppercase">
            {categorie?.name}
          </h2>
          <p className="text-gray-500">
            Number of books:
            <span className='font-medium'>&nbsp;{categorie?.books?.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}